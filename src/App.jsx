import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import Menu from "./componets/Menu";
import About from "./componets/About";
function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Menu />
      <About/>
      
    </div>
  );
}

export default App;