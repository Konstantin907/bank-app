import React from 'react'
import "./about.scss"
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import { Team } from '../../components/team/Team';
import { LineElements } from '../../components/lineElements/LineElements';


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
      <LineElements num={300 + "+"} slot={"EXPERTS HELPING YOU"} secondNum={400} secondSlot="OFFICES AROUND THE WORLD" thirdNum={24 + "/" + 7} thirdSlot="AVAILABILITY"/>
      <Team />

    </div>
    
    
  )
}
