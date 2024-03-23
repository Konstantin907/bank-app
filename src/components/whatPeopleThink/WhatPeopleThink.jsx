import React from 'react'
import "./think.scss"

export const WhatPeopleThink = () => {
  return (
    <div className='what-people-think'>
        <div className="upper-heading">
            <h3>What people are <br /> saying about us</h3>
            <p>Everything you need to accept card payments <br /> and grow your business anywhere on the planet.</p>
        </div>

        <div className="card-container">
             <div className="card">
                    <svg className='quote-icon' xmlns="http://www.w3.org/2000/svg" width="43" height="28" viewBox="0 0 43 28" fill="none">
                    <path d="M11.7984 27.6L18.9984 0H12.3984L0.398438 27.6H11.7984ZM35.7984 27.6L42.9984 0H36.3984L24.3984 27.6H35.7984Z" fill="url(#paint0_linear_1_54)"/>
                    <defs>
                        <linearGradient id="paint0_linear_1_54" x1="28.8615" y1="-24.7969" x2="41.7939" y2="24.1471" gradientUnits="userSpaceOnUse">
                        <stop offset="0.00887753" stop-color="#DEF9FA"/>
                        <stop offset="0.1723" stop-color="#BEF3F5"/>
                        <stop offset="0.4204" stop-color="#9DEDF0"/>
                        <stop offset="0.5512" stop-color="#7DE7EB"/>
                        <stop offset="0.7154" stop-color="#5CE1E6"/>
                        <stop offset="1" stop-color="#33BBCF"/>
                        </linearGradient>
                    </defs>
                    </svg>
                    <p className="quote">
                    Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
                    </p>
                    <div className="author-info" id='author-one'>
                            <img src="/person1.png" alt="Herman Jansen" className="author-image" />
                        <div className='author-details'> 
                            <h4 className="author-name">Herman Jansen</h4>
                            <p className='author-title'>Founder & Leader</p>
                        </div>  
                    </div>
            </div>





            <div className="card">
                    <svg className='quote-icon' xmlns="http://www.w3.org/2000/svg" width="43" height="28" viewBox="0 0 43 28" fill="none">
                    <path d="M11.7984 27.6L18.9984 0H12.3984L0.398438 27.6H11.7984ZM35.7984 27.6L42.9984 0H36.3984L24.3984 27.6H35.7984Z" fill="url(#paint0_linear_1_54)"/>
                    <defs>
                        <linearGradient id="paint0_linear_1_54" x1="28.8615" y1="-24.7969" x2="41.7939" y2="24.1471" gradientUnits="userSpaceOnUse">
                        <stop offset="0.00887753" stop-color="#DEF9FA"/>
                        <stop offset="0.1723" stop-color="#BEF3F5"/>
                        <stop offset="0.4204" stop-color="#9DEDF0"/>
                        <stop offset="0.5512" stop-color="#7DE7EB"/>
                        <stop offset="0.7154" stop-color="#5CE1E6"/>
                        <stop offset="1" stop-color="#33BBCF"/>
                        </linearGradient>
                    </defs>
                    </svg>
                    <p className="quote">
                    Money makes your life easier. If you're lucky to have it, you're lucky.
                    </p>
                    <div className="author-info" id='author'>
                            <img src="/person2.png" alt="Steve Mark" className="author-image" />
                        <div className='author-details'>
                            <h4 className="author-name">Steve Mark</h4>
                            <p className='author-title'>Founder & Leader</p>
                        </div>  
                    </div>
            </div>

            <div className="card">
                    <svg className='quote-icon' xmlns="http://www.w3.org/2000/svg" width="43" height="28" viewBox="0 0 43 28" fill="none">
                    <path d="M11.7984 27.6L18.9984 0H12.3984L0.398438 27.6H11.7984ZM35.7984 27.6L42.9984 0H36.3984L24.3984 27.6H35.7984Z" fill="url(#paint0_linear_1_54)"/>
                    <defs>
                        <linearGradient id="paint0_linear_1_54" x1="28.8615" y1="-24.7969" x2="41.7939" y2="24.1471" gradientUnits="userSpaceOnUse">
                        <stop offset="0.00887753" stop-color="#DEF9FA"/>
                        <stop offset="0.1723" stop-color="#BEF3F5"/>
                        <stop offset="0.4204" stop-color="#9DEDF0"/>
                        <stop offset="0.5512" stop-color="#7DE7EB"/>
                        <stop offset="0.7154" stop-color="#5CE1E6"/>
                        <stop offset="1" stop-color="#33BBCF"/>
                        </linearGradient>
                    </defs>
                    </svg>
                    <p className="quote">
                    It is usually people in the money business, finance, and international trade that are really rich.
                    </p>
                    <div className="author-info" id='author-two'>
                            <img src="/person3.png" alt="Kenn Gallagher" className="author-image" />
                        <div className='author-details'>
                            <h4 className="author-name">Kenn Gallagher</h4>
                            <p className='author-title'>Founder & Leader</p>
                        </div>  
                    </div>
            </div>

           

           

            


</div>

    </div>
  )
}
