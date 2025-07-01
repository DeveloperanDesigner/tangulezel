import React, { useState } from "react";

const Reservation = () => {
  const [peopleCount, setPeopleCount] = useState(2);

  const handlePeopleChange = (event) => {
    setPeopleCount(event.target.value);
  };

  return (
    <section className="reservation">
      <h2>Book a Table</h2>
      <form>
        <div>
          <label htmlFor="booking-date">Booking Date</label>
          <input type="date" id="booking-date" />
        </div>
        <div>
          <label htmlFor="people-count">Number of People</label>
          <input
            type="range"
            id="people-count"
            min="1"
            max="10"
            value={peopleCount}
            onChange={handlePeopleChange}
          />
          <output>{peopleCount}</output>
        </div>
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
};

export default Reservation;
