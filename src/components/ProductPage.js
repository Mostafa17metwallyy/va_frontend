import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductPage.css";
import frontTShirt from "../assets/front-t-shirt-removebg-preview.png";

const ProductPage = () => {
  const navigate = useNavigate();

  // Sample product data
  const products = [
    {
      id: 1,
      name: "T-Shirt 1",
      color: "Black",
      price: 600,
      image: frontTShirt,
      description: "This is a high-quality T-shirt made of premium materials.",
    },
    {
      id: 2,
      name: "T-Shirt 2",
      color: "Black",
      price: 600,
      image: frontTShirt,
      description: "A durable and stylish T-shirt for everyday wear.",
    },
    {
      id: 3,
      name: "T-Shirt 3",
      color: "Black",
      price: 600,
      image: frontTShirt,
      description: "Perfect for gym wear, combining comfort and performance.",
    },
    {
      id: 4,
      name: "T-Shirt 4",
      color: "Black",
      price: 600,
      image: frontTShirt,
      description: "Minimalistic design, suitable for casual outings.",
    },
  ];

  return (
    <div className="product-page">
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
            <p>{product.price} EGP</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductPage;
