import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardChipImage from '../../assets/img/card-chip.png';

const Container = styled.div`
position: relative;
width: 35rem;
height: 20rem;
margin-top: 10rem;
box-shadow: 5px 5px 10px rgba(0,0,0,1);
background-image: url('${props => props.randomImage}');
border-radius .5rem;
overflow: hidden;
z-index: 1;
`;

const VisaLogo = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 7rem;
  height: 2.5rem;
  background-image: url('${props => props.visaImg}');
  background-size: contain;
  background-repeat: no-repeat;
`;
const CardChip = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 3rem;
  height: 3rem;
  background-image: url('${props => props.cardChip}');
  background-size: contain;
  background-repeat: no-repeat;
`;

const CardNumberWrapper = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  width: 100%;
  height: 2rem;
`;

const CardNumber = styled.h1`
  width: 100%;
  text-align: center;
  word-spacing: 1rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: monospace;
  font-size: 2rem;
`;

const CardInformationWraper = styled.div`
  position: absolute;
  bottom: 0rem;
  left: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CardInformation = styled.p`
  font-family: monospace;
  font-size: 1rem;
`;
const imageUrl = 'https://picsum.photos/600/350';
const visaImg =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png';
const debitCardRegex =
  /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/;

function Card({ isValidated, ...props }) {
  let isValid = true;
  const [randomImage, setRandomImage] = useState();
  const [cardNumber, setCardNumber] = useState('');

  useEffect(() => {
    fetchImage();
  }, []);

  useEffect(() => {
    props.cardData?.cardNumber
      ? separateCardNumber(props.cardData?.cardNumber)
      : null;
  }, [props]);

  const fetchImage = async () => {
    const resolve = await fetch(imageUrl);
    const blobImage = await resolve.blob();
    const imageObjectURL = URL.createObjectURL(blobImage);
    setRandomImage(imageObjectURL);
  };

  const separateCardNumber = cardNumber => {
    isValid = debitCardRegex.test(cardNumber) && cardNumber.length > 1;
    if (cardNumber.length > 16) {
      isValid = false;
      return;
    }
    const separatedCardNumber = cardNumber
      .replace(/^/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();
    setCardNumber(separatedCardNumber);
    isValidated(isValid);
  };

  return (
    <Container randomImage={randomImage}>
      <VisaLogo visaImg={visaImg} />
      <CardChip cardChip={CardChipImage} />
      <CardNumberWrapper>
        <CardNumber>
          {props.cardData.cardNumber ? cardNumber : 'XXXX XXXX XXXX XXXX'}
        </CardNumber>
      </CardNumberWrapper>
      <CardInformationWraper>
        <CardInformation>
          Card Holder:{' '}
          {props.cardData.cardHolder ? props.cardData.cardHolder : 'Your Name'}
        </CardInformation>
        <CardInformation>
          Card Expires:{' '}
          {props.cardData.cardMonthExpiration ||
          props.cardData.cardDayExpiration
            ? `${props.cardData.cardDayExpiration}/${props.cardData.cardMonthExpiration}`
            : 'DD/MM'}
        </CardInformation>
      </CardInformationWraper>
    </Container>
  );
}

export default Card;
