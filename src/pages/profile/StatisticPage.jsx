import './../../components/statistic/statistic.css'
import HeaderStatistic from './../../components/statistic/HeaderStatistic.jsx'
import Statistic from './../../components/statistic/Statistic.jsx'
import MeetingStatistic from './../../components/statistic/MeetingStatistic.jsx'
import ClientsStatistic from './../../components/statistic/ClientsStatistic.jsx'
import ClientsNumberStatistic from './../../components/statistic/ClientsNumberStatistic.jsx'


function StatisticPage() {
    return (
        <div className="page">
        <div className="flex-column">
            <HeaderStatistic />
            <div className="statistic__flex_row">
                <Statistic />
                <MeetingStatistic />
            </div>
            <div className="statistic__flex_row">
                <ClientsStatistic />
                <ClientsNumberStatistic />
            </div>
        </div></div>
    )
}

export default StatisticPage;