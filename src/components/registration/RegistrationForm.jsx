import React, { useState } from "react";
import './registration.css';
import manImg from './../../img/man.png'
import InputMask from 'react-input-mask';

const RegistrationForm = () => {
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
        <div className="registration">
            <h1 className="registration__title">Впервые на “MeetMind”?</h1>
            <div className="registration__row">
                {!showCodeInput ? (
                    <form className="registration__form" onSubmit={handleSubmitPhone}>
                        <h4 className="registration__subtitle">
                            Удобная и быстрая регистрация.
                        </h4>
                        <p className="registration__paragraph">
                            Введите свой номер телефона
                        </p>
                        <div className="registration__field">
                            <InputMask
                                mask="+7 (999) 999-99-99"
                                placeholder="+7 (___) ___-__-__"
                                className="registration__input input"
                                type="tel"
                                id="phone"
                                required
                            />
                        </div>
                        <div className="registration__actions">
                            <button type="submit" className="registration__button button">Получить код</button>
                        </div>
                        <p className="registration__paragraph registration__agreements">
                            Вводя свой номер, вы принимаете условия <a href="#!" target="blank" className="registration__link link">пользовательского соглашения</a>, даёте <a href="#!" target="blank" className="registration__link link">согласие на обработку персональных данных</a> и на получение СМС-паролей, а также иных информационных и сервисных сообщений на указанный номер телефона.
                        </p>
                    </form>
                ) : (
                    <form className="registration__form" onSubmit={handleSubmitCode}>
                        <h4 className="registration__subtitle">
                            Подтверждение телефона
                        </h4>
                        <p className="registration__paragraph">
                            Введите код из СМС-сообщения, отправленного на номер ...
                        </p>
                        <div className="registration__field">
                            <input
                                className="registration__input input"
                                type="text"
                                id="code"
                                required
                            />
                        </div>
                        <div className="registration__actions">
                            <button type="submit" className="registration__button button">Продолжить</button>
                        </div>

                    </form>
                )}
                <div className="registration__image">
                    <img src={manImg} alt="Logo" />
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;