import React from 'react';
import './User.css'

const User = ({user}) => {
    const {id, name, email, phone, website} = user
    return (
        <div className='container'>
            <h2>{name}</h2>
            <p> Phone: {phone} </p>
            <p>Email: {email}</p>
            <p>Website: {website} </p>
            
        </div>
    );
};

export default User;