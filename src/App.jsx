// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";   // 👈 "./", no "../"
import Home from "./pages/Home.jsx";            // 👈 "./", no "../"
import Contacto from "./pages/Contacto.jsx";    // 👈 "./", no "../"

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </main>
      <footer className="footer">
        <small>© {new Date().getFullYear()} Lenguajes IV – TP3</small>
      </footer>
    </>
  );
}
