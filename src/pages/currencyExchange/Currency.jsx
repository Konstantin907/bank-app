import React, { useState, useEffect } from 'react'
import "./currency.scss"
import dotenv from "dotenv"


export const Currency = () => {

  const [exchangeRates, setExchangeRates] = useState({});
  const [sourceAmount, setSourceAmount] = useState(1);
  const [targetAmount, setTargetAmount] = useState(0);
  const [sourceCurrency, setSourceCurrency] = useState('EUR');
  const [targetCurrency, setTargetCurrency] = useState('USD');


 


  useEffect(() => {

    const apiKey = import.meta.env.REACT_APP_API_KEY;
    const url = `https://api.exchangerate-api.com/v4/latest/${sourceCurrency}?apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            setExchangeRates(data.rates);
            const rate = data.rates[targetCurrency];
            setTargetAmount(sourceAmount * rate);
        });
}, [sourceCurrency, targetCurrency, sourceAmount]);

console.log(import.meta.env.REACT_APP_API_KEY);

const handleSourceAmountChange = (e) => {
  const newAmount = e.target.value;
  setSourceAmount(newAmount);
  const rate = exchangeRates[targetCurrency];
  setTargetAmount(newAmount * rate);
};

const handleTargetAmountChange = (e) => {
  const newAmount = e.target.value;
  setTargetAmount(newAmount);
  const rate = 1 / exchangeRates[targetCurrency];
  setSourceAmount(newAmount * rate);
};

const handleSourceCurrencyChange = (e) => {
  setSourceCurrency(e.target.value);
};

const handleTargetCurrencyChange = (e) => {
  setTargetCurrency(e.target.value);
};

  return (
    <div className='currencyPage'>
      <div className="centerOfPage">
        <div className="heading">
          <h1>Currency Converter</h1>
          <p>Check live foreign currency exchange rates</p>
        </div>


        <div className="currencyExchangeModal">
           <div className="exchange">
             <input type="number" value={sourceAmount} onChange={handleSourceAmountChange} />
            <select value={sourceCurrency} onChange={handleSourceCurrencyChange}>
                {Object.keys(exchangeRates).map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
            <input type="number" value={targetAmount} onChange={handleTargetAmountChange} />
            <select value={targetCurrency} onChange={handleTargetCurrencyChange}>
                {Object.keys(exchangeRates).map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
           </div>
           
          
        </div>
      </div>
        
    </div>
  )
}
