import React from 'react';
import SessionsComponent from '../../components/sessions/SessionsComponent';

interface Client {
    id: number;
    name: string;
    dateOfBirth: string;
    lastSessionDate: string;
    state: string[];
    relationships: string[];
    notes: string[];
}

const SessionsPage: React.FC = () => {
    return (
        <div className="sessions__container">
            <SessionsComponent clients={clients} />
        </div>
    );
};


const clients: Client[] = [
    {
        id: 1,
        name: "Иван Иванов",
        dateOfBirth: "1990-01-15",
        lastSessionDate: "2023-06-20",
        state: ["Выгорание"],
        relationships: ["С коллегами", "С друзьями"],
        notes: ["Требуется работа над управлением стрессом на работе"]
    },
    {
        id: 2,
        name: "Мария Смирнова",
        dateOfBirth: "1985-03-22",
        lastSessionDate: "2023-07-01",
        state: ["Стресс", "Бессонница"],
        relationships: ["С партнером"],
        notes: ["Рекомендовать техники релаксации перед сном"]
    },
    {
        id: 3,
        name: "Алексей Петров",
        dateOfBirth: "1992-11-30",
        lastSessionDate: "2023-06-15",
        state: ["Тревожность", "Одиночество"],
        relationships: ["С родителями", "С коллегами"],
        notes: ["Обсудить методы справления с тревожностью в обществе"]
    },
    {
        id: 4,
        name: "Елена Кузнецова",
        dateOfBirth: "1988-05-10",
        lastSessionDate: "2023-06-25",
        state: ["Панические атаки"],
        relationships: ["С родственниками"],
        notes: ["Подходы к снижению частоты панических атак"]
    },
    {
        id: 5,
        name: "Сергей Соколов",
        dateOfBirth: "1995-07-05",
        lastSessionDate: "2023-06-30",
        state: ["Стресс"],
        relationships: ["С друзьями", "С партнером"],
        notes: ["Разговор о стратегиях управления стрессом в личной","В профессиональной жизни"]
    },
    {
        id: 6,
        name: "Анна Новикова",
        dateOfBirth: "1993-08-19",
        lastSessionDate: "2023-07-02",
        state: ["Выгорание", "Тревожность"],
        relationships: ["С коллегами", "С партнером"],
        notes: ["Подходы к профилактике выгорания и снижению тревожности"]
    },
    {
        id: 7,
        name: "Дмитрий Федоров",
        dateOfBirth: "1987-12-11",
        lastSessionDate: "2023-06-18",
        state: ["Одиночество"],
        relationships: ["С соседями"],
        notes: ["Разговор о чувствах одиночества и их влиянии на эмоциональное состояние"]
    },
    {
        id: 8,
        name: "Ольга Михайлова",
        dateOfBirth: "1991-04-14",
        lastSessionDate: "2023-06-28",
        state: ["Выгорание", "Стресс"],
        relationships: ["С родственниками"],
        notes: ["Стратегии снижения стресса и профилактика выгорания в бытовой и профессиональной среде"]
    },
    {
        id: 9,
        name: "Владимир Сидоров",
        dateOfBirth: "1986-10-25",
        lastSessionDate: "2023-06-22",
        state: ["Бессонница", "Панические атаки"],
        relationships: ["С друзьями", "С коллегами"],
        notes: ["Техники справления с бессонницей и уменьшения частоты панических атак"]
    },
    {
        id: 10,
        name: "Наталья Воробьева",
        dateOfBirth: "1994-02-13",
        lastSessionDate: "2023-06-27",
        state: ["Тревожность"],
        relationships: ["С партнером", "С родителями"],
        notes: ["Подходы к снижению уровня тревожности и улучшению взаимоотношений с близкими"]
    },
    {
        id: 11,
        name: "Александр Лебедев",
        dateOfBirth: "1989-09-07",
        lastSessionDate: "2023-07-03",
        state: ["Стресс", "Одиночество"],
        relationships: ["С коллегами"],
        notes: ["Работа над управлением стрессом на работе и преодоление чувства одиночества"]
    },
    {
        id: 12,
        name: "Екатерина Орлова",
        dateOfBirth: "1984-05-18",
        lastSessionDate: "2023-06-19",
        state: ["Выгорание"],
        relationships: ["С родственниками"],
        notes: ["Профилактика выгорания в бытовой и профессиональной жизни"]
    },
    {
        id: 13,
        name: "Юрий Зайцев",
        dateOfBirth: "1996-11-03",
        lastSessionDate: "2023-07-04",
        state: ["Бессонница", "Панические атаки"],
        relationships: ["С друзьями", "С партнером"],
        notes: ["Советы по улучшению качества сна и справлению с паническими атаками"]
    },
    {
        id: 14,
        name: "Марина Тихонова",
        dateOfBirth: "1990-06-22",
        lastSessionDate: "2023-06-24",
        state: ["Стресс", "Тревожность"],
        relationships: ["С соседями", "С коллегами"],
        notes: ["Работа над стратегиями снижения уровня стресса и тревожности в повседневной жизни"]
    },
    {
        id: 15,
        name: "Игорь Кузьмин",
        dateOfBirth: "1983-08-30",
        lastSessionDate: "2023-07-01",
        state: ["Выгорание", "Одиночество"],
        relationships: ["С партнером", "С родителями"],
        notes: ["Профилактика выгорания и поддержание поддерживающих взаимоотношений"]
    },
    {
        id: 16,
        name: "Ксения Григорьева",
        dateOfBirth: "1988-03-26",
        lastSessionDate: "2023-06-29",
        state: ["Панические атаки"],
        relationships: ["С друзьями", "С коллегами"],
        notes: ["Техники справления с паническими атаками и поддержка взаимоотношений в обществе"]
    },
    {
        id: 17,
        name: "Николай Медведев",
        dateOfBirth: "1992-12-14",
        lastSessionDate: "2023-06-21",
        state: ["Стресс", "Тревожность"],
        relationships: ["С родителями"],
        notes: ["Методы справления с повседневным стрессом и тревожностью"]
    },
    {
        id: 18,
        name: "Алёна Захарова",
        dateOfBirth: "1995-07-17",
        lastSessionDate: "2023-06-23",
        state: ["Выгорание"],
        relationships: ["С соседями"],
        notes: ["Разговор о профилактике выгорания и поддержании взаимоотношений с соседями"]
    },
    {
        id: 19,
        name: "Виктор Павлов",
        dateOfBirth: "1986-01-20",
        lastSessionDate: "2023-06-26",
        state: ["Бессонница", "Одиночество"],
        relationships: ["С партнером"],
        notes: ["Подходы к снижению бессонницы и чувства одиночества"]
    },
    {
        id: 20,
        name: "Людмила Матвеева",
        dateOfBirth: "1989-11-11",
        lastSessionDate: "2023-07-02",
        state: ["Панические атаки", "Тревожность"],
        relationships: ["С родственниками"],
        notes: ["Техники справления с паническими атаками и улучшение взаимоотношений с родственниками"]
    }
];

export default SessionsPage;
