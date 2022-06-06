import React, { useState, useId, useEffect } from 'react';
import styled from 'styled-components';
import {
  InputLabel,
  Select,
  FormControl,
  MenuItem,
  TextField,
} from '@mui/material';
import './CardForm.scss';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const CardFormWrapper = styled.div`
  width: 50rem;
  height: 30rem;
  background-color: white;
  border-radius: 0.5rem;
  padding-top: 11rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
  transform: translateY(-10rem);
`;

const InputHeader = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 6rem;
  padding: 0 2rem;
`;

const Label = styled.label`
  color: black;
  font-family: monospace;
  font-size: 1rem;
`;

export default function CardForm({ dataFromForm, validation }) {
  let cardData = {};
  const limit = {
    carNumber: 16,
    cardHolder: 24,
  };

  if (validation === undefined) {
    validation = true;
  } else {
    validation = validation;
  }

  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');

  const [expirationDate, setExpirationDate] = useState({
    monthExpiration: 'January',
    dayExpiration: 1,
  });

  useEffect(() => {
    onCardDataChange();
  }, [expirationDate, cardHolder, cardNumber]);

  const onCardDataChange = () => {
    cardData = {
      cardNumber: cardNumber,
      cardHolder: cardHolder,
      cardMonthExpiration: expirationDate.monthExpiration,
      cardDayExpiration: expirationDate.dayExpiration,
    };
    dataFromForm(cardData);
  };

  const onChangeCardNumber = e => {
    const onlyNumbersRegex = /^[0-9]/;
    if (onlyNumbersRegex.test(e.target.value)) {
      setCardNumber(e.target.value.slice(0, limit.carNumber));
    }
  };

  const onChangeCardHolder = e => {
    const onlyLettersRegex = /^[a-zA-Z\s]*$/;
    if (onlyLettersRegex.test(e.target.value)) {
      setCardHolder(e.target.value.slice(0, limit.cardHolder));
      return;
    }
  };

  const onDataChange = e => {
    if (typeof e.target.value === 'number') {
      setExpirationDate(prevState => ({
        ...prevState,
        dayExpiration: e.target.value,
      }));
    } else {
      setExpirationDate(prevState => ({
        ...prevState,
        monthExpiration: e.target.value,
      }));
    }
  };

  return (
    <CardFormWrapper>
      <InputHeader>
        <Label>Card number</Label>
        <TextField
          placeholder="XXXX XXXX XXXX XXXX"
          onChange={onChangeCardNumber}
          value={cardNumber}
          error={!validation}
          inputProps={{ min: 0, type: 'number' }}
          data-card="card-number"
        />
      </InputHeader>
      <InputHeader>
        <Label>Card holder</Label>
        <TextField
          hiddenLabel
          placeholder="Your Name"
          onChange={onChangeCardHolder}
          value={cardHolder}
          data-card="card-holder"
        />
      </InputHeader>
      <div className="expiration_wrapper">
        <FormControl fullWidth>
          <InputLabel>Expiration date</InputLabel>
          <Select
            label="Expiration date"
            value={expirationDate.monthExpiration}
            defaultValue="January"
            onChange={onDataChange}
            data-card="expiration-month"
          >
            {months.map(value => {
              return (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Day</InputLabel>
          <Select
            label="Day"
            value={expirationDate.dayExpiration}
            defaultValue="1"
            onChange={onDataChange}
            data-card="expiration-day"
          >
            {days.map(value => {
              return (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    </CardFormWrapper>
  );
}
