import './profile.css'
import Menu from './../../components/menu/Menu'
import Education from './../../components/education/Education'

function EducationPage() {
    return (
        <div className="page width-page-profile">
            <div className="page__row">
                <div className="page__menu">
                    <Menu />
                </div>
                <div className="page__content">
                    <Education />
                </div>
            </div>
        </div>
    )
}

export default EducationPage;