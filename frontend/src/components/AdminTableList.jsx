import axios from 'axios';
import { useState } from "react";

export default function BasicTable({tables, currentUser}) {
    console.log(tables);
    const [tableLabel, setTableLabel] = useState();
    const [tableState, setTableState] = useState();
    const [tableSeatCount, setTableSeatCount] = useState();
    const [tableServer, setTableServer] = useState('');

    const updateTableLabel = (table, id) => {
        const tableLabel = document.getElementById(id).value;
        table.label = tableLabel;
        if (tableLabel){
            updateTable(table);
        }
    }
    const updateState = (table, id) => {
        const state = document.getElementById(id).value;
        table.state = state;
        if (state){
            if ( (state === 'Open') || (state === 'Occupied') || (state === 'Appetizer') || (state ==='Main Course') || (state === 'Awaiting Payment') || (state === 'Needs Cleaning')){
                updateTable(table);
            }
        }
    }
    const updateSeatCount = (table, id) => {
        let seatCount = document.getElementById(id).value;
        seatCount = Number.parseInt(seatCount);
        console.log(seatCount);
        if (Number.isInteger(seatCount)){
            table.seatCount = seatCount;
            console.log("input is an integer")
            if (seatCount){
                updateTable(table);
            }
        }
        

    }
    const updateServer = (table, id) => {
        const server = document.getElementById(id).value;
        table.server = server;
        if (server){
            updateTable(table);
        }

    }
    const deleteTable = (table) => {
        try {
            axios.delete(`http://localhost:5000/api/tables/${table._id}`, {
                user: {
                    username: currentUser.username,
                    email: currentUser.email,
                    password: currentUser.password,
                    role: currentUser.role,
                    secPassword: currentUser.secPassword,
                    profilePic: currentUser.profilePic,
                    isAdmin: currentUser.isAdmin
                },
                headers: {
                    token: `Bearer ${currentUser.accessToken}`
                },
            })
            .then((res) => {
                if (res.status !== 200) {
                    throw Error("Could not fetch the data for that resource.");
                }
                return res.data;
                })
            .catch((error) => {
                console.log(error);
            })
        } catch (errors) {
            console.error(errors);
        }
    }
    const updateTable = (table) => {
        try {
            axios.put(`http://localhost:5000/api/tables/${table._id}`, { 
                label: table.label,
                state: table.state,
                seatCount: table.seatCount,
                server: table.server
            })
            .then((res) => {
                if (res.status !== 200) {
                    throw Error("Could not fetch the data for that resource.");
                }
                return res.data;
                })
            .catch((error) => {
                console.log(error);
            })
        } catch (errors) {
            console.error(errors);
        }
    }
    const createTable = () => {
        if ((tableLabel) && (tableState) && (tableSeatCount)){
            try {
                axios.post(`http://localhost:5000/api/tables`,{ 
                    label: tableLabel,
                    state: tableState,
                    seatCount: tableSeatCount,
                    server: tableServer
                } , {
                    user: {
                        username: currentUser.username,
                        email: currentUser.email,
                        password: currentUser.password,
                        role: currentUser.role,
                        secPassword: currentUser.secPassword,
                        profilePic: currentUser.profilePic,
                        isAdmin: currentUser.isAdmin
                    },
                    headers: {
                        token: `Bearer ${currentUser.accessToken}`
                    },
                })
                .then((res) => {
                    if (res.status !== 200) {
                        throw Error("Could not fetch the data for that resource.");
                    }
                    return res.data;
                    })
                .catch((error) => {
                    console.log(error);
                })
            } catch (errors) {
                console.error(errors);
            }
        }
    }
    const handleTableState = (state) => {
        if (state){
            if ( (state === 'Open') || (state === 'Occupied') || (state === 'Appetizer') || (state ==='Main Course') || (state === 'Awaiting Payment') || (state === 'Needs Cleaning')){
                setTableState(state);
            }
        }
    }
    const handleTableSeatCount = (seatCount) => {
        seatCount = Number.parseInt(seatCount);
        setTableSeatCount(seatCount);
    }

    return(
        <div>
            <div className='validStates'>
                <p>Valid Table States:</p>
                <p>Open, Occupied, Appetizer, Main Course, Awaiting Payment, and Needs Cleaning</p>
            </div>
            {tables.map((table) => (
            <div  className="table" key={table.label}>
                <div className="tableLabel">
                <p>{table.label}</p>
                <input id={`id-${table._id}`} type="text" />
                <button onClick={ () => updateTableLabel(table, `id-${table._id}`)}>Update</button>
                </div>
                <div className="tableAttributes">
                    <div className="tableState">
                        <p style={{fontWeight: 'normal'}}>State: </p>
                        <p>{table.state}</p>
                        <input id={`tableid-${table._id}`} type="text" />
                        <button onClick={() => updateState(table, `tableid-${table._id}`)}>Update</button>
                    </div>
                    <div className="tableSeatCount">
                        <p style={{fontWeight: 'normal'}}>Seat Count: </p>
                        <p>{table.seatCount}</p>
                        <input id={`tableid-${table._id}-seatCount-${table.seatCount}`} type="text" />
                        <button onClick={() => updateSeatCount(table, `tableid-${table._id}-seatCount-${table.seatCount}`)}>Update</button>
                    </div>
                    <div className="tableServer">
                        <p style={{fontWeight: 'normal'}}>Server: </p>
                        <p>{table.server || 'No Server Assigned'}</p>
                        <input id={`tableid-${table._id}-server`}type="text" />
                        <button onClick={() => updateServer(table, `tableid-${table._id}-server`)}>Update</button>
                    </div>
                </div>
                <button onClick={() => deleteTable(table)} style={{backgroundColor: 'red',border: 'none', fontSize: '15px', fontWeight: 'bold'}}>Delete Table</button>
            </div>
    ))}
            <div className='CreateTable'>
            <div>
                <p>Table Label</p>
                <input type='text' onChange={(e) => setTableLabel(e.target.value)}></input>
            </div>
            <div>
                <p>Table State</p>
                <input type='text' onChange={(e) => handleTableState(e.target.value)}></input>
            </div>
            <div>
                <p>Table Seat Count</p>
                <input type='text' onChange={(e) => handleTableSeatCount(e.target.value)}></input>
            </div>
            <div>
                <p>Table Server</p>
                <input type='text' onChange={(e) => setTableServer(e.target.value)}></input>
            </div>
            <div>
            <button onClick={() => createTable()} style={{marginTop: '10px', color: 'white',backgroundColor: 'green',border: 'none', fontSize: '15px', fontWeight: 'bold'}}>Create</button>
            </div>
            </div>
        </div>
        
    );


}