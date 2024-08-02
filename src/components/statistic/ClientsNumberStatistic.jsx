const ClientsNumberStatistic = () => {
    return (
        <div className='background-white card-paddings'>
            <h4>Количество клиентов</h4>
            <div className="flex-row">
                <div className="flex-column">
                    <p className="card-black-numbers">76<span className="color-grey font-20">&nbsp;человек</span></p>
                    <p className="color-grey">за всё время</p>
                </div>
                <p className="card-black-numbers">&nbsp;22<span className="color-grey font-20">&nbsp;группы</span></p>
                <p className="card-black-numbers">&nbsp;3<span className="color-grey font-20">&nbsp;пары</span></p>
            </div>
            <div className="flex-row">
                <div className="flex-column">
                    <p className="card-black-numbers width-content-min">70<span className="color-grey font-20">&nbsp;человек</span></p>
                    <p className="color-grey width-content-min">завершенные клиенты</p>
                </div>
                <p className="card-black-numbers">&nbsp;3<span className="color-grey font-20">&nbsp;пары</span></p>
                <p className="card-black-numbers">&nbsp;2<span className="color-grey font-20">&nbsp;группы</span></p>
            </div>
            <p className="card-black-numbers">6<span className="color-grey font-20">&nbsp;человек</span></p>
            <p className="color-grey">активные клиенты</p>
            <progress value={0.5} />
            <div className="flex-row">
                <p><span className="dot back-orange"></span>&nbsp;Активные</p>
                <p><span className="dot back-grey ml-20"></span>&nbsp;Завершенные</p>
            </div>
        </div>
    );
};

export default ClientsNumberStatistic;