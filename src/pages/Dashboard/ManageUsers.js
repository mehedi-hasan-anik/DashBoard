import React, { useContext } from 'react';
import { useAllUsers } from './Dashboard';
import './ManageUsers.css';

const ManageUsers = () => {
    const { users, setUsers, handleDeleteUser } = useContext(useAllUsers);

    // Update user info
    const handleUpdate = id => {
        let user = users?.find(user => user.id === id);

        const name = prompt('Name');
        const email = prompt('Email');
        const phone = prompt('Phone');
        const website = prompt('Website');

        const updatedUser = {
            id: id,
            name: name ? name : user?.name,
            email: email ? email : user?.email,
            phone: phone ? phone : user?.phone,
            website: website ? website : user?.website
        }

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(updatedUser)
        })
            .then((res) => res.json())
            .then((result) => {
                const allUsers = users?.filter(user => user.id !== id);
                allUsers.push(updatedUser);
                setUsers(previous => allUsers);
            });

    }

    return (
        <table>
            <caption>All users: {users.length}</caption>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">website</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {users?.map(({ id, name, email, phone, website }) =>
                    <tr key={id}>
                        <td data-label>{name}</td>
                        <td data-label>{email}</td>
                        <td data-label>{phone}</td>
                        <td data-label>{website}</td>
                        <td data-label style={{ display: 'flex' }}>
                            <button onClick={() => handleUpdate(id)}
                                className="btn btn-delete">
                                <span className="mdi mdi-delete mdi-24px"></span>
                                <span className="mdi mdi-delete-empty mdi-24px"></span>
                                <span>Update</span>
                            </button>
                            <button onClick={() => handleDeleteUser(id)}
                                className="btn btn-delete">
                                <span className="mdi mdi-delete mdi-24px"></span>
                                <span className="mdi mdi-delete-empty mdi-24px"></span>
                                <span>Delete</span>
                            </button>
                        </td>
                    </tr>)}
            </tbody>
        </table>
    );
};

export default ManageUsers;