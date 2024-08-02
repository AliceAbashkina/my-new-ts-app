import React, { useState } from "react";
import photoImg from './../../img/photo.png'

const ProfilePage = () => {
    const [showEditPage, setShowEditPage] = useState(false);

    const handleEditPage = (e) => {
        e.preventDefault();

        if (showEditPage === false) {
            setShowEditPage(true)
        } else {
            setShowEditPage(false)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setShowEditPage(false)
    };

    return (
        <div className="profile">
            {!showEditPage ? (
                <div className="profile__body">
                    <div className="profile__header">
                        <div className="profile__title">Профиль</div>
                        <div className="profile__controller" onClick={handleEditPage}>
                            {!showEditPage ? (<i className="fa-solid fa-pen-to-square"></i>) : (<i className="fa-solid fa-xmark"></i>)}
                        </div>
                    </div>
                    <div className="profile__content">
                        <div className="profile__row">
                            <div className="profile__column">
                                <div className="profile__photo">
                                    <img src={photoImg} alt="Person" />
                                </div>
                                <button className="profile__button button">Загрузить фото</button>
                            </div>
                            <div className="profile__info">
                                <div className="profile__field">
                                    <label className="profile__label label">
                                        Фамилия
                                        <input className="profile__input input" type="text" placeholder="Иванов" disabled ></input>
                                    </label>
                                </div>
                                <div className="profile__field">
                                    <label className="profile__label label">
                                        Имя
                                        <input className="profile__input input" type="text" placeholder="Иван" disabled></input>
                                    </label>
                                </div>
                                <div className="profile__field">
                                    <label className="profile__label label">
                                        Отчество
                                        <input className="profile__input input" type="text" placeholder="Иванович" disabled></input>
                                    </label>
                                </div>
                                <div className="profile__field">
                                    <label className="profile__label label">
                                        Дата рождения
                                        <input className="profile__input input" type="date" disabled></input>
                                    </label>
                                </div>
                                <div className="profile__field">
                                    <label className="profile__label label">
                                        Адрес электронной почты
                                        <input className="profile__input input" type="email" placeholder="example@meetmind.ru" disabled></input>
                                    </label>
                                </div>
                                <div className="profile__field">
                                    <label className="profile__label label">
                                        Ссылка на профиль в социальных сетях
                                        <input className="profile__input input" type="text" placeholder="https://vk.com/ivanov" disabled></input>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="profile__body">
                    <div className="profile__header">
                        <div className="profile__title">Профиль</div>
                        <div className="profile__controller" onClick={handleEditPage}>
                            {!showEditPage ? (<i className="fa-solid fa-pen-to-square"></i>) : (<i className="fa-solid fa-xmark"></i>)}
                        </div>
                    </div>
                    <div className="profile__content">
                        <div className="profile__row">
                            <div className="profile__column">
                                <div className="profile__photo">
                                    <img src={photoImg} alt="Person" />
                                </div>
                                <button className="profile__button button">Загрузить фото</button>
                            </div>
                            <div className="profile__info">
                                <div className="profile__field">
                                    <label className="profile__label label">
                                        Фамилия *
                                        <input className="profile__input input" type="text" placeholder="Иванов" maxLength={25}></input>
                                    </label>
                                </div>
                                <div className="profile__field">
                                    <label className="profile__label label">
                                        Имя *
                                        <input className="profile__input input" type="text" placeholder="Иван" maxLength={25}></input>
                                    </label>
                                </div>
                                <div className="profile__field">
                                    <label className="profile__label label">
                                        Отчество
                                        <input className="profile__input input" type="text" placeholder="Иванович" maxLength={25}></input>
                                    </label>
                                </div>
                                <div className="profile__field">
                                    <label className="profile__label label">
                                        Дата рождения *
                                        <input className="profile__input input" type="date" ></input>
                                    </label>
                                </div>
                                <div className="profile__field">
                                    <label className="profile__label label">
                                        Адрес электронной почты
                                        <input className="profile__input input" type="email" placeholder="example@meetmind.ru" maxLength={25}></input>
                                    </label>
                                </div>
                                <div className="profile__field">
                                    <label className="profile__label label">
                                        Ссылка на профиль в социальных сетях
                                        <input className="profile__input input" type="text" placeholder="https://vk.com/ivanov" maxLength={25}></input>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile__actions">
                        <button className="profile__button button" onClick={handleSubmit}>Сохранить изменения</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;