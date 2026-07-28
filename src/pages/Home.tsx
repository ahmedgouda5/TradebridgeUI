import Hero from "../features/LandingPage/Hero";
import Catalog from "../features/LandingPage/CataLog";
import Suppliers from "../features/LandingPage/Suppliers";
import About from "../features/LandingPage/About";
import Testimonials from "../features/LandingPage/Testimonials";
import Contact from "../features/LandingPage/Contact";

const Home = () => {
  return (
    <div className="bg-[#FAF8F4]">
      <Hero id="home" />
      <Catalog id="categories" />
      <Suppliers id="suppliers" />
      <About id="about" />
      <Testimonials id="testimonials" />
      <Contact id="contact" />
    </div>
  );
};

export default Home;
