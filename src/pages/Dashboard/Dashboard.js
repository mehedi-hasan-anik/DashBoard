import React, { createContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

export const useAllUsers = createContext();

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    // Fetch all users
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(result => setUsers(result))
    }, [])

    // Delete individual user
    const handleDeleteUser = id => {
        let newUsers = [];
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(result => {
                const filteredUsers = users?.filter(user => user.id !== id);
                newUsers = filteredUsers;
                setUsers(previous => newUsers);
                alert('Deleted successfully');
            })

    }
    return (
        <useAllUsers.Provider value={{ users, setUsers, handleDeleteUser }}>
            <Sidebar />
        </useAllUsers.Provider>
    );
};

export default Dashboard;