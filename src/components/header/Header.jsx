import "./header.scss"
import { useState } from "react"

export default function Header() {

    const [dropdown, setDropdown] = useState(false);
    const [featuresDropdown, setFeaturesDropdown] = useState(false)
    const [contactDropdown, setContactDropdown] = useState(false)

    const toggleDropdownAbout = (e) => {
        e.preventDefault();
        setDropdown(!dropdown);
        setFeaturesDropdown(false);
        setContactDropdown(false);
    }

    const toggleDropdownFeatured = (e) => {
        e.preventDefault();
        setFeaturesDropdown(!featuresDropdown)
        setDropdown(false);
        setContactDropdown(false);
    }

    const toggleDropdownContact = (e) => {
        e.preventDefault();
        setContactDropdown(!contactDropdown)
        setDropdown(false);
        setFeaturesDropdown(false);
    }



  return (
    <div className="header">
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
            <path d="M16.4062 0C13.2417 -3.77363e-08 10.1483 0.938383 7.51713 2.69649C4.88594 4.45459 2.83518 6.95345 1.62418 9.87706C0.413176 12.8007 0.096322 16.0177 0.713685 19.1214C1.33105 22.2251 2.8549 25.0761 5.09254 27.3137C7.33018 29.5513 10.1811 31.0752 13.2848 31.6926C16.3885 32.3099 19.6056 31.9931 22.5292 30.7821C25.4528 29.5711 27.9517 27.5203 29.7098 24.8891C31.4679 22.2579 32.4062 19.1645 32.4062 16L24.4062 16C24.4062 17.5823 23.9371 19.129 23.058 20.4446C22.179 21.7602 20.9295 22.7855 19.4677 23.391C18.0059 23.9965 16.3974 24.155 14.8455 23.8463C13.2937 23.5376 11.8682 22.7757 10.7494 21.6569C9.63057 20.538 8.86865 19.1126 8.55997 17.5607C8.25129 16.0089 8.40971 14.4003 9.01521 12.9385C9.62072 11.4767 10.6461 10.2273 11.9617 9.34824C13.2773 8.46919 14.824 8 16.4062 8V0Z" fill="white"/>
            <path d="M16.4062 0C14.3051 -2.5056e-08 12.2245 0.413852 10.2833 1.21793C8.3421 2.022 6.57828 3.20055 5.09254 4.68629C3.6068 6.17203 2.42825 7.93586 1.62418 9.87707C0.820102 11.8183 0.40625 13.8989 0.40625 16H8.40625C8.40625 14.9494 8.61318 13.9091 9.01521 12.9385C9.41725 11.9679 10.0065 11.086 10.7494 10.3431C11.4923 9.60028 12.3742 9.011 13.3448 8.60896C14.3154 8.20693 15.3557 8 16.4062 8V0Z" fill="#5CE1E6"/>
            <circle cx="16.4062" cy="16" r="5" fill="#5CE1E6"/>
            <path d="M21.4062 16C21.4062 15.3434 21.2769 14.6932 21.0256 14.0866C20.7744 13.48 20.4061 12.9288 19.9418 12.4645C19.4775 12.0002 18.9263 11.6319 18.3197 11.3806C17.713 11.1293 17.0629 11 16.4062 11C15.7496 11 15.0995 11.1293 14.4928 11.3806C13.8862 11.6319 13.335 12.0002 12.8707 12.4645C12.4064 12.9288 12.0381 13.48 11.7869 14.0866C11.5356 14.6932 11.4062 15.3434 11.4063 16L16.4062 16H21.4062Z" fill="white"/>
        </svg>
        <span className="logo-name">HooBank</span>

        <nav className="nav">
            <ul className="ul-elements">
                <li><a href="/">Home</a></li>
                <li>
                    {dropdown && (
                        <ul className="dropdown-content">
                            <li><a href="">Info</a></li>
                            <li><a href="">Accomplishments</a></li>
                            <li><a href="">Team</a></li>
                            <li><a href="">Become one of us</a></li>
                        </ul>
                    )}
                    <a href="/" onClick={toggleDropdownAbout}>About Us</a>
                    
                </li>
                <li>
                    {featuresDropdown && (
                    <ul className="dropdown-content">
                        <li><a href="">Appliences</a></li>
                        <li><a href="">Account related</a></li>
                        <li><a href="">Possibilities</a></li>
                    </ul>
                    )}
                    <a href="/" onClick={toggleDropdownFeatured}>Features</a>
                </li>
                <li>
                    {contactDropdown && (
                        <ul className="dropdown-content">
                         <li><a href="">Locations</a></li>
                         <li><a href="">Digital Platforms</a></li>
                     </ul>
                    )}
                    <a href="/" onClick={toggleDropdownContact}>Contact Us</a>
                    
                </li>
            </ul>

        </nav>
    </div>
  )
}
