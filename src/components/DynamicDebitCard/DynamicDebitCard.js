import React, { useState } from 'react';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

function DynamicDebitCard() {
  const [cardData, setCardData] = useState({});
  const [validation, setValidation] = useState();

  const getDataFromForm = cardData => {
    setCardData(cardData);
  };

  const checkValidation = validation => {
    setValidation(validation);
  };

  return (
    <>
      <Card cardData={cardData} isValidated={checkValidation} />
      <CardForm dataFromForm={getDataFromForm} validation={validation} />
    </>
  );
}

export default DynamicDebitCard;
