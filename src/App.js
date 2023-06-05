import React, { useState } from 'react';
import FlightSearchForm from './components/FlightSearchForm';
import FlightList from './components/FlightList';
import PaymentForm from './components/PaymentForm';
import './App.css';
import flightsData from './data.json';


const App = () => {
  const [searchCriteria, setSearchCriteria] = useState(null);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState(null);

  const handleSearch = (criteria) => {
    setSearchCriteria(criteria);
    setSelectedFlight(null);
    setPaymentInfo(null);

    // Perform flight search based on criteria
    const { fromCity, toCity, departureDate, returnDate, airline } = criteria;

    const filteredFlights = flightsData.flights.filter((flight) => {
      return (
        flight.from === fromCity &&
        flight.to === toCity &&
        flight.departureDate === departureDate &&
        flight.returnDate === returnDate &&
        flight.airline === airline
      );
    });

    setSelectedFlight(filteredFlights);
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

      {searchCriteria && selectedFlight && (
        <FlightList flights={selectedFlight} onSelectFlight={handleFlightSelect} />
      )}


      {/*{selectedFlight && (
        <div className="app-section">
          <FlightForm selectedFlight={selectedFlight} />
          <PaymentForm selectedFlight={selectedFlight} onPaymentSubmit={handlePaymentSubmit} />
        </div>
      )}

      {paymentInfo && (
        <div className="app-section">
          <h2>Payment Confirmation</h2>

        </div>
      )}*/}
    </div>
  );
};

export default App;
