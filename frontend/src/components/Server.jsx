import React from 'react';
import {} from '../styles/Server.styles.jsx'
import useFetch from '../useFetch';
import ServerTableList from './ServerTableList.jsx';
import axios from 'axios';

// Creating what the Server will see specifically
const Server = () => {
    // Call the table object and filter it for the servers view
    const { data: tables, isPending, error } = useFetch('http://localhost:5000/api/table');

    const onAppetizer = (tableId) => {
        try {
            axios.put(`http://localhost:5000/api/tables/${tableId}`, {
                status: 'Appetizer'
            })
            console.log("Table appetizer!")
        }
        catch(err) {
            console.err("Error updating table status: ", err)
        }
    }

    const onMainCourse = (tableId) => {
        try {
            axios.put(`http://localhost:5000/api/tables/${tableId}`, {
                status: 'Main Course'
            })
            console.log("Table main course!")
        }
        catch(err) {
            console.err("Error updating table status: ", err)
        }
    }

    const onAwaitingPayment = (tableId) => {
        try {
            axios.put(`http://localhost:5000/api/tables/${tableId}`, {
                status: 'Awaiting Payment'
            })
            console.log("Table awaiting payment!")
        }
        catch(err) {
            console.err("Error updating table status: ", err)
        }
    }

    const onAwaitingClean = (tableId) => {
        try {
            axios.put(`http://localhost:5000/api/tables/${tableId}`, {
                status: 'Needs to be cleaned'
            })
            console.log("Table awaiting clean!")
        }
        catch(err) {
            console.err("Error updating table status: ", err)
        }
    }

    return (
        <div>
            <h1 style={{ marginLeft: '20px'}}>Welcome, Server!</h1>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { tables && <ServerTableList tables={tables} onAppetizer={onAppetizer} 
            onMainCourse={onMainCourse} onAwaitingPayment={onAwaitingPayment} onAwaitingClean={onAwaitingClean} /> }
        </div>
    )
}

export default Server