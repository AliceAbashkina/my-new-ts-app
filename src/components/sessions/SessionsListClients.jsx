import SessionsListClientsCard from "./SessionsListClientsCard";

const SessionsListClients = ({ activeClient, setActiveClient, clients }) => {
    return (
        <div className="sessions__list">
        <div className="flex-row mb-20">
            <h4>Список сессий</h4>
            </div>
            <div >
                <div>
                    {clients.map(clients => (
                        <SessionsListClientsCard key={clients.id} {...clients} activeClient={activeClient}
                            setActiveClient={setActiveClient} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SessionsListClients;
