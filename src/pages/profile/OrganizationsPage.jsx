import './profile.css'
import Menu from './../../components/menu/Menu'
import Organizations from './../../components/organizations/Organizations'

function OrganizationsPage() {
    return (
        <div className="page width-page-profile">
            <div className="page__row">
                <div className="page__menu">
                    <Menu />
                </div>
                <div className="page__content">
                    <Organizations />
                </div>
            </div>
        </div>
    )
}

export default OrganizationsPage;