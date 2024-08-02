import React, { useContext } from 'react';
import logoImg from './../../img/logo/logo_mini.png'
import './header.css'
import {MenuContext} from './../menu/MenuContext.jsx';

function Header () {
    const { toggleMenuMobile } = useContext(MenuContext);
    return (
        <header className="header">
            <div className="header__container container-wide">
                <div className="header__row">
                    <a className="header__logo" href="/">
                        <img src={logoImg} alt="Logo" />
                        <span>MeetMind</span>
                    </a>
                    <a href="/login" className="header__login button">
                        Авторизоваться
                    </a>
                    <div className="header__bar_icon_div">
                    <i onClick={toggleMenuMobile} className="fa-solid fa-bars header__bar_icon"></i>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;