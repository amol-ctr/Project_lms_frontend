import React, { useState, useEffect } from 'react';
import './Profile.css';  // Assuming you will create the CSS file for styling

function Profile() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    var token = localStorage.getItem('authToken');
    
    useEffect(() => {
        fetch('/api2/person/profile', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setId(data.id);
            setName(data.name || "");  // Assuming the API returns firstName
            // setLastName(data.lastName || "");    // Assuming the API returns lastName
            setEmail(data.email);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <h2>Loading profile...</h2>;
    }

    if (error) {
        return <p>Error fetching data: {error}</p>;
    }

    return (
        <div className="profile-container mt-20">
            <h1 className='title'>Profile Settings</h1>

            <form className="profile-form">
                <div className="form-group">
                    <label>ID</label>
                    <input type="text" value={id} readOnly className="input-field" />
                </div>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={name} readOnly className="input-field" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" value={email} readOnly className="input-field" />
                </div>
            </form>
        </div>
    );
}

export default Profile;
