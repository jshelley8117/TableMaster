import React from 'react';
import '../styles/Admin.css';
import { useState, useEffect } from "react";
import useFetch from '../useFetch';
import axios from 'axios';
import BasicTable from './AdminTableList.jsx';
import BasicUserTable from './AdminUserList.jsx';
import { useSelector } from "react-redux";


const Admin = () => {
    const user = useSelector((state) => state.user.currentUser);

    const BASE_URL = 'http://localhost:5000/api';
    const [users, setUsers] = useState();
    const [userCount, setUserCount] = useState(0);

    const { data: tables} = useFetch('http://localhost:5000/api/tables');

    useEffect( () =>{
        try {
            axios.get(`${BASE_URL}/user`, { 
                headers: {
                    token: `Bearer ${user.accessToken}`
                }
            })
            .then((res) => {
                if (res.status !== 200) {
                    throw Error("Could not fetch the data for that resource.");
                }
                return res.data;
            })
            .then((data) => {
                setUsers(data);
            })
        } catch (errors) {
            console.error(errors);
        }

    }, [userCount]);

    console.log(users);
    console.log(tables);
    // const { data: users, Pending, err } = useFetch('http://localhost:5000/api/user');

    //console.log(tables);
    //console.log(users);

    return (
        <div id="Admin-Dashboard" >
            <div id="Left-side">
                <h1 className="title" >Users</h1>
                {users && <BasicUserTable users={users} currentUser={user} userCount={userCount} setUserCount={setUserCount}/>}
            </div>
            <div id="Right-side">
                <h1 className='title'>Tables</h1>
                {tables && <BasicTable tables={tables} currentUser={user}/> }
            </div>
        </div>
        
    )

}

export default Admin;