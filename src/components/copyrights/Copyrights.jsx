import React from 'react'
import "./copyrights.scss"

export const Copyrights = () => {
  return (
    <div className='copyrights-container'>
        <hr className='horizontalLine'/>
        <div className='container'>
            <div className="copy"> 
                <span className='copyright'>Copyright</span> <span className="copyright-symbol">&copy;</span> <span className='span-text'>2021 HooBank. All Rights Reserved.</span>
            </div>

 {/* <div className="platforms">
            <svg className='icons' xmlns="http://www.w3.org/2000/svg" width="176" height="21" viewBox="0 0 176 21" fill="none">
                <path d="M61.5001 0C55.7011 0 51 4.72075 51 10.544C51 15.7667 54.7855 20.092 59.7489 20.9296V12.7437H57.2159V9.79796H59.7489V7.62588C59.7489 5.10564 61.2817 3.73225 63.5209 3.73225C64.5934 3.73225 65.515 3.8125 65.7826 3.84784V6.48217L64.2295 6.48292C63.012 6.48292 62.7773 7.06377 62.7773 7.91643V9.79645H65.6824L65.3035 12.7422H62.7773V21C67.9724 20.3651 72 15.9296 72 10.5409C72 4.72075 67.2989 0 61.5001 0Z" fill="white"/>
                <path d="M125 3.24931C124.145 3.63077 123.233 3.88362 122.283 4.00638C123.261 3.413 124.007 2.48054 124.357 1.35662C123.446 1.90908 122.44 2.29931 121.367 2.51708C120.502 1.58023 119.269 1 117.923 1C115.313 1 113.211 3.15431 113.211 5.79531C113.211 6.17531 113.243 6.54069 113.32 6.88854C109.4 6.69415 105.932 4.78392 103.601 1.874C103.195 2.59162 102.956 3.413 102.956 4.29723C102.956 5.95754 103.797 7.42931 105.05 8.28138C104.293 8.26677 103.55 8.04315 102.92 7.69092C102.92 7.70554 102.92 7.72454 102.92 7.74354C102.92 10.0732 104.554 12.0083 106.698 12.4541C106.314 12.5608 105.896 12.6119 105.461 12.6119C105.16 12.6119 104.855 12.5944 104.569 12.5301C105.18 14.4286 106.913 15.8244 108.975 15.8697C107.371 17.1456 105.334 17.9144 103.128 17.9144C102.742 17.9144 102.371 17.8968 102 17.8486C104.089 19.2181 106.564 20 109.234 20C117.91 20 122.654 12.6923 122.654 6.358C122.654 6.14608 122.647 5.94146 122.637 5.73831C123.573 5.06308 124.359 4.21977 125 3.24931Z" fill="white"/>
                <path d="M20.9466 6.17408C20.8974 5.05826 20.7169 4.29115 20.4584 3.62644C20.1917 2.92086 19.7814 2.28916 19.2438 1.76402C18.7186 1.23071 18.0826 0.816309 17.3851 0.553821C16.7164 0.295339 15.9531 0.114899 14.8371 0.0657021C13.7127 0.0123392 13.3558 0 10.5041 0C7.65239 0 7.29545 0.0123392 6.17525 0.0615356C5.05923 0.110732 4.29197 0.291333 3.62729 0.549654C2.92142 0.816309 2.28959 1.22655 1.76436 1.76402C1.23095 2.28916 0.816625 2.92503 0.553926 3.62243C0.295395 4.29115 0.114921 5.0541 0.0657146 6.16991C0.0123415 7.29406 0 7.65093 0 10.5021C0 13.3532 0.0123415 13.7101 0.0615474 14.8301C0.110753 15.9459 0.291388 16.713 0.549919 17.3777C0.816625 18.0833 1.23095 18.715 1.76436 19.2401C2.28959 19.7735 2.92558 20.1879 3.62312 20.4503C4.29197 20.7088 5.05506 20.8893 6.17125 20.9385C7.29128 20.9878 7.64839 21 10.5001 21C13.3518 21 13.7087 20.9878 14.8289 20.9385C15.9449 20.8893 16.7122 20.7088 17.3769 20.4503C18.7885 19.9047 19.9045 18.7889 20.4502 17.3777C20.7086 16.709 20.8892 15.9459 20.9385 14.8301C20.9877 13.7101 21 13.3532 21 10.5021C21 7.65093 20.9958 7.29406 20.9466 6.17408ZM19.0552 14.748C19.01 15.7736 18.8377 16.3275 18.6941 16.6967C18.3411 17.6115 17.6149 18.3376 16.6999 18.6905C16.3306 18.8341 15.7726 19.0063 14.7509 19.0514C13.643 19.1007 13.3107 19.1129 10.5083 19.1129C7.70576 19.1129 7.36934 19.1007 6.26549 19.0514C5.2397 19.0063 4.68578 18.8341 4.31649 18.6905C3.86114 18.5222 3.44665 18.2556 3.11023 17.9069C2.76146 17.5663 2.49475 17.1561 2.32646 16.7008C2.18285 16.3316 2.01055 15.7736 1.96551 14.7522C1.91614 13.6446 1.90396 13.3122 1.90396 10.5103C1.90396 7.7083 1.91614 7.37194 1.96551 6.26846C2.01055 5.24287 2.18285 4.68905 2.32646 4.31983C2.49475 3.86441 2.76146 3.45016 3.11439 3.11364C3.45483 2.76494 3.86514 2.49828 4.32066 2.33018C4.68994 2.1866 5.24804 2.01433 6.26966 1.96914C7.37751 1.91994 7.70993 1.9076 10.5123 1.9076C13.3189 1.9076 13.6512 1.91994 14.755 1.96914C15.7808 2.01433 16.3347 2.1866 16.704 2.33018C17.1594 2.49828 17.5739 2.76494 17.9103 3.11364C18.2591 3.45417 18.5258 3.86441 18.6941 4.31983C18.8377 4.68905 19.01 5.24687 19.0552 6.26846C19.1044 7.3761 19.1167 7.7083 19.1167 10.5103C19.1167 13.3122 19.1044 13.6404 19.0552 14.748Z" fill="white"/>
                <path d="M10.5 6C8.01567 6 6 8.01554 6 10.5C6 12.9845 8.01567 15 10.5 15C12.9845 15 15 12.9845 15 10.5C15 8.01554 12.9845 6 10.5 6ZM10.5 13.419C8.88829 13.419 7.58096 12.1118 7.58096 10.5C7.58096 8.88816 8.88829 7.58096 10.5 7.58096C12.1118 7.58096 13.419 8.88816 13.419 10.5C13.419 12.1118 12.1118 13.419 10.5 13.419Z" fill="white"/>
                <path d="M18 5.5C18 6.32835 17.3284 7 16.4999 7C15.6716 7 15 6.32835 15 5.5C15 4.67146 15.6716 4 16.4999 4C17.3284 4 18 4.67146 18 5.5Z" fill="white"/>
                <path d="M174.485 0H156.515C155.678 0 155 0.67804 155 1.51453V19.4855C155 20.322 155.678 21 156.515 21H174.485C175.322 21 176 20.322 176 19.4855V1.51453C176 0.67804 175.322 0 174.485 0V0ZM162.449 15.873H159.892V8.17957H162.449V15.873ZM161.17 7.12903H161.154C160.296 7.12903 159.741 6.53831 159.741 5.80003C159.741 5.04508 160.312 4.4707 161.187 4.4707C162.062 4.4707 162.6 5.04508 162.617 5.80003C162.617 6.53831 162.062 7.12903 161.17 7.12903ZM171.67 15.873H169.113V11.7572C169.113 10.7229 168.742 10.0174 167.817 10.0174C167.111 10.0174 166.69 10.4933 166.505 10.9526C166.438 11.117 166.421 11.3467 166.421 11.5767V15.873H163.864C163.864 15.873 163.898 8.90135 163.864 8.17957H166.421V9.26889C166.761 8.74466 167.369 7.99901 168.726 7.99901C170.408 7.99901 171.67 9.09858 171.67 11.4616V15.873Z" fill="white"/>
            </svg>
            </div>            */}
        </div>
    </div>
  )
}
