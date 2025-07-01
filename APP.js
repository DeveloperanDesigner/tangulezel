import React, { useState } from 'react';
import './App.css';
import Logo from './images/Logo.svg';
import BasketIcon from './images/basket.svg';
import HamburgerMenuIcon from './images/icon_hamburger_menu_.svg';
import LemonDessert from './images/lemon_dessert.jpg';
import GreekSalad from './images/greek_salak.jpg';
import RestaurantImage from './images/restaurant.jpg';
import CreditCardIcon from './images/creditcard.svg';

const App = () => {
  // State management for booking
  const [peopleCount, setPeopleCount] = useState(4);
  const [bookingDate, setBookingDate] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="App">
      <header>
        <img src={Logo} alt="Little Lemon Logo" className="logo" />
        <nav>
          <ul>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#book-table">Book a Table</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Section: About */}
        <section id="about" className="section">
          <h1>About Little Lemon</h1>
          <p>Little Lemon is a family-owned Mediterranean restaurant offering traditional dishes with a modern twist.</p>
          <img src={LemonDessert} alt="Lemon Dessert" className="section-img" />
        </section>

        {/* Section: Menu */}
        <section id="menu" className="section">
          <h2>Our Menu</h2>
          <div className="menu-items">
            <img src={GreekSalad} alt="Greek Salad" className="menu-item" />
            <img src={RestaurantImage} alt="Restaurant Food" className="menu-item" />
          </div>
        </section>

        {/* Section: Booking */}
        <section id="book-table" className="section">
          <h2>Book a Table</h2>
          <form>
            <div>
              <label htmlFor="booking_date">Booking Date</label>
              <input 
                type="date" 
                id="booking_date" 
                value={bookingDate} 
                onChange={(e) => setBookingDate(e.target.value)} 
              />
            </div>
            <div>
              <label htmlFor="people_count">Number of People</label>
              <input 
                type="number" 
                id="people_count" 
                value={peopleCount} 
                min="1" 
                max="10" 
                onChange={(e) => setPeopleCount(e.target.value)} 
              />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <select 
                id="location" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="downtown">Downtown</option>
                <option value="uptown">Uptown</option>
              </select>
            </div>
            <button type="submit">Book Table</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Little Lemon. All rights reserved.</p>
        <div className="footer-icons">
          <img src={BasketIcon} alt="Basket Icon" />
          <img src={HamburgerMenuIcon} alt="Hamburger Menu Icon" />
          <img src={CreditCardIcon} alt="Credit Card Icon" />
        </div>
      </footer>
    </div>
  );
};

export default App;
