import React, { useState } from 'react';
import './PaymentForm.css';

const PaymentForm = ({ flight, onPaymentSubmit }) => {
  const [name, setName] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const paymentInfo = {
      name,
      creditCard,
      expiryDate,
    };

    onPaymentSubmit(paymentInfo);
  };

  return (
    <div className="payment-form-container">
      <h2>Ödeme Bilgileri</h2>
      <div className="selected-flight-info">
        <h3>Seçilen Uçuş Bilgileri:</h3>
        <p>
          <span className="flight-info-label">From:</span> {flight.from} - <span className="flight-info-label">To:</span> {flight.to}
        </p>
        <p><span className="flight-info-label">Airline:</span> {flight.airline}</p>
        <p><span className="flight-info-label">Price:</span> {flight.price}</p>
        <p><span className="flight-info-label">Departure Date:</span> {flight.departureDate}</p>
        <p><span className="flight-info-label">Arrival Date:</span> {flight.returnDate}</p>
        <p><span className="flight-info-label">Departure Time:</span> {flight.departureTime}</p>
        <p><span className="flight-info-label">Arrival Time:</span> {flight.returnTime}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          İsim:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Kredi Kartı:
          <input type="text" value={creditCard} onChange={(e) => setCreditCard(e.target.value)} />
        </label>
        <label>
          Son Kullanma Tarihi:
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </label>
        <button type="submit">Ödeme Yap</button>
      </form>
    </div>
  );
};

export default PaymentForm;
