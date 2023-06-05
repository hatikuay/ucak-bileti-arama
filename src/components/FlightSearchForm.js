import React, { useState, useEffect } from 'react';
import flightsData from '../data.json';
import './FlightSearchForm.css'; // Import CSS file for FlightSearchForm

const FlightSearchForm = ({ onSearch }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [airline, setAirline] = useState('');
  const [cityOptions, setCityOptions] = useState([]);
  const [airlineOptions, setAirlineOptions] = useState([]);

  useEffect(() => {
    const uniqueCities = flightsData.flights.reduce((cities, flight) => {
      if (!cities.includes(flight.from)) {
        cities.push(flight.from);
      }
      if (!cities.includes(flight.to)) {
        cities.push(flight.to);
      }
      return cities;
    }, []);

    setCityOptions(uniqueCities);

    const uniqueAirlines = flightsData.flights.reduce((airlines, flight) => {
      if (!airlines.includes(flight.airline)) {
        airlines.push(flight.airline);
      }
      return airlines;
    }, []);

    setAirlineOptions(uniqueAirlines);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchCriteria = {
      fromCity,
      toCity,
      departureDate,
      returnDate,
      airline,
    };

    onSearch(searchCriteria);
  };

  return (
    <div className="flight-search-form">
      <h2>Uçak Bileti Arama</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nereden:
          <select value={fromCity} onChange={(e) => setFromCity(e.target.value)}>
            <option value="">Seç</option>
            {cityOptions.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </label>
        <label>
          Nereye:
          <select value={toCity} onChange={(e) => setToCity(e.target.value)}>
            <option value="">Seç</option>
            {cityOptions.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </label>
        <label>
          Kalkış Tarihi:
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </label>
        <label>
          Dönüş Tarihi:
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </label>
        <label>
          Hava Yolu:
          <select value={airline} onChange={(e) => setAirline(e.target.value)}>
            <option value="">Seç</option>
            {airlineOptions.map((airline) => (
              <option key={airline} value={airline}>{airline}</option>
            ))}
          </select>
        </label>
        <button type="submit">Ara</button>
      </form>
    </div>
  );
};

export default FlightSearchForm;
