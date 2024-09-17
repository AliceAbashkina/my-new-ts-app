import React, { useState } from 'react';
import SessionsBottomComponent from "./SessionsBottomComponents";
import SessionsListClients from "./SessionsListClients";

interface Client {
    id: number;
    name: string;
    dateOfBirth: string;
    lastSessionDate: string;
    state: string[];
    relationships: string[];
    notes: string[];
}

interface SessionsComponentProps {
    clients: Client[];
}

const SessionsComponent: React.FC<SessionsComponentProps> = (props) => {
    const [activeClient, setActiveClient] = useState(1);
    const { clients } = props;

    return (
        <div>
            <div className="flex-row">
                <SessionsListClients clients={clients} activeClient={activeClient} setActiveClient={setActiveClient} />
                <div className="flex-column sessions__screen">
                    <div className="sessions__black"></div>
                    <SessionsBottomComponent clients={clients} activeClient={activeClient} setActiveClient={setActiveClient} />
                </div>
            </div>
        </div>
    );
};

export default SessionsComponent;
