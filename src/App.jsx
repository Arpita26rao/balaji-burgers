import Navbar from "./componets/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="flex items-center justify-center min-h-[80vh]">
        <h1 className="text-5xl font-bold text-orange-500">
          Balaji Burgers 🍔
        </h1>
      </div>
    </div>
  );
}

export default App;