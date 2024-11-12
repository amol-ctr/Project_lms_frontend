import React, { useState } from 'react';
import person from './../../src/assets/img/person.png';
import email from './../../src/assets/img/email.png';
import password from './../../src/assets/img/password.png';
import twitter from './../../src/assets/img/twitter_icon.png';
import facebook from './../../src/assets/img/facebook_icon.png';
import github from './../../src/assets/img/github.png';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from "react-router-dom";
import './Signup.css';

function Signup() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,  // Keep the previous state, and only update the current field
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents form reloading
        try {
            const response = await fetch(`/api2/person/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user) // Send user data to backend
            });
            
            const data = await response.json(); // Parse the response

            if (response.ok) {
                // Assuming the token comes back in the response as data.token
                var token = data.token; 
                // Store the token in localStorage or sessionStorage
                localStorage.setItem('authToken', token);

                alert('Registration Successful!');
                navigate('/'); // Redirect to the home page or login after successful signup
            } else {
                // Handle errors here
                alert(data.message || 'Registration failed!');
            }
        } catch (err) {
            console.log(err);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className='container2 bg-slate-400'>
            <div className='header'>
                <div className='text'>SIGN UP</div>
            </div>

            <form onSubmit={handleSubmit} id="registerForm">
                <div className='inputs'>
                    <label htmlFor='name' className='ml-20'>Username</label>
                    <div className='input'>
                        <img src={person} alt="" />
                        <input autoComplete='off' onChange={handleInput} type="text" placeholder='Type your name' name='name' id='name' value={user.name} required />
                    </div>

                    <label htmlFor='email' className='ml-20'>Email</label>
                    <div className='input'>
                        <img src={email} alt="" />
                        <input autoComplete='off' onChange={handleInput} type="email" placeholder='Email Id' name='email' id='email' value={user.email} required />
                    </div>

                    <label htmlFor='password' className='ml-20'>Password</label>
                    <div className='input'>
                        <img src={password} alt="" />
                        <input autoComplete='off' onChange={handleInput} type="password" placeholder='Type your password' name='password' id='password' value={user.password} required />
                    </div>
                </div>

                <button type='submit' className='submit2'>Submit</button>

                <div>
                    <p align="center">Or Signup using:</p>
                    <span className='social_media_icons'>
                        <a href="https://www.twitter.com">
                            <img src={twitter} width="40px" height="40px" alt="" />
                        </a>
                        <a href="https://www.facebook.com">
                            <img src={facebook} width="40px" height="40px" alt="" />
                        </a>
                        <a href="https://www.github.com">
                            <img src={github} width="40px" height="40px" alt="" />
                        </a>
                    </span>

                    <br />
                    <center>
                        <Link to='/login' className=' cursor-pointer font-extrabold underline hover:underline text-xl hover:text-2xl'>LOGIN</Link>
                    </center>
                </div>
            </form>
        </div>
    );
}

export default Signup;
