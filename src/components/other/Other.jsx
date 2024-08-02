import React, { useState } from "react";

const OtherPage = () => {
    const [showEditPage, setShowEditPage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setShowEditPage(false)
    };

    const handleEditPage = (e) => {
        e.preventDefault();

        if (showEditPage === false) {
            setShowEditPage(true)
        } else {
            setShowEditPage(false)
        }
    };

    return (
        <div className="profile">
            {!showEditPage ? (
                <div className="profile__body">
                    <div className="profile__header">
                        <div className="profile__title">Прочее</div>
                        <div className="profile__controller" onClick={handleEditPage}>
                            {!showEditPage ? (<i className="fa-solid fa-pen-to-square"></i>) : (<i className="fa-solid fa-xmark"></i>)}
                        </div>
                    </div>
                    <div className="profile__content">
                        <div className="profile__field">
                            <label className="profile__label label">
                                Расскажите о себе в свободной форме, что Вы считаете нужным чтобы понять, какой Вы специалист
                                <textarea className="profile__textarea textarea" rows="5" disabled></textarea>
                            </label>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="profile__body">
                    <div className="profile__header">
                        <div className="profile__title">Прочее</div>
                        <div className="profile__controller" onClick={handleEditPage}>
                            {!showEditPage ? (<i className="fa-solid fa-pen-to-square"></i>) : (<i className="fa-solid fa-xmark"></i>)}
                        </div>
                    </div>
                    <div className="profile__content">
                        <div className="profile__field">
                            <label className="profile__label label">
                                Расскажите о себе в свободной форме, что Вы считаете нужным чтобы понять, какой Вы специалист
                                <textarea className="profile__textarea textarea" rows="5"></textarea>
                            </label>
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

export default OtherPage;