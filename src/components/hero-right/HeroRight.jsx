import React from 'react'
import "./right.scss"
import { Link } from "react-router-dom"

export default function HeroRight() {
  return (
    <div className='right-side-hero'>
    <img className='hand-img' src="/hand.png" alt="" />
    <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 767 768" fill="none">
            <g filter="url(#filter0_f_1_38)">
                <path d="M124 73L298.468 644H502.608L702 73H124Z" fill="url(#paint0_linear_1_38)"/>
                <path d="M124 73L298.468 644H502.608L702 73H124Z" stroke="black"/>
            </g>
            <defs>
                <filter id="filter0_f_1_38" x="0.324402" y="-50.5" width="825.38" height="818" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="61.5" result="effect1_foregroundBlur_1_38"/>
                </filter>
                <linearGradient id="paint0_linear_1_38" x1="413" y1="73" x2="413" y2="644" gradientUnits="userSpaceOnUse">
                <stop stop-color="#BCA5FF" stop-opacity="0"/>
                <stop offset="1" stop-color="#214D76"/>
                </linearGradient>
            </defs>
    </svg>

    <svg className='lower-bubble' xmlns="http://www.w3.org/2000/svg" width="40" height="68" viewBox="0 0 68 68" fill="none">
                <path d="M31.7911 67.9219C13.0157 66.6597 -1.18418 50.4088 0.078035 31.7911C1.49802 13.0157 17.5912 -1.18418 36.3666 0.078035C54.9843 1.49802 69.1842 17.5912 67.9219 36.3666C66.6597 54.9843 50.4088 69.1842 31.7911 67.9219Z" fill="url(#paint0_radial_1_309)"/>
                <defs>
                    <radialGradient id="paint0_radial_1_309" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(48.3865 24.2706) rotate(93.8705) scale(43.7411)">
                    <stop offset="0.00887753" stop-color="#DEF9FA"/>
                    <stop offset="0.1723" stop-color="#BEF3F5"/>
                    <stop offset="0.4204" stop-color="#9DEDF0"/>
                    <stop offset="0.5512" stop-color="#7DE7EB"/>
                    <stop offset="0.7154" stop-color="#5CE1E6"/>
                    <stop offset="1" stop-color="#33BBCF"/>
                    </radialGradient>
                </defs>
    </svg>

    <svg className='upper-bubble' xmlns="http://www.w3.org/2000/svg" width="80" height="60" viewBox="0 0 101 101" fill="none">
                    <path d="M47.2192 100.884C19.3322 99.0093 -1.75885 74.8718 0.115905 47.2192C2.22501 19.3322 26.1282 -1.75885 54.0152 0.115905C81.6678 2.22501 102.759 26.1282 100.884 54.0152C99.0093 81.6678 74.8718 102.759 47.2192 100.884Z" fill="url(#paint0_radial_1_252)"/>
                    <defs>
                        <radialGradient id="paint0_radial_1_252" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(71.8682 36.0489) rotate(93.8705) scale(64.9684)">
                        <stop offset="0.00887753" stop-color="#DEF9FA"/>
                        <stop offset="0.1723" stop-color="#BEF3F5"/>
                        <stop offset="0.4204" stop-color="#9DEDF0"/>
                        <stop offset="0.5512" stop-color="#7DE7EB"/>
                        <stop offset="0.7154" stop-color="#5CE1E6"/>
                        <stop offset="1" stop-color="#33BBCF"/>
                        </radialGradient>
                    </defs>
    </svg>


    <Link to="/credit-calculator"><button className='get-started'>Get Started</button></Link>
</div>
)
}
