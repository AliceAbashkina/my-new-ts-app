import './clients.css'
import React from 'react';
import ClientsTable from './../../components/clients//ClientsTable';

function ClientsPage() {
    return (
        <div className="page__content">
            <ClientsTable className="mb-1" data="dataPersonTherapy" title="Личная терапия" type={1} />
            <ClientsTable className="mb-1" data="dataPairTherapy" title="Парная терапия" type={2} />
            <ClientsTable data="dataGroupTherapy" title="Групповая терапия" type={3}/>
        </div>
    )
}
export default ClientsPage;