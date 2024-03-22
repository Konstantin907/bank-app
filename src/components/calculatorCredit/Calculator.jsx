import React, { useState } from 'react'
import "./calculator.scss"

export const Calculator = () => {
    const [credit, setCredit] = useState(10000)
    const [months, setMonths] = useState(12)
    const [interestRate, setInterestRate] = useState(8.99); 
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);

    const handleCreditChange = (e) => {
        const newCredit = Number(e.target.value);
        setCredit(newCredit);
        updateCalculations(newCredit, months);
    }

    const handleMonthsChange = (e) => {
        const newMonths = Number(e.target.value);
        setMonths(newMonths);
        updateCalculations(credit, newMonths);
    }

    const updateCalculations = (credit, months) => {
        const newInterestRate = getInterestRate(credit, months);
        setInterestRate(newInterestRate);

        const monthlyPayment = calculateMonthlyPayment(credit, newInterestRate, months);
        setMonthlyPayment(monthlyPayment);

        const totalPaid = monthlyPayment * months;
        const totalInterest = totalPaid - credit;
        setTotalInterest(totalInterest);
    };

    const getInterestRate = (credit, months) => {
        if (credit > 50000 && months < 24) {
            return 8.27;
        } else if (credit > 50000 && months < 3) {
            return 9.55;
        }
        return 8.99;
    };

    const calculateMonthlyPayment = (credit, annualInterestRate, months) => {
        const monthlyInterestRate = annualInterestRate / 12 / 100;
        return credit * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) / (Math.pow(1 + monthlyInterestRate, months) - 1);
    };

    const formattedCredit = new Intl.NumberFormat().format(credit);
    const formattedMonthlyPayment = new Intl.NumberFormat().format(monthlyPayment.toFixed(2));
    const formattedTotalInterest = new Intl.NumberFormat().format(totalInterest.toFixed(2));


  return (
    <div className='container'>
        <div className="headingCalc">
            <h1>Credit calculator</h1>
        </div>
        
        <div className="inputRange">
            
            <div className="resultCredit">
               
                    <h6>Value of the credit you want:</h6>
                    <input 
                        onChange={handleCreditChange} 
                        type="text" 
                        value={formattedCredit} 
                        placeholder='00.00' 
                        id='creditInput' />
                    
                  <br />
                    <span>{credit}</span>
                <input 
                    className='scroller' 
                    min={10000} 
                    max={1000000} 
                    step={10000} 
                    value={credit}  
                    type="range" 
                    name="credit" 
                    id="creditRange" 
                    onChange={handleCreditChange}/>

            </div>
            
            <div className="months">
                
                     <h6>Number of months:</h6>
                    <input 
                        type="text" 
                        placeholder='00.00' 
                        value={months} 
                        id='monthsInput' 
                        onChange={handleMonthsChange}/>
                
                <br />
                    <span>{months}</span>
                <input 
                    className='scroller' 
                    min={0} 
                    max={300} 
                    step={1}  
                    type="range" 
                    name="months" 
                    id="creditMonts" 
                    onChange={handleMonthsChange}/>
            </div>
             
        </div>

        <div className="secondPart">
            <h3>Credit you want to acquire: <span>{formattedCredit}</span></h3>
                <h3>Nominal interest rate: <span>{interestRate}%</span></h3>
                <h3>Monthly payment: <span>{formattedMonthlyPayment}</span></h3> 
                <h3>Percentage of commission: <span>1.50%</span></h3>
                <h3>Total interest: <span>{formattedTotalInterest}</span></h3>
        </div>
    </div>
  )
}
