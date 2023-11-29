import React from 'react';
import {} from '../styles/Host.styles.jsx'
import useFetch from '../useFetch';
import HostTableList from './HostTableList.jsx';
import axios from 'axios';

// Creating what the Host will see specifically
const Host = () => {
    // Call the table object and filter it for the hosts view
    const { data: tables, isPending, error } = useFetch('http://localhost:5000/api/tables');

     // host can update status to reserved and occupied
    const onReserve = (tableId) => {
        try {
            axios.put(`http://localhost:5000/api/tables/${tableId}`, {
                state: 'Reserved'
            })
            console.log("Table reserved!")
        }
        catch(err) {
            console.err("Error updating table status: ", err)
        }
    }

    const onOccupied = (tableId) => {
        try {
            axios.put(`http://localhost:5000/api/tables/${tableId}`, {
                state: 'Occupied'
            })
            console.log("Table occupied!")
        }
        catch(err) {
            console.err("Error updating table status: ", err)
        }
    }

    return (
        <div>
            <h1 style={{ marginLeft: '20px'}}>Welcome, Host!</h1>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { tables && <HostTableList tables={tables} onReserve={onReserve} onOccupied={onOccupied} /> }
        </div>
    )
}

export default Host