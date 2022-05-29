import React, { useState } from 'react';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

function DynamicDebitCard() {
  const [cardData, setCardData] = useState({});

  const getDataFromForm = cardData => {
    setCardData(cardData);
  };

  return (
    <>
      <Card cardData={cardData} />
      <CardForm dataFromForm={getDataFromForm} />
    </>
  );
}

export default DynamicDebitCard;
