import './profile.css'
import Menu from './../../components/menu/Menu'
import Other from './../../components/other/Other'

function OtherPage() {
    return (
        <div className="page width-page-profile">
            <div className="page__row">
                <div className="page__menu">
                    <Menu />
                </div>
                <div className="page__content">
                    <Other />
                </div>
            </div>
        </div>
    )
}

export default OtherPage;