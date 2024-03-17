import React from 'react'
import "./about.scss"
import { LiaGripLinesVerticalSolid } from "react-icons/lia";


export const AboutPage = () => {

  
  return (
    <div className='fullPage'>
      <div className="aboutPage">
        
        <div className="leftSide">
          <img className='backgroundImg' src="/global.jpg" alt="background-cover" />
        </div>
        
        <div className="right-side">
          <h1>Meet our team of experts!</h1>
          <p>
            Future banking is here and our team <br />of experts will help you to earn more <br />
            be more precise and accurate!
          </p>
        <div className="buttons">
          <button className="scrollBtn">Click to the team</button>
        </div>
          
        </div>

      </div>


      {/* Elements */}
      <div className='line-elements'>
        <div className="first-element">
            <p className='num1'>600+</p>
            <span className="active">
                EXPERTS FOR YOU
            </span>
        </div>

        <LiaGripLinesVerticalSolid className='line'/>

        <div className="first-element">
            <p className='num1'>400</p>
            <span className="active">
                OFFICESS AROUND THE WORLD
            </span>
        </div>

        <LiaGripLinesVerticalSolid className='line'/>

        <div className="first-element">
            <p className='num1'>24/7</p>
            <span className="active">
                AT YOUR SERVICE
            </span>
        </div>

        

    </div>
      

    </div>
    
    
  )
}
