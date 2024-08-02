const SessionsListClientsCard = ({id, name, dateOfBirth, lastSessionDate, activeClient, setActiveClient}) => {
    return (
        <div className="flex-column sessions_list-elements" onClick={() => setActiveClient(id)}>
            <div><p className="space-nowrap  mr-10">{name}</p></div>
            <div className="flex-row"><p className="sessions__grey-text full-width">{dateOfBirth}</p><div className="align-right full-width"><p className="mr-10 sessions__grey-text">{lastSessionDate}</p></div></div>
        </div>
    );
};

export default SessionsListClientsCard;
  