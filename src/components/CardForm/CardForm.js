import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {InputLabel, Select, FormControl, MenuItem, TextField } from '@mui/material';
import './CardForm.scss';


function CardForm(){
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

    const CardFormWrapper = styled.div`
        width: 50rem;
        height: 30rem;
        background-color: white;
        border-radius: .5rem;
        padding-top: 11rem;
        box-shadow: 5px 5px 10px rgba(0,0,0,1);
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



    return(
        <CardFormWrapper>
            <InputHeader>
            <Label>
                Card number
            </Label>
            <TextField
            
            placeholder="1234 1234 1234 1234"
            />
            </InputHeader>
            <InputHeader>
            <Label>Card holder</Label>
            <TextField
            hiddenLabel
            placeholder="Your Name"
            />
            </InputHeader>
            <div className="expiration_wrapper">
            <FormControl fullWidth>
            <InputLabel>Expiration date</InputLabel>
            <Select
                label="Expiration date"
            >
                {months.map((value) => {
                    return <MenuItem key={value} value={value}>{value}</MenuItem>
                })}
            </Select>
            </FormControl>
            <FormControl fullWidth>
            <InputLabel>Day</InputLabel>
            <Select
                label="Day"
            >
                {days.map((value) => {
                    return <MenuItem key={value} value={value}>{value}</MenuItem>
                })}
            </Select>
            </FormControl>
            </div>
        </CardFormWrapper>
    )
}

export default CardForm;