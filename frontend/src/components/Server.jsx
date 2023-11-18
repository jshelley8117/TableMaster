import React from 'react';
import {} from '../styles/Server.styles.jsx'
import useFetch from '../useFetch';
import ServerTableList from './ServerTableList.jsx';

// Creating what the Server will see specifically
const Server = () => {
    // Call the table object and filter it for the servers view
    const { data: tables, isPending, error } = useFetch('http://localhost:5000/api/table');
    return (
        <div>
            <h1 style={{ marginLeft: '20px'}}>Welcome, Server!</h1>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { tables && <ServerTableList tables={tables} /> }
        </div>
    )
}

export default Server