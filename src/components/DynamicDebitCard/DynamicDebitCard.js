import React, { useState } from 'react';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

function DynamicDebitCard() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');

  const handleCardNumberChange = e => {
    setCardNumber(e.target.value);
  };

  const handleCardHolderChange = e => {
    setCardHolder(e.target.value);
  };

  return (
    <>
      <Card cardNumber={cardNumber} cardHolder={cardHolder} />
      <CardForm
        cardNumber={cardNumber}
        cardHolder={cardHolder}
        onChangeCardNumber={handleCardNumberChange}
        onChangeCardHolder={handleCardHolderChange}
      />
    </>
  );
}

export default DynamicDebitCard;
