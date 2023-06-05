import React, { useState } from 'react';

const PaymentForm = ({ selectedFlight, onPaymentSubmit }) => {
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
    <div>
      <h2>Ödeme Bilgileri</h2>
      <div>
        <h3>Seçilen Uçuş Bilgileri:</h3>
        <p>
          From: {selectedFlight.from} - To: {selectedFlight.to}
        </p>
        <p>Airline: {selectedFlight.airline}</p>
        <p>Price: {selectedFlight.price}</p>
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