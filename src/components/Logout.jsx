import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        
        if (!token) {
            alert('You have already been logged out');
        } else {
            // Remove the auth token and other relevant data from localStorage
            localStorage.removeItem('authToken');
            
            // Optionally clear other user data from localStorage if stored
            // localStorage.removeItem('userData');
            
            // Show a logout message to the user
            alert('You have logged out successfully!');
        }
        
        // Redirect the user to the login page or home
        navigate('/');
        
    }, [navigate]); // The empty dependency array ensures the effect runs only once when the component mounts

    return null; // No UI is rendered, just the side-effect (logout)
}

export default Logout;
