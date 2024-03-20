import React, { useState } from 'react'
import "./calculator.scss"

export const Calculator = () => {
    const [credit, setCredit] = useState(10000)
    const [months, setMonths] = useState(12)

    const handleCreditChange = (e) => {
        setCredit(e.target.value);
    }

    //months
    const handleMonthsChange = (e) => {
        setMonths(e.target.value);
    }


  return (
    <div className='container'>
        <div className="inputRange">
            
            <div className="resultCredit">
               
                    <h6>Value of the credit you want:</h6>
                    <input 
                        onChange={handleCreditChange} 
                        type="text" value={credit} 
                        placeholder='0000' 
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
                    <input type="text" placeholder='0000' value={months} id='monthsInput' onChange={handleMonthsChange}/>
                
                <br />
                    <span>{months}</span>
                <input className='scroller' min={12} max={300} step={1}  type="range" name="months" id="creditMonts" onChange={handleMonthsChange}/>
            </div>
             
        </div>
    </div>
  )
}
