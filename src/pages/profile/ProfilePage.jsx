import './profile.css'
import Menu from './../../components/menu/Menu'
import Profile from './../../components/profile/Profile'

function ProfilePage() {
    return (
        <>
            <div className="page__menu_mobile">
                <Menu />
            </div>
            <div className="page width-page-profile">

                <div className="page__row">
                    <div className="page__menu">
                        <Menu />
                    </div>
                    <div className="page__content">
                        <Profile />
                    </div>
                </div>
            </div></>
    )
}

export default ProfilePage;