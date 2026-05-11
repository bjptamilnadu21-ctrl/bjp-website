import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-r from-orange-200 via-white to-green-200 min-h-screen pt-24">
      <Navbar />
      <Hero />
      <Cards />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;