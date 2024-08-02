import iconClock from './../../img/clock.png'
import iconHeart from './../../img/heart.png'
import iconUser from './../../img/user_index.png'
import iconPair from './../../img/pair_index.png'
import iconGroup from './../../img/group_index.png'
import CardHeaderStatistic from './CardHeaderStatistic.jsx'

const HeaderStatistic = () => {
    return (
        <div className='statistic__flex_row background-white header-paddings content-space-between mb-20'>
            <CardHeaderStatistic name="Вы с нами" number1="7" text1="лет" number2="9" text2="месяцев" bottomtext="с 25 марта 2012 года" icon={iconClock} />
            <CardHeaderStatistic name="Активных клиентов"  number1="6" text1="человек" bottomtext="за текущий месяц" icon={iconHeart} />
            <CardHeaderStatistic name="Личная терапия" number1="15" text1="сессий" bottomtext="за текущий месяц" icon={iconUser} />
            <CardHeaderStatistic name="Парная терапия" number1="7" text1="сессий" bottomtext="за текущий месяц" icon={iconPair} />
            <CardHeaderStatistic name="Групповая терапия" number1="10 " text1="сессий" bottomtext="за текущий месяц" icon={iconGroup} />
        </div>
    );
};

export default HeaderStatistic;