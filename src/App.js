import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MostSellers from "./components/MostSellers";
import Sales from "./components/Sales";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Products from "./components/Products";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const MainPage = () => (
  <>
    <MostSellers />
    <Sales />
    <Categories />
  </>
);

export default App;
