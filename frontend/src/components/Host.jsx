import React from 'react';
import {} from '../styles/Host.styles.jsx'
import useFetch from '../useFetch';
import HostTableList from './HostTableList.jsx';
import axios from 'axios';

// Creating what the Host will see specifically
const Host = () => {
    // Call the table object and filter it for the hosts view
    const { data: tables, isPending, error } = useFetch('http://localhost:5000/api/tables');
    
    // host can remove a party from a table
    const onRemoveParty = (tableId) => {
        try {
            axios.put(`http://localhost:5000/api/tables/${tableId}`, {
                state: 'Open',
                seatCount: 0,
                server: ''
            })
            console.log("Table removed!");
            window.location.reload();
        }
        catch(err) {
            console.err("Error updating table status: ", err);
        }
    }

    const onOccupied = (tableId, insertSeatCount, insertServer) => {
        try {
            axios.put(`http://localhost:5000/api/tables/${tableId}`, {
                state: 'Occupied',
                seatCount: insertSeatCount,
                server: insertServer
            })
            console.log("Table occupied!");
            console.log(tableId);
            window.location.reload();
        }
        catch(err) {
            console.err("Error updating table status: ", err);
        }
    }

    return (
        <div>
            <h1 style={{ marginLeft: '20px'}}>Welcome, Host!</h1>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { tables && <HostTableList tables={tables} onRemoveParty={onRemoveParty} onOccupied={onOccupied} /> }
        </div>
    )
}

export default Host