import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "./ProductDetailsPage.css";

const ProductDetailsPage = () => {
  const { addToCart } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  const [selectedSize, setSelectedSize] = useState("M"); // Default size
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p>Product not found!</p>;
  }

  const handleAddToCart = () => {
    const productWithSelection = {
      ...product,
      size: selectedSize,
      quantity,
    };

    addToCart(productWithSelection);
    toast.success(`${product.name} has been added to your cart!`);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="product-details-page">
      <div className="product-card">
        {/* Left Section */}
        <div className="product-left-section">
          <button className="back-button" onClick={() => navigate(-1)}>
            ←
          </button>
          <img src={product.image} alt={product.name} className="product-image" />
        </div>

        {/* Right Section */}
        <div className="product-right-section">
          <h1 className="product-title">{product.name}</h1>
          <h2 className="product-description-title">DESCRIPTION</h2>
          <p className="product-description">{product.description}</p>

          {/* Conditionally Render Prices */}
          {product.oldPrice ? (
            <p className="product-price">
              <span className="old-price">{product.oldPrice} EGP</span>{" "}
              <span className="new-price">{product.price} EGP</span>
            </p>
          ) : (
            <p className="product-price">{product.price} EGP</p>
          )}

          {/* Size Selection */}
          <div className="product-options">
            <h3>Size:</h3>
            <div className="size-options">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`size-option ${selectedSize === size ? "active" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="quantity-selector">
            <button onClick={decrementQuantity} className="quantity-button">-</button>
            <span className="quantity-value">{quantity}</span>
            <button onClick={incrementQuantity} className="quantity-button">+</button>
          </div>

          {/* Add to Cart Button */}
          <button onClick={handleAddToCart} className="add-to-cart-button">
            Add to Cart
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetailsPage;
