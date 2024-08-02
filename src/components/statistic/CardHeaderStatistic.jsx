const CardHeaderStatistic = (props) => {
    return (
        <div className="flex-row border-right-card-statistic">
            <div className='flex-row'>
                <div className='flex-column mr-30'>
                    <h6 className='color-black mb-10'>{props.name}</h6>
                    <div className="flex-row mb-10">
                        <div><p className='card-black-numbers'>{props.number1}<span className='color-grey font-20'>&nbsp;{props.text1}</span></p></div>
                        <div><p className='card-black-numbers'>&nbsp;{props.number2}<span className='color-grey font-20'>&nbsp;{props.text2}</span></p></div>
                    </div>
                    <p className='color-grey'>{props.bottomtext}</p>
                </div>
                <div className='card-class height-fit mr-20'>
                    <img src={props.icon} alt="iconPair" className='icon-person' />
                </div>
            </div>
        </div>
    );
};

export default CardHeaderStatistic;