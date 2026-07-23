import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import Menu from "./componets/Menu";
import About from "./componets/About";
import Contact from "./componets/Contact";
function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Menu />
      <About/>
      <Contact/>
      
    </div>
  );
}

export default App;