import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import MostSellers from "./components/MostSellers";
import Sales from "./components/Sales";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import About from "./components/About";
// import Contact from "./components/Contact";
// import Products from "./components/Products";
import Header from "./components/Header";
import "./App.css";
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <ConditionalHeader /> {/* Conditional Header */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const MainPage = () => (
  <main>
    <MostSellers />
    <Sales />
    <Categories />
  </main>
);

// Conditional Header Component
const ConditionalHeader = () => {
  const location = useLocation(); // Get the current route
  return location.pathname === "/" ? <Header /> : null; // Render Header only on the home page
};

export default App;
