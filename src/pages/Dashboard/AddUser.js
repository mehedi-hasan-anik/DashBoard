import React, { useContext, useState } from 'react';
import { useAllUsers } from './Dashboard';
import './AddUser.css';

const AddUser = () => {
    const { users, setUsers } = useContext(useAllUsers);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');

    // Add new user if does not exist
    const handleSubmit = event => {
        event.preventDefault()
        const user = {
            name: name,
            email: email,
            phone: phone,
            website: website,
            id: +id
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    let newUsers = users;
                    const existsUser = users?.find(usr => parseInt(usr.id) === parseInt(user.id));
                    if (!existsUser) {
                        newUsers.push(user)
                        setUsers(previous => newUsers);
                        alert('User added successfully')
                    } else {
                        alert('This id already has been taken')
                    }
                }
            })
    }

    return (
        <div className="box-wrapper">
            <div className="box">
                <h2> Add user</h2>
                <form id="form" onSubmit={handleSubmit}>
                    <div>
                        <input onChange={(e) => setId(e.target.value)} type="text" name="id" id="id" required />
                        <label>Id: </label>
                    </div>
                    <div>
                        <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" required />
                        <label>Name: </label>
                    </div>
                    <div>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" required />
                        <label>Email </label>
                    </div>
                    <div>
                        <input onChange={(e) => setPhone(e.target.value)} type="text" name="phone" required />
                        <label>Phone</label>
                    </div>
                    <div>
                        <input onChange={(e) => setWebsite(e.target.value)} type="text" name="website" required></input>
                        <label>Website</label>
                    </div>
                    <input id="submit" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AddUser;