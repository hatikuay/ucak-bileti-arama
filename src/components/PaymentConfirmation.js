import React from 'react';

const PaymentConfirmation = ({ paymentInfo }) => {
  return (
    <div>
      <h2>Ödeme Onayı</h2>
      <div>
        <h3>Ödeme Bilgileri:</h3>
        <p>
          İsim: {paymentInfo.name}
        </p>
        <p>
          Kredi Kartı: {paymentInfo.creditCard}
        </p>
        <p>
          Son Kullanma Tarihi: {paymentInfo.expiryDate}
        </p>
      </div>
      <p>Ödeme başarıyla tamamlandı. Teşekkür ederiz!</p>
    </div>
  );
};

export default PaymentConfirmation;
