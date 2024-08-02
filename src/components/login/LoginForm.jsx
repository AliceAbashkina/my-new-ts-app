import './login.css';
import React, { useState } from "react";
import InputMask from 'react-input-mask';

const LoginForm = () => {
    const [showCodeInput, setShowCodeInput] = useState(false);

    const handleSubmitPhone = (e) => {
        e.preventDefault();

        setShowCodeInput(true);
    };

    const handleSubmitCode = (e) => {
        e.preventDefault();

        setShowCodeInput(false);
    };

    return (
        <div className="login">
            <h1 className="login__title">Войдите в свой аккаунт</h1>
            <div className="login__row">
                {!showCodeInput ? (
                    <form className="login__form" onSubmit={handleSubmitPhone}>
                        <p className="login__paragraph">
                            Введите свой номер телефона.
                        </p>
                        <p className="login__paragraph">
                            Отправим SMS с проверочным кодом.
                        </p>
                        <div className="login__field">
                            <InputMask
                                mask="+7 (999) 999-99-99"
                                placeholder="+7 (___) ___-__-__"
                                className="login__input input"
                                type="tel"
                                id="phone"
                                required
                            />
                        </div>
                        <div className="login__actions">
                            <button type="submit" className="login__button button">Получить код</button>
                        </div>
                        <p className="login__paragraph">
                            Нет аккаунта? <a className="login__link link" href="/registration">Регистрация</a>
                        </p>
                    </form>
                ) : (
                    <form className="login__form" onSubmit={handleSubmitCode}>
                        <p className="login__paragraph">
                            Введите код из SMS-сообщения, отправленного на номер ...
                        </p>
                        <div className="login__field">
                            <input
                                className="login__input input"
                                type="text"
                                id="code"
                                required
                            />
                        </div>
                        <div className="login__actions">
                            <button type="submit" className="login__button button">Продолжить</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default LoginForm;