import React from "react";
import greekSalad from "../assets/greek-salad.jpg";
import lemonDessert from "../assets/lemon-dessert.jpg";
import restaurantFood from "../assets/restaurantfood.jpg";

const Menu = () => {
  return (
    <section className="menu">
      <h2>Our Menu</h2>
      <div className="menu-items">
        <div className="menu-item">
          <img src={greekSalad} alt="Greek Salad" />
          <h3>Greek Salad</h3>
          <p>A delicious mix of fresh greens, tomatoes, and feta cheese</p>
        </div>
        <div className="menu-item">
          <img src={lemonDessert} alt="Lemon Dessert" />
          <h3>Lemon Dessert</h3>
          <p>A sweet and tangy dessert with a refreshing lemon flavor</p>
        </div>
        <div className="menu-item">
          <img src={restaurantFood} alt="Restaurant Food" />
          <h3>Signature Dish</h3>
          <p>Our chef's special, made with seasonal ingredients</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
