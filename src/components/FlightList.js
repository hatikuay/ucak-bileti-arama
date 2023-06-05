import React from 'react';
import './FlightList.css';

const FlightList = ({ flights, onSelectFlight }) => {
  return (
    <div className="flight-list-container">
      <h3 className="flight-list-title">Flight List</h3>
      {flights.length > 0 ? (
        <ul className="flight-list">
          {flights.map((flight) => (
            <li key={flight.id} className="flight-item">
              <div className="flight-details">
                <span className="flight-info">From: {flight.from}</span>
                <span className="flight-info">To: {flight.to}</span>
                <span className="flight-info">Departure Date: {flight.departureDate}</span>
                <span className="flight-info">Return Date: {flight.returnDate}</span>
                <span className="flight-info">Airline: {flight.airline}</span>
                <span className="flight-info">Price: {flight.price}</span>
                <span className="flight-info">Departure Time: {flight.departureTime}</span>
                <span className="flight-info">Arrival Time: {flight.arrivalTime}</span>
                <span className="flight-info">Duration: {flight.duration}</span>
              </div>
              <button className="select-button" onClick={() => onSelectFlight(flight)}>Select</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No flights available.</p>
      )}
    </div>
  );
};

export default FlightList;


