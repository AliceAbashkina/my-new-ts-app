import './index.css'
import images from './IndexImportPng.jsx';
function Index() {
    return (
        <div>
            <div className='mb-60 index__main-elememt'>
                <div>
                    <div className='position-relative'>
                        <img className='dots1 mt-20' src={images.dots1} alt="dots1" />
                        <img className='dots2' src={images.dots2} alt="dots2" />
                    </div>

                    <div>
                        <h2 className='color-orange strong-text main-text mb-30 line-height' >Управляйте своей практикой
                            полностью онлайн</h2>
                        <h6 className='mb-30 index__main-text'>MeetMind – это сервис, который позволит вам в одном месте назначать и проводить сессии, собирать и анализировать статистику и вести заметки. Чтобы начать нужно только пройти регистрацию</h6>
                        <button className='profile__button button button-index' >Пройти регистрацию</button>
                    </div>

                </div>
                <img src={images.indexPeople} className='index__main-img' alt="indexPeople" />
            </div>


            <div >
                <h2 className='mb-60 second-header'>Наши преимущества</h2>
                <div className='mb-60 index__four-cards'>

                    <div className='flex-column align-center index__four-card'>
                        <img className='index__people-image mb-30' src={images.indexConvers} alt="indexConvers" />
                        <h6 className='strong-text mb-10'>Встроенный видеочат</h6>
                        <p className='index__card-text'>Для проведения сессий вам не придется использоватьсторонние сервисы и программы</p>
                    </div>
                    <div className='flex-column align-center index__four-card'>
                        <img className='index__people-image mb-30' src={images.indexCafe} alt="indexCafe" />
                        <h6 className='strong-text mb-10'>Несколько видов терапий</h6>
                        <p className='index__card-text'>Вы можете вести как индивидуальную,
                            так парную и групповую терапию
                            одновременно</p>
                    </div>
                    <div className='flex-column align-center index__four-card'>
                        <img className='index__people-image mb-30' src={images.indexGraphics} alt="indexGraphics" />
                        <h6 className='strong-text mb-10'>Расширенная статистика</h6>
                        <p className='index__card-text'>Информация о количестве
                            проведённых/отменённых
                            сессиях по конкретному виду терапии или
                            по всем сразу, а также по сессиям с клиентами</p>
                    </div>
                    <div className='flex-column align-center index__four-card'>
                        <img className='index__people-image mb-30' src={images.indexCalendar} alt="indexCalendar" />
                        <h6 className='strong-text mb-10'>Интеллектуальный календарь</h6>
                        <p className='index__card-text'>Можно быстро назначить или убрать свободное время и проверить кем заняты конкретные часы</p>
                    </div>

                </div>
            </div>
            <h2 className='mb-60 second-header'>Как это работает?</h2>
            <div className='flex-row mb-100'>
                <img className='number-image index__numbers-between' src={images.firstNumber} alt="1png" />
                <div>
                    <h5 className='mb-20 strong-text'>Регистрируйтесь</h5>
                    <div className='index__data_person'>
                        <p className='data-square-grey'>Мельников</p>
                        <p className='data-square-grey'>Алексей</p>
                        <p className='data-square-grey'>12.05.1995</p>
                    </div>
                    <div className='index__data_person'>
                        <p className='data-square-grey'>melnikov96@gmail.com</p>
                        <p className='data-square-grey'>+7 (900) 123-45-67</p>
                    </div>
                </div>
            </div>
            <div className='flex-row content-right mb-100'>
                <div className='index__numbers-between'>
                    <h5 className='strong-text align-right mr-20'>Проводите удобные видеовстречи</h5>
                    <img style={{ maxWidth: '880px' }} src={images.callImage} alt="callImage" />
                </div>
                <img className='number-image' src={images.secondNumber} alt="2png" /></div>
            <div className='flex-row mb-100'>
                <img className='number-image index__numbers-between' src={images.thirdNumber} alt="3png" />
                <div className='flex-column'>
                    <h5 className='mb-30 strong-text'>Следите за количеством сессий и подробной статистикой</h5>
                    <div className='index__row_column'>
                        <div className='back-color-shine-whte px-28 py-13 card-margin flex-row card-class'>
                            <div className='flex-column mr-50'>
                                <h6 className='color-black mb-10'>Личная терапия</h6>
                                <p className='card-black-numbers mb-10'>15 <span className='color-grey font-20'>сессий</span></p>
                                <p className='color-grey'>за текущий месяц</p>
                            </div>
                            <div className='card-class height-fit'>
                                <img src={images.iconUser} alt="iconUser" className='icon-person' />
                            </div>
                        </div>
                        <div className='back-color-shine-whte px-28 py-13 card-margin flex-row card-class'>
                            <div className='flex-column mr-50'>
                                <h6 className='color-black mb-10'>Парная терапия</h6>
                                <p className='card-black-numbers mb-10'>7 <span className='color-grey font-20'>сессий</span></p>
                                <p className='color-grey'>за текущий месяц</p>
                            </div>
                            <div className='card-class height-fit'>
                                <img src={images.iconPair} alt="iconPair" className='icon-person' />
                            </div>
                        </div>
                        <div className='back-color-shine-whte px-28 py-13 card-margin flex-row card-class'>
                            <div className='flex-column mr-50'>
                                <h6 className='color-black mx-28 mb-10'>Групповая терапия</h6>
                                <p className='card-black-numbers mb-10'>10 <span className='color-grey font-20'>сессий</span></p>
                                <p className='color-grey'>за текущий месяц</p>
                            </div>
                            <div className='card-class height-fit'>
                                <img src={images.iconGroup} alt="iconGroup" className='icon-person' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-row content-right mb-100'>
                <div className='index__numbers-between'>
                    <h5 className='align-right strong-text'>Выборочно просматривайте список клиентов</h5>
                    <img style={{ maxWidth: '1073px' }} src={images.imageGraph} alt="imageGraph" />
                </div>
                <img className='number-image' src={images.fouthNumber} alt="4png" />
            </div>
            <div className='fly-class'>
                <h2 className='mb-60 second-header'>Наши ценности</h2>

                <div className='index__five-cards mb-20'>
                    <div className='back-color-shine-whte card-class card-margin align-center'><div className='icons-content'><img className='icons-images mb-30' src={images.qualityIcon} alt="qualityIcon" /><p className='strong-text'>Качество</p></div></div>
                    <div className='back-color-shine-whte card-class card-margin align-center'><div className='icons-content'><img className='icons-images mb-30' src={images.analyticImage} alt="analyticImage" /><p className='strong-text'>Системная аналитика</p></div></div>
                    <div className='back-color-shine-whte card-class align-center'><div className='icons-content'><img className='icons-images mb-30' src={images.hideIcon} alt="hideIcon" /><p className='strong-text'>Конфиденциальность</p></div></div>
                </div>
                <div className='index__five-cards'>
                    <div className='back-color-shine-whte card-class card-margin align-center'><div className='icons-content'><img className='icons-images mb-30' src={images.starsIcon} alt="starsIcon" /><p className='strong-text'>Легкость в использовании</p></div></div>
                    <div className='back-color-shine-whte card-class align-center'><div className='icons-content'><img className='icons-images mb-30' src={images.heartIcon} alt="heartIcon" /><p className='strong-text'>Прозрачность</p></div></div>
                </div>
            </div>
            <div className='bottom-class align-center mt-100'>
                <div className='py-60'>
                    <h2 className='third-header white-text mb-20'>Не знаете с чего начать?</h2>
                    <button className='profile__button button button-index white-button'>Зарегистрируйтесь</button>
                </div></div>
        </div>
    )
}

export default Index;