import React from 'react';
import './modal.css';

const Modal = ({ isOpenModal, onClose, title, type, data, addToGroup }) => {
    if (!isOpenModal) return null;

    let modalContent;

    if (type === 3) {
        modalContent = (
            <div className="modal__content">
                <p>Ссылка для записи клиента ({title}):</p>
                <div className="input-with-icon">
                    <input type="text" className="input-field" placeholder="" />
                    <p className="client__grey-text">По нажатию на кнопку будет создана группа. Для добавления в неё клиентов нужно кликнуть по ней в списке и нажать “Добавить”.</p>
                    <span className="link-icon">
                        <i className="fa-solid fa-link"></i>
                    </span>
                </div>
                <div className="input-with-icon mt-20">
                    <span className="link-icon">
                        <i class="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" className="input-field" placeholder="Поиск клиентов для добавления" />
                </div>
                <table className="modal__clients-list">
                <thead>
                    <th>Номер группы</th>
                    <th>Имя/Фамилия</th>
                    <th>Действие</th>
                </thead>
                    <tbody>
                        {data.map(client => (
                            <tr key={client.id}>
                                <td> {client.groupId === null ? (
                                    "Нет"
                                    ) : (
                                        client.groupId
                                    )}</td>
                                <td>{client.name}</td>
                                <td>
                                    {client.groupId === null ? (
                                        <button className="modal__button" onClick={() => addToGroup(client.id)}><i class="fa-solid fa-plus"></i> Добавить</button>
                                    ) : (
                                        <span className="modal__button-outlined"><i class="fa-solid fa-check"></i> Добавлен</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    } else {
        modalContent = (
            <div className="modal__content">
                <p>Ссылка для записи клиента ({title}):</p>
                <div className="input-with-icon">
                    <input type="text" className="input-field" placeholder="" />
                    <span className="link-icon">
                        <i className="fa-solid fa-link"></i>
                    </span>
                </div>
                <p className="client__grey-text">Отправьте эту ссылку клиенту удобным для вас способом. После того, как клиент перейдёт по ней и зарегистрирует свой профиль, он появится в вашем списке и ему можно будет назначить сессию.</p>
            </div>
        );
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-title">{title}</h2>
                    <button className="modal-close" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
                </div>
                {modalContent}
            </div>
        </div>
    );
};

export default Modal;