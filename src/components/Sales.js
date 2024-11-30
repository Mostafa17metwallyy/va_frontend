import React from "react";
import frontTShirt from "../assets/front-t-shirt-removebg-preview.png";

const Sales = () => {
  const salesItems = [
    {
      id: 1,
      name: "Tank",
      oldPrice: "599.99 EGP",
      price: "399.99 EGP",
      image: frontTShirt,
    },
    {
      id: 2,
      name: "Tank",
      oldPrice: "599.99 EGP",
      price: "399.99 EGP",
      image: frontTShirt,
    },
    {
      id: 3,
      name: "Tank",
      oldPrice: "599.99 EGP",
      price: "399.99 EGP",
      image: frontTShirt,
    },
  ];

  return (
    <section className="sales">
      <h2>Don't Miss Our Sale</h2>
      <div className="item-grid">
        {salesItems.map((item) => (
          <div key={item.id} className="item-card">
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
