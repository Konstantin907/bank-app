import React from 'react'
import "./line.scss"
import { LiaGripLinesVerticalSolid } from "react-icons/lia";


export const LineElements = () => {
  return (
    <div className='line-elements'>
        <div className="first-element">
            <p className='num1'>3800+</p>
            <span className="active">
                USER ACTIVE
            </span>
        </div>

        <LiaGripLinesVerticalSolid className='line'/>

        <div className="first-element">
            <p className='num1'>230+</p>
            <span className="active">
                TRUSTED BY COMPANY
            </span>
        </div>

        <LiaGripLinesVerticalSolid className='line'/>

        <div className="first-element">
            <p className='num1'>$230M+</p>
            <span className="active">
                TRANSACTION
            </span>
        </div>

        

    </div>
)
}
