import frontTShirt from "../assets/front-t-shirt-removebg-preview.png";

const MostSellers = () => {
  const items = [
    { id: 1, name: "T-shirt 1", color: "Black", price: "599.99 EGP", image: frontTShirt },
    { id: 2, name: "T-shirt 2", color: "Black", price: "599.99 EGP", image: frontTShirt },
    { id: 3, name: "T-shirt 3", color: "Black", price: "599.99 EGP", image: frontTShirt },
  ];

  return (
    <section className="most-sellers">
      <h2>Don't Miss Our Most Sellers Items</h2>
      <div className="item-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} />
            <p><strong>{item.name}</strong></p>
            <p> {item.color}</p>
            <p> {item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostSellers;
