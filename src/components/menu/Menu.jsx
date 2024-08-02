import './menu.css'
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className="menu">
            <ul className="menu__body">
                <li className="menu__item">
                    <Link to="/profile" className="menu__link">Главная</Link>
                </li>
                <li className="menu__item">
                    <Link to="/profile" className="menu__link">Профиль</Link>
                </li>
                <li className="menu__item">
                    <Link to="/profile/education" className="menu__link">Образование</Link>
                </li>
                <li className="menu__item">
                    <Link to="/profile/organizations" className="menu__link">Организации</Link>
                </li>
                <li className="menu__item">
                    <Link to="/profile/other" className="menu__link">Прочее</Link>
                </li>
            </ul>
                <ul className="menu__body_mobile">
                    <li className="menu__item">
                        <Link to="/profile" className="menu__link"><i className="fa-solid fa-house"></i><p className="menu__text_icon menu__text_icon_margin">Главная</p></Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/profile" className="menu__link"><i className="fa-solid fa-user"></i><p className="menu__text_icon menu__text_icon_margin">Профиль</p></Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/profile/education" className="menu__link"><i className="fa-solid fa-graduation-cap"></i><p className="menu__text_icon menu__text_icon_margin">Образование</p></Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/profile/organizations" className="menu__link"><i className="fa-solid fa-briefcase"></i><p className="menu__text_icon menu__text_icon_margin">Организации</p></Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/profile/other" className="menu__link"><i className="fa-solid fa-circle-info"></i><p className="menu__text_icon menu__text_icon_margin">Прочее</p></Link>
                    </li>
                </ul>
            </div>
    )
}

export default Menu;