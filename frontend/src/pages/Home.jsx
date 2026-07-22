import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Features from "../components/Features";
import FeaturedPets from "../components/FeaturedPets";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Features />
      <FeaturedPets />
      <Footer />
    </>
  );
}

export default Home;