import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import frontTShirt from "../assets/front-t-shirt-removebg-preview.png";

const MostSellers = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const items = [
    { id: 1, name: "T-shirt 1", color: "Black", price: "599.99 EGP", image: frontTShirt, description: "High-quality black T-shirt for everyday wear." },
    { id: 2, name: "T-shirt 2", color: "Black", price: "599.99 EGP", image: frontTShirt, description: "Stylish and comfortable T-shirt for casual outings." },
    { id: 3, name: "T-shirt 3", color: "Black", price: "599.99 EGP", image: frontTShirt, description: "Durable T-shirt perfect for gym and exercise." },
  ];

  const handleCardClick = (item) => {
    // Navigate to the product details page with the item data
    navigate(`/product/${item.id}`, { state: item });
  };

  return (
    <section className="most-sellers">
      <h2>Don't Miss Our Most Sellers Items</h2>
      <div className="item-grid">
        {items.map((item) => (
          <div
            key={item.id}
            className="item-card"
            onClick={() => handleCardClick(item)} // Add click event
            style={{ cursor: "pointer" }} // Indicate clickable card
          >
            <img src={item.image} alt={item.name} />
            <p><strong>{item.name}</strong></p>
            <p>{item.color}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostSellers;
