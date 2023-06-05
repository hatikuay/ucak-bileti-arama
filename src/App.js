import React, { useState } from 'react';
import FlightSearchForm from './components/FlightSearchForm';
import FlightList from './components/FlightList';
import PaymentForm from './components/PaymentForm';
import PaymentConfirmation from './components/PaymentConfirmation';
import './App.css';
import flightsData from './data.json';


const App = () => {
  const [searchCriteria, setSearchCriteria] = useState(null);
  const [filteredFlights, setFilteredFlights] = useState(null);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState(null);

  const handleSearch = (criteria) => {
    setSearchCriteria(criteria);
    setSelectedFlight(null);
    setPaymentInfo(null);

    // Perform flight search based on criteria
    const { fromCity, toCity, departureDate, returnDate, airline } = criteria;

    const filtered_flights = flightsData.flights.filter((flight) => {
      return (
        flight.from === fromCity &&
        flight.to === toCity &&
        flight.departureDate === departureDate &&
        flight.returnDate === returnDate &&
        flight.airline === airline
      );
    });

    setFilteredFlights(filtered_flights);
  };

  const handleFlightSelect = (flight) => {
    setSelectedFlight(flight);
  };

  const handlePaymentSubmit = (info) => {
    setPaymentInfo(info);
    // Perform payment submission (e.g., API call)
    // Show confirmation or handle errors
  };

  return (
    <div className="app">
      <h1 className="app-title">Flight Booking App</h1>
      <FlightSearchForm onSearch={handleSearch} />

      {filteredFlights && !selectedFlight && (
        <FlightList flights={filteredFlights} onSelectFlight={handleFlightSelect} />
      )}

      {selectedFlight && (
        <div className="app-section">
          <PaymentForm flight={selectedFlight} onPaymentSubmit={handlePaymentSubmit} />
        </div>
      )}

      {paymentInfo && (
        <div className="app-section">
          <h2>Payment Confirmation</h2>
          <PaymentConfirmation paymentInfo={paymentInfo} />
        </div>
      )}
    </div>
  );
};

export default App;
