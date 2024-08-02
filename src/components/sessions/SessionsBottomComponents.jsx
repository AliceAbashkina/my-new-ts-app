import React, { useState } from 'react';
import './sessions.css';
import SessionsCard from './SessionsCard';

const SessionsBottomComponent = ({ clients, activeClient, setActiveClient }) => {
    const activeClientObj = clients.find(client => client.id === activeClient);

    const [activeTab, setActiveTab] = useState('');
    const [tabsCollapsed, setTabsCollapsed] = useState(true);


    const toggleTab = (tab) => {
        if (activeTab === tab) {
            setTabsCollapsed(!tabsCollapsed);
        } else {
            setActiveTab(tab);
            setTabsCollapsed(false);
        }
    };
    const renderContent = () => {
        if (tabsCollapsed) return null;
        switch (activeTab) {
            case 'О клиенте':
                return <div className="session__tab_content"><h6>Информация о клиенте</h6>

                    <p className="mb-20">{activeClientObj && `${activeClientObj.name}, ${activeClientObj.dateOfBirth}`}</p>
                    <h6>Состояние</h6>
                    <div className="flex-row  mb-20">
                        {activeClientObj && activeClientObj.state.map((state, index) => (
                            <SessionsCard key={index} inform={state} />
                        ))}
                    </div>
                    <h6>Отношения</h6>
                    <div className="flex-row mb-20">
                        {activeClientObj && activeClientObj.relationships.map((relationships, index) => (
                            <SessionsCard key={index} inform={relationships} />
                        ))}
                    </div></div>;
            case 'Статистика':
                return <div className="session__tab_content">
                    <table className="align-center session__table_statistic">
                        <thead>
                            <tr>
                                <th>Номер сессии</th>
                                <th>Дата</th>
                                <th>Посещение</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sessionsData.map((session) => (
                                <tr key={session.sessionNumber}>
                                    <td>{session.sessionNumber}</td>
                                    <td>{session.date}</td>
                                    <td>{session.attendance}</td>
                                </tr>
                            ))}
                        </tbody></table>
                </div>;
            case 'Заметки':
                return <div className="session__tab_content">
                    <div className="flex-row  mb-20">
                        {activeClientObj && activeClientObj.notes.map((notes, index) => (
                            <div className="flex-row">
                                <SessionsCard key={index} inform={notes} />
                                <button className="mr-10"><i className="fa-solid fa-xmark"></i></button>
                            </div>
                        ))}
                    </div>
                    <div className="flex-row">
                    <textarea maxlength="50" className="session__textarea mr-10" placeholder="Напишите заметку о клиенте...">
                    </textarea> <button className="btn btn-blue"><i className="fa-solid fa-plus"></i>
                    </button></div></div>;
            default:
                return null;
        }
    };
    return (
        <div className="sessions__bottom">
            <button className="btn btn-red mr-10">Отменить</button>
            <button className="btn btn-orange mr-10">Перенести</button>
            <button className="btn btn-blue" onClick={() => setTabsCollapsed(!tabsCollapsed)}>
                <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button className="btn btn-blue float-right">Написать клиенту</button>
            <div className="session__tabs_content">
                <div className={`sessions__tabs ${tabsCollapsed ? 'collapsed' : ''}`}>
                    <button
                        className={`sessions__tab ${activeTab === 'О клиенте' ? 'sessions__active' : ''}`}
                        onClick={() => toggleTab('О клиенте')}
                    >
                        О клиенте
                    </button>
                    <button
                        className={`sessions__tab ${activeTab === 'Статистика' ? 'sessions__active' : ''}`}
                        onClick={() => toggleTab('Статистика')}
                    >
                        Статистика
                    </button>
                    <button
                        className={`sessions__tab ${activeTab === 'Заметки' ? 'sessions__active' : ''}`}
                        onClick={() => toggleTab('Заметки')}
                    >
                        Заметки
                    </button>
                </div>
                {renderContent()}
            </div></div>
    );
};

const sessionsData = [
    { sessionNumber: 1, date: '03.03.2022', attendance: '+' },
    { sessionNumber: 2, date: '11.03.2022', attendance: '+' },
    { sessionNumber: 3, date: '06.04.2022', attendance: '-' },
    { sessionNumber: 4, date: '23.04.2022', attendance: '+' },
    { sessionNumber: 5, date: '05.05.2022', attendance: '+' },
];


export default SessionsBottomComponent;