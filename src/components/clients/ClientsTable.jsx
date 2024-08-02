// ClientsTable.js

import React, { useState } from 'react';
import Modal from '../modal/Modal';
const columns = [
    { label: '№', key: 'id' },
    { label: 'ID', key: 'userId' },
    { label: 'Имя', key: 'name' },
    { label: 'Количество сессий', key: 'sessionCount' },
    { label: 'Последняя сессия', key: 'lastSession' },
    { label: 'Статус', key: 'status' }
];

const data = [
    {
        id: 1,
        userId: 'user123',
        name: 'Иван Иванов',
        sessionCount: 5,
        lastSession: '2024-06-15',
        status: 1,
        groupId: 1,
    },
    {
        id: 2,
        userId: 'user456',
        name: 'Петр Петров',
        sessionCount: 10,
        lastSession: '2024-06-14',
        status: 2,
        groupId: null,
    },
    // Здесь остальные данные...
];

export const ClientsTable = ({ title, type }) => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => {
        setIsOpenModal(true);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };

    return (
        <div className="clients__therapy">
            <div className="clients__therapy-header" onClick={toggleOpen}>
                <h5 className="clients__title">{title} терапия</h5>
                <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
            </div>
            {isOpen && (
                <div className="clients__therapy-content">
                    <button className="button mb-2" onClick={openModal}>Добавить</button>
                    <Modal isOpenModal={isOpenModal} onClose={closeModal} title={title} type={type} data={data}>
                    </Modal>
                    <table className="clients__table_clients">
                        <thead>
                            <tr>
                                {columns.map((column, index) => (
                                    <th key={index}>{column.label}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row) => (
                                <tr key={row.id}>
                                    {columns.map((column) => (
                                        <td key={column.key}>
                                            {column.key === 'status' ? (
                                                <button className="clients__therapy-status">
                                                    <i className={`fa-solid fa-circle clients__status-icon ${row[column.key] === 1 ? 'clients__status-icon-active' : 'clients__status-icon-deactive'
                                                        }`}></i>
                                                    {row[column.key] === 1 ? 'Активен' : 'Неактивен'}
                                                </button>
                                            ) : (
                                                row[column.key]
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ClientsTable;