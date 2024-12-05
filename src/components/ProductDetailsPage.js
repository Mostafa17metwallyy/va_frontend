import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./ProductDetailsPage.css";

const ProductDetailsPage = () => {
  const { addToCart } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  if (!product) {
    return <p>Product not found!</p>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="product-details-page">
      <div className="product-card">
        <div className="product-left-section">
          <button className="back-button" onClick={() => navigate(-1)}>
            ←
          </button>
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
        <div className="product-right-section">
          <h1>{product.name}</h1>
          <h2 className="product-description-title">Description</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">{product.price} EGP</p>
          <button onClick={handleAddToCart} className="add-to-cart-button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
