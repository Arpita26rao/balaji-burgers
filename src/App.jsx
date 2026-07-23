import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import Menu from "./componets/MenuSection";
import About from "./componets/AboutSection";
import Contact from "./componets/ContactSection";
import Footer from "./componets/Footer";
function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Menu />
      <About/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;