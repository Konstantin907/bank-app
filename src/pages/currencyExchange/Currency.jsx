import React, { useState, useEffect } from 'react'
import "./currency.scss"
import dotenv from "dotenv"
import { LineElements } from '../../components/lineElements/LineElements';

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

      
      

      <div className="rest">
        <h1>What is curreny exchange?</h1>
        <h3>
            Currency exchange, or forex trading, involves the buying and selling of currencies on the foreign exchange market with the aim of making a profit. 
            The value of currencies on this market fluctuates constantly due to a variety of factors.

            One of the primary drivers of currency value changes is supply and demand. When more people or businesses want a particular currency, its value goes up. Conversely, if there's less demand for a currency, its value goes down. For example, if a country's economy is strong, businesses and investors might want more of that country's currency to invest or make purchases there, driving up its value.


        </h3>
        <br /> 
        <h3>
        Economic indicators also play a crucial role. These include reports such as employment rates, inflation, manufacturing output, and retail sales. 
        Strong economic performance in a country tends to increase the value of its currency because it suggests future interest rate hikes, attracting investors looking for higher returns.
        </h3>

        <br />

        <h3>
        Interest rates set by central banks are another major factor. Higher interest rates offer lenders in an economy a higher return relative to other countries. Therefore, higher interest rates attract foreign capital and cause the exchange rate to rise. Conversely, when a country reduces its interest rates, its currency might weaken as investors seek better returns elsewhere.

        </h3>
        <br />
        <h3>
        Political stability and economic performance can affect currency strength. Countries with less risk for political turmoil are more attractive to foreign investors. As a result, these countries tend to have stronger currencies.
        </h3>
      </div>
         
    </div>
  )
}
