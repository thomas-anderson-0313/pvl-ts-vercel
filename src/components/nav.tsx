import React from 'react'
import {Link} from 'react-router-dom'
import { CSSTransition } from "react-transition-group";

import './comp.style.scss'
import Logo from '../assets/logo.png'
import User_icon from '../assets/user.png'
import Burger_icon from '../assets/burger.png'

export default function Nav() {

    const [isNavVisible, setNavVisibility] = React.useState(false);
    const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  
    React.useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1000px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
    
        return () => {
          mediaQuery.removeListener(handleMediaQueryChange);
        };
      }, []);
    
      const handleMediaQueryChange = (mediaQuery:any) => {
        if (mediaQuery.matches) {
          setIsSmallScreen(true);
        } else {
          setIsSmallScreen(false);
        }
      };
    
      const toggleNav = () => {
        setNavVisibility(!isNavVisible);
      };

    return(
        <div className="nav">
                <Link to = "/" >
                    <div className='logo-container'>
                        <img className='logo' src={Logo} alt = "logo" />
                        <div className='logo-content'>PVL account shop</div>
                    </div>
                </Link>
                <CSSTransition
                    in={!isSmallScreen || isNavVisible}
                    timeout={350}
                    classNames="NavAnimation"
                    unmountOnExit
                >
                    <div className='nav-links'>
                        <div className='nav-menu'>
                            <Link to="/marketplace">Marketplace</Link>
                        </div>
                        <div className='nav-menu'>
                            <Link to="/about-us">Abour Us</Link>
                        </div>
                        <div className='nav-menu'>Cart</div>
                        <div className='nav-menu'>
                            <Link to = {!window.localStorage.auth?"/signup":"/login"}>
                                <div className='menu-button'>
                                    <div>
                                        <img className='btn-icon' src = {User_icon} alt = "user" />
                                    </div>
                                    <div>
                                        {!window.localStorage.auth?"Sign Up":window.localStorage.auth==="0"?"Log In":"Log Out"}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </CSSTransition>
                <button onClick={toggleNav} className="Burger">
                    <img
                    src={Burger_icon}
                    alt="hamburger"
                    width="24px"
                    />
                </button>
        </div>
    )
}