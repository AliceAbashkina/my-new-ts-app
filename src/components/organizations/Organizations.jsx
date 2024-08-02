import React, { useState } from "react";

const OrganizationsPage = () => {
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
                        <div className="profile__title">Организации</div>
                        <div className="profile__controller" onClick={handleEditPage}>
                            {!showEditPage ? (<i className="fa-solid fa-pen-to-square"></i>) : (<i className="fa-solid fa-xmark"></i>)}
                        </div>
                    </div>
                    <div className="profile__content">
                        <div className="profile__field">
                            <label className="profile__label label">
                                Организации, в которых Вы состоите, и Ваш статус
                                <textarea className="profile__textarea textarea" rows="5" disabled></textarea>
                            </label>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="profile__body">
                    <div className="profile__header">
                        <div className="profile__title">Организации</div>
                        <div className="profile__controller" onClick={handleEditPage}>
                            {!showEditPage ? (<i className="fa-solid fa-pen-to-square"></i>) : (<i className="fa-solid fa-xmark"></i>)}
                        </div>
                    </div>
                    <div className="profile__content">
                        <div className="profile__field">
                            <label className="profile__label label">
                                Организации, в которых Вы состоите, и Ваш статус
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

export default OrganizationsPage;