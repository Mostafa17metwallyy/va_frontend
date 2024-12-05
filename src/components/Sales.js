import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import frontTShirt from "../assets/front-t-shirt-removebg-preview.png";

const Sales = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const salesItems = [
    {
      id: 1,
      name: "Tank",
      oldPrice: "599.99 EGP",
      price: "399.99 EGP",
      image: frontTShirt,
      description: "Stylish tank top for your casual or workout needs.",
    },
    {
      id: 2,
      name: "Tank",
      oldPrice: "599.99 EGP",
      price: "399.99 EGP",
      image: frontTShirt,
      description: "Comfortable tank top at an unbeatable price.",
    },
    {
      id: 3,
      name: "Tank",
      oldPrice: "599.99 EGP",
      price: "399.99 EGP",
      image: frontTShirt,
      description: "Perfect tank top for any occasion.",
    },
  ];

  const handleCardClick = (item) => {
    // Navigate to the product details page with the item data
    navigate(`/product/${item.id}`, { state: item });
  };

  return (
    <section className="sales">
      <h2>Don't Miss Our Sale</h2>
      <div className="item-grid">
        {salesItems.map((item) => (
          <div
            key={item.id}
            className="item-card"
            onClick={() => handleCardClick(item)} // Add click event
            style={{ cursor: "pointer" }} // Indicate clickable card
          >
            <span className="sale-badge">SALE</span> {/* Sale badge */}
            <img src={item.image} alt={item.name} />
            <p>
              <strong>{item.name}</strong>
            </p>
            <p>
              <span className="old-price">{item.oldPrice}</span>
              <span className="new-price">{item.price}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sales;
