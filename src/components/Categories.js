const Categories = () => {
    const categories = [
      {
        title: "Women's Leggings",
        items: [
          "Gym Leggings",
          "Leggings With Pockets",
          "High Waisted Leggings",
          "Scrunch Bum Leggings",
          "Black Leggings",
          "Flared Leggings",
          "Seamless Leggings",
          "Petite Gym Leggings",
        ],
      },
      {
        title: "Women's Gymwear",
        items: [
          "Women's Gym Wear",
          "Women's Gym Shorts",
          "Running Shorts",
          "Sports Bras",
          "High Impact Sports Bras",
          "Black Sports Bras",
          "Matching Sets",
          "Loungewear",
        ],
      },
      {
        title: "Men's Gymwear",
        items: [
          "Men's Gymwear",
          "Men's Gym Shorts",
          "Shorts with Pockets",
          "Men's Running Shorts",
          "Gym T-Shirts & Tops",
          "Sleeveless T-Shirts",
          "Gym Stringers",
          "Men's Baselayers",
        ],
      },
      {
        title: "Accessories",
        items: [
          "Women's Underwear",
          "Men's Underwear",
          "Workout Bags",
          "Duffel Bags",
          "Gym Socks",
          "Crew Socks",
          "Caps",
          "Beanies",
        ],
      },
    ];
  
    return (
      <section className="categories">
        <div className="category-grid">
          {categories.map((category, index) => (
            <div key={index} className="category">
              <h3>{category.title}</h3>
              <ul>
                {category.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Categories;
  