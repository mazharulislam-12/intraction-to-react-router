import React from 'react';
import './User.css'
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, email, phone, website} = user
    return (
        <div className='container'>
            <h2>{name}</h2>
            <p> Phone: {phone} </p>
            <p>Email: {email}</p>
            <p>Website: {website} </p>
            <Link to={`/user/${id}`}>Show Details</Link>
            
        </div>
    );
};

export default User;