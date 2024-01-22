import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


// Import your components
import {Home, About, Projects, Contact} from "./pages";
import Navbar from "./components/Navbar";


function App() {
  return (
   <main className="h-full">
    <Router>
      <Navbar /> {/* Render Navbar outside of Routes to make it persistent */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </main>
  );
}

export default App;
