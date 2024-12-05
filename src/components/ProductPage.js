import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductPage.css"; // Add appropriate styling
import frontTShirt from "../assets/front-t-shirt-removebg-preview.png";

const ProductPage = () => {
  const navigate = useNavigate();

  // Sample product data
  const products = [
    { id: 1, name: "T-Shirt 1", color: "Black", price: 600, image: frontTShirt },
    { id: 2, name: "T-Shirt 2", color: "Black", price: 600, image: frontTShirt },
    { id: 3, name: "T-Shirt 3", color: "Black", price: 600, image: frontTShirt },
    { id: 4, name: "T-Shirt 4", color: "Black", price: 600, image: frontTShirt },
  ];

  return (
    <div className="product-page">
      {/* Product Grid */}
      <section className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => navigate(`/product/${product.id}`, { state: product })}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.color}</p>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </section>

      {/* Pagination */}
      <div className="pagination">
        <button className="page-button">&lt;</button>
        <button className="page-button active">1</button>
        <button className="page-button">2</button>
        <button className="page-button">3</button>
        <button className="page-button">&gt;</button>
      </div>
    </div>
  );
};

export default ProductPage;
