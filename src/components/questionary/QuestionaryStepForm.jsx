import './questionary.css';
import { useState } from "react";

const QuestionaryStepForm = () => {
    const [step, setStep] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();

        window.location.href = "/profile";
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const renderForm = () => {
        switch (step) {
            case 1:
                return (
                    <div className="questionary">
                        <h1 className="questionary__title">
                            Давайте сотрудничать!
                        </h1>
                        <p className="questionary__paragraph">
                            Пожалуйста, заполните анкету.
                        </p>
                        <p className="questionary__paragraph">
                            Она поможет нам составить Ваш профессиональный портрет.
                        </p>
                        <div className="questionary__icon">
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div className="questionary__block">
                            <h2 className="questionary__subtitle">
                                Контактная информация
                            </h2>
                            <div className="questionary__field">
                                <label className="questionary__label label">
                                    Фамилия *
                                    <input className="questionary__input input" type="text" placeholder="Иванов"></input>
                                </label>
                            </div>
                            <div className="questionary__field">
                                <label className="questionary__label label">
                                    Имя *
                                    <input className="questionary__input input" type="text" placeholder="Иван"></input>
                                </label>
                            </div>
                            <div className="questionary__field">
                                <label className="questionary__label label">
                                    Отчество
                                    <input className="questionary__input input" type="text" placeholder="Иванович"></input>
                                </label>
                            </div>
                            <div className="questionary__field">
                                <label className="questionary__label label">
                                    Дата рождения *
                                    <input className="questionary__input input" type="date"></input>
                                </label>
                            </div>
                            <div className="questionary__field">
                                <label className="questionary__label label">
                                    Адрес электронной почты
                                    <input className="questionary__input input" type="email" placeholder="example@meetmind.ru"></input>
                                </label>
                            </div>
                            <div className="questionary__field">
                                <label className="questionary__label label">
                                    Ссылка на профиль в социальных сетях
                                    <input className="questionary__input input" type="text" placeholder="https://vk.com/ivanov"></input>
                                </label>
                            </div>
                        </div>
                        <div className="questionary__stepper stepper">
                            <div className="stepper__row">
                                <button className="stepper__button button" disabled>Назад</button>
                                <div className="stepper__step">1/3</div>
                                <button className="stepper__button button" onClick={nextStep}>Далее</button>
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="questionary">
                        <div className="questionary__block">
                            <h2 className="questionary__subtitle">
                                Образование
                            </h2>
                            <div className="questionary__field">
                                <label className="questionary__label label">
                                    Основное образование 
                                    <span>Напишите о базовом психологическом (смежном) обучении или переподготовке. Год окончания, Название ВУЗа, Название факультета и спепиалитета, Академическая степень (бакалавриат, магистратура) или учёная степень (при наличии)</span>
                                    <textarea className="questionary__textarea textarea" rows="5"></textarea>
                                </label>
                            </div>
                            <div className="questionary__field">
                                <label className="questionary__label label">
                                    Дополнительное образование 
                                    <span>Программы повышения квалификации, семинары, курсы. Укажите названия и годы прохождения.</span>
                                    <textarea className="questionary__textarea textarea" rows="5"></textarea>
                                </label>
                            </div>
                        </div>
                        <div className="questionary__stepper stepper">
                            <div className="stepper__row">
                                <button className="stepper__button button" onClick={prevStep}>Назад</button>
                                <div className="stepper__step">2/3</div>
                                <button className="stepper__button button" onClick={nextStep}>Далее</button>
                            </div>
                        </div>
                    </div>
                )
                case 3:
                    return (
                        <div className="questionary">
                            <div className="questionary__block">
                                <h2 className="questionary__subtitle">
                                    О себе
                                </h2>
                                <div className="questionary__field">
                                    <label className="questionary__label label">
                                        Расскажите о себе в свободной форме, что Вы считаете нужным чтобы понять, какой Вы специалист
                                        <textarea className="questionary__textarea textarea" rows="5"></textarea>
                                    </label>
                                </div>
                                <div className="questionary__actions">
                                    <button type="submit"  className="stepper__button button">Отправить анкету и завершить регистрацию</button>
                                </div>
                            </div>
                            <div className="questionary__stepper stepper">
                                <div className="stepper__row">
                                    <button className="stepper__button button" onClick={prevStep}>Назад</button>
                                    <div className="stepper__step">3/3</div>
                                    <button className="stepper__button button" disabled>Далее</button>
                                </div>
                            </div>
                        </div>
                    )
            default:
                return null;
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {renderForm()}
        </form>
    )
}

export default QuestionaryStepForm;