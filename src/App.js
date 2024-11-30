import React from "react";
import Header from "./components/Header";
import MostSellers from "./components/MostSellers";
import Sales from "./components/Sales";
import Footer from "./components/Footer";
import "./App.css";
import Categories from "./components/Categories";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <MostSellers />
        <Sales />
      </main>
      <Categories />
      <Footer />
    </div>
  );
};

export default App;
