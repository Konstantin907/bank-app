import React from 'react'
import "./line.scss"
import { LiaGripLinesVerticalSolid } from "react-icons/lia";


export const LineElements = ({slot="USER ACTIVE", secondSlot="TRUSTED BY COMPANY", thirdSlot="TRANSACTIONS", num=380 + "+", secondNum=280 + "+", thirdNum="$" + 230 + "M" + "+"}) => {
  return (
    <div className='line-elements'>
        <div className="first-element">
            <p className='num1'>{num}</p>
            <span className="active">
                {slot}
            </span>
        </div>

        <LiaGripLinesVerticalSolid className='line'/>

        <div className="first-element">
            <p className='num1'>{secondNum}</p>
            <span className="active">
                {secondSlot}
            </span>
        </div>

        <LiaGripLinesVerticalSolid className='line'/>

        <div className="first-element">
            <p className='num1'>{thirdNum}</p>
            <span className="active">
                {thirdSlot}
            </span>
        </div>

        

    </div>
)
}
