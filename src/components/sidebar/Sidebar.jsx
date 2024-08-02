import React, { useState, useContext } from 'react';
import { MenuContext } from './../menu/MenuContext.jsx'

import './sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isMenuOpen, toggleMenuMobile } = useContext(MenuContext);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <>
            <div className={isOpen ? "sidebar" : "sidebar sidebar_closed"}>
                <ul className="sidebar__body">
                    <li className="sidebar__item">
                        <a href="/sessions" className="sidebar__link">
                            <div className="sidebar__icon"><i className="fa-solid fa-video"></i></div>
                            <div className="sidebar__name">Сессии</div>
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a href="/profile" className="sidebar__link">
                            <div className="sidebar__icon"><i className="fa-solid fa-user"></i></div>
                            <div className="sidebar__name">Профиль</div>
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a href="/schedule" className="sidebar__link">
                            <div className="sidebar__icon"><i className="fa-solid fa-calendar-days"></i></div>
                            <div className="sidebar__name">Расписание</div>
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a href="/clients" className="sidebar__link">
                            <div className="sidebar__icon"><i className="fa-solid fa-person-harassing"></i></div>
                            <div className="sidebar__name">Клиенты</div>
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a href="/statistics" className="sidebar__link">
                            <div className="sidebar__icon"><i className="fa-solid fa-chart-line"></i></div>
                            <div className="sidebar__name">Статистика</div>
                        </a>
                    </li>
                </ul>
                <div className="sidebar__controller" onClick={toggleMenu}>
                    <div className="sidebar__button">
                        <div className="sidebar__icon">{isOpen ? <i className="fa-solid fa-chevron-left"></i> : <i className="fa-solid fa-chevron-right"></i>}</div>
                        <div className="sidebar__name">Свернуть меню</div>
                    </div>
                </div>
            </div>
            <div className={`left-menu ${isMenuOpen ? 'menu-open' : ''}`}>
                <ul className="sidebar__body">
                    <li className="sidebar__item">
                        <a href="/sessions" className="sidebar__link">
                            <div className="sidebar__icon"><i className="fa-solid fa-video"></i></div>
                            <div className="sidebar__name">Сессии</div>
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a href="/profile" className="sidebar__link">
                            <div className="sidebar__icon"><i className="fa-solid fa-user"></i></div>
                            <div className="sidebar__name">Профиль</div>
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a href="/schedule" className="sidebar__link">
                            <div className="sidebar__icon"><i className="fa-solid fa-calendar-days"></i></div>
                            <div className="sidebar__name">Расписание</div>
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a href="/clients" className="sidebar__link">
                            <div className="sidebar__icon"><i className="fa-solid fa-person-harassing"></i></div>
                            <div className="sidebar__name">Клиенты</div>
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a href="/statistics" className="sidebar__link">
                            <div className="sidebar__icon"><i className="fa-solid fa-chart-line"></i></div>
                            <div className="sidebar__name">Статистика</div>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;