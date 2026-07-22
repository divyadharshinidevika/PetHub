const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const User = require("../models/User");

const router = express.Router();

// EMAIL CONFIGURATION
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});
transporter.verify((error) => {
  if (error) {
    console.log("❌ Email Error:", error.message);
  } else {
    console.log("✅ Email Server Ready");
  }
});

// Generate a 6-digit OTP
const generateOtp = () => {
  return crypto.randomInt(100000, 1000000).toString();
};

// Hash OTP before saving it in MongoDB
const hashOtp = (otp) => {
  return crypto.createHash("sha256").update(otp).digest("hex");
};

// Send verification email
const sendVerificationEmail = async (email, name, otp) => {
  await transporter.sendMail({
    from: `"PetHub" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Verify your PetHub account",
    html: `
      <div
        style="
          max-width: 520px;
          margin: auto;
          padding: 30px;
          font-family: Arial, sans-serif;
          border: 1px solid #eeeeee;
          border-radius: 12px;
        "
      >
        <h1 style="color: #ff6b35; text-align: center;">
          🐾 PetHub
        </h1>

        <h2>Hello ${name},</h2>

        <p>
          Thank you for creating your PetHub account.
          Use the OTP below to verify your email address.
        </p>

        <div
          style="
            margin: 25px 0;
            padding: 18px;
            text-align: center;
            background-color: #fff4ef;
            border-radius: 10px;
          "
        >
          <span
            style="
              font-size: 32px;
              font-weight: bold;
              letter-spacing: 8px;
              color: #ff6b35;
            "
          >
            ${otp}
          </span>
        </div>

        <p>This OTP will expire in 10 minutes.</p>

        <p>
          Do not share this OTP with anyone.
        </p>

        <p style="margin-top: 30px;">
          Regards,<br />
          <strong>PetHub Team</strong>
        </p>
      </div>
    `,
  });
};

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    let { name, email, phone, password } = req.body;

    name = name?.trim();
    email = email?.trim().toLowerCase();
    phone = phone?.trim();

    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        message: "Name, email, phone number and password are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must contain at least 6 characters",
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return res.status(400).json({
        message: "Please enter a valid email address",
      });
    }

    const phonePattern = /^[6-9]\d{9}$/;

    if (!phonePattern.test(phone)) {
      return res.status(400).json({
        message: "Please enter a valid 10-digit Indian mobile number",
      });
    }

    const existingVerifiedUser = await User.findOne({
      $or: [{ email }, { phone }],
      isVerified: true,
    });

    if (existingVerifiedUser) {
      if (existingVerifiedUser.email === email) {
        return res.status(400).json({
          message: "An account already exists with this email",
        });
      }

      return res.status(400).json({
        message: "An account already exists with this phone number",
      });
    }

    // Remove an earlier unverified signup using the same email or phone.
    await User.deleteMany({
      $or: [{ email }, { phone }],
      isVerified: false,
    });

    const hashedPassword = await bcrypt.hash(password, 10);

    const otp = generateOtp();
    const hashedOtp = hashOtp(otp);

    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
      isVerified: false,
      otp: hashedOtp,
      otpExpiry,
    });

    try {
      await sendVerificationEmail(email, name, otp);
    } catch (emailError) {
      // Remove user when email could not be sent.
      await User.findByIdAndDelete(user._id);

      console.error("Email sending error:", emailError);

      return res.status(500).json({
        message:
          "We could not send the verification email. Please try again.",
      });
    }

    return res.status(201).json({
      message: "OTP sent successfully. Please check your email.",
      email: user.email,
    });
  } catch (error) {
    console.error("Signup error:", error);

    if (error.code === 11000) {
      return res.status(400).json({
        message: "Email address or phone number already exists",
      });
    }

    return res.status(500).json({
      message: "Signup failed",
      error: error.message,
    });
  }
});

// VERIFY OTP
router.post("/verify-otp", async (req, res) => {
  try {
    let { email, otp } = req.body;

    email = email?.trim().toLowerCase();
    otp = otp?.trim();

    if (!email || !otp) {
      return res.status(400).json({
        message: "Email and OTP are required",
      });
    }

    if (!/^\d{6}$/.test(otp)) {
      return res.status(400).json({
        message: "OTP must contain exactly 6 digits",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "Signup request not found",
      });
    }

    if (user.isVerified) {
      return res.status(400).json({
        message: "Account is already verified. Please login.",
      });
    }

    if (!user.otp || !user.otpExpiry) {
      return res.status(400).json({
        message: "OTP is unavailable. Please request a new OTP.",
      });
    }

    if (user.otpExpiry.getTime() < Date.now()) {
      return res.status(400).json({
        message: "OTP has expired. Please request a new OTP.",
      });
    }

    const hashedEnteredOtp = hashOtp(otp);

    if (hashedEnteredOtp !== user.otp) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    user.isVerified = true;
    user.otp = "";
    user.otpExpiry = undefined;

    await user.save();

    return res.json({
      message: "Email verified successfully. You can now login.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("OTP verification error:", error);

    return res.status(500).json({
      message: "OTP verification failed",
      error: error.message,
    });
  }
});

// RESEND OTP
router.post("/resend-otp", async (req, res) => {
  try {
    let { email } = req.body;

    email = email?.trim().toLowerCase();

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "Signup request not found",
      });
    }

    if (user.isVerified) {
      return res.status(400).json({
        message: "Account is already verified. Please login.",
      });
    }

    const otp = generateOtp();

    user.otp = hashOtp(otp);
    user.otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

    await user.save();

    try {
      await sendVerificationEmail(user.email, user.name, otp);
    } catch (emailError) {
      console.error("Resend OTP email error:", emailError);

      return res.status(500).json({
        message: "We could not resend the OTP email",
      });
    }

    return res.json({
      message: "A new OTP has been sent to your email",
      email: user.email,
    });
  } catch (error) {
    console.error("Resend OTP error:", error);

    return res.status(500).json({
      message: "Failed to resend OTP",
      error: error.message,
    });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    email = email?.trim().toLowerCase();

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    if (!user.isVerified) {
      return res.status(403).json({
        message: "Please verify your email before logging in",
        requiresVerification: true,
        email: user.email,
      });
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not configured");
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
});

module.exports = router;