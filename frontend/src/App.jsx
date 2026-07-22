import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";
import Birds from "./pages/Birds";
import Fish from "./pages/Fish";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VerifyOTP from "./pages/VerifyOTP";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Home />
              </>
            </ProtectedRoute>
          }
        />

        {/* Protected Pet Pages */}
        <Route
          path="/dogs"
          element={
            <ProtectedRoute>
              <Dogs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cats"
          element={
            <ProtectedRoute>
              <Cats />
            </ProtectedRoute>
          }
        />

        <Route
          path="/birds"
          element={
            <ProtectedRoute>
              <Birds />
            </ProtectedRoute>
          }
        />

        <Route
          path="/fish"
          element={
            <ProtectedRoute>
              <Fish />
            </ProtectedRoute>
          }
        />

        {/* Protected User Pages */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;