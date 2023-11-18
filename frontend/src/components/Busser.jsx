import React from 'react';
import {} from '../styles/Busser.styles.jsx'
import BusserTableList from './BusserTableList.jsx';
import useFetch from '../useFetch';
import axios from 'axios';

// Creating what the Busser will see specifically
const Busser = () => {
    // Fetch the table object and filter it for the bussers view
    const { data: tables, isPending, error } = useFetch('http://localhost:5000/api/table');

    const onClean = (tableId) => {
        try {
            axios.put(`http://localhost:5000/api/table/${tableId}`, {
                status: 'Open'
            })
            console.log("Table cleaned!")
        } catch(err) {
            console.err("Error updating table status: ", err)
        }
    }

    return (
        <div>
            <h1 style={{ marginLeft: '20px'}}>Welcome, Busser!</h1>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { tables && <BusserTableList tables={tables} onClean={onClean} /> }
        </div>
    )
}

export default Busser