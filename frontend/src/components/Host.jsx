import React from 'react';
import {} from '../styles/Host.styles.jsx'
import useFetch from '../useFetch';
import HostTableList from './HostTableList.jsx';

// Creating what the Host will see specifically
const Host = () => {
    // Call the table object and filter it for the hosts view
    const { data: tables, isPending, error } = useFetch('http://localhost:5000/api/table');
    return (
        <div>
            <h1 style={{ marginLeft: '20px'}}>Welcome, Host!</h1>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { tables && <HostTableList tables={tables} /> }
        </div>
    )
}

export default Host