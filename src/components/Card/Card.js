import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardChipImage from '../../assets/img/card-chip.png';

function Card({ ...props }) {
  const imageUrl = 'https://picsum.photos/600/350';
  const visaImg =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png';

  const [randomImage, setRandomImage] = useState();

  const [cardExpiresAt, setcardExpiresAt] = useState('MM/YY');

  const Container = styled.div`
        position: relative;
        width: 35rem;
        height: 20rem;
        margin-top: 10rem;
        box-shadow: 5px 5px 10px rgba(0,0,0,1);
        background-image: url('${randomImage}');
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
    background-image: url('${visaImg}');
    background-size: contain;
    background-repeat: no-repeat;
  `;
  const CardChip = styled.div`
    position: absolute;
    top: 2rem;
    left: 2rem;
    width: 3rem;
    height: 3rem;
    background-image: url('${CardChipImage}');
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

  useEffect(() => {
    fetchImage();
    // separateCardNumber();
  }, []);

  const fetchImage = async () => {
    const resolve = await fetch(imageUrl);
    const blobImage = await resolve.blob();
    const imageObjectURL = URL.createObjectURL(blobImage);
    setRandomImage(imageObjectURL);
  };

  //   const separateCardNumber = () => {
  //     const separatedCardNumber = props.cardNumber
  //       .replace(/^/g, '')
  //       .replace(/(.{4})/g, '$1 ')
  //       .trim();
  //   };

  return (
    <Container>
      <VisaLogo />
      <CardChip />
      <CardNumberWrapper>
        <CardNumber>
          {props.cardNumber ? props.cardNumber : 'XXXX XXXX XXXX XXXX'}
        </CardNumber>
      </CardNumberWrapper>
      <CardInformationWraper>
        <CardInformation>
          Card Holder: {props.cardHolder ? props.cardHolder : 'Your Name'}
        </CardInformation>
        <CardInformation>Card Expires: {cardExpiresAt}</CardInformation>
      </CardInformationWraper>
    </Container>
  );
}

export default Card;
