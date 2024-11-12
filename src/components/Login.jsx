import React, { useState } from 'react'
import person from './../../src/assets/img/person.png'
import email from './../../src/assets/img/email.png'
import password from './../../src/assets/img/password.png'
import twitter from './../../src/assets/img/twitter_icon.png'
import facebook from './../../src/assets/img/facebook_icon.png'
import github from './../../src/assets/img/github.png'
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from "react-router-dom";
// import Forgot_password_page from './forgot_password_page'
// import { useNavigate } from 'react-router-dom'
// import './phone.css'
import './Signup.css'
import Signup from './Signup'

function Login() {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleInput = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        console.log(e);

        setUser({
            ...user,        // this ... operator is spread operator(makes sure all previous fields remain same except those updated)
            [key]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();     // makes sure form doesnt reload on submit
        console.log(user);
        try {
            
            var token = localStorage.getItem('authToken');
            const response = await fetch(`/api2/person/login`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            });
            // Clear any previously stored state before login
            localStorage.removeItem('answers');
            localStorage.removeItem('currentQuestionIndex');
            localStorage.removeItem('markedForReview');
            localStorage.removeItem('visitedQuestions');
            
            const data = await response.json(); // Parse the response
            // Assuming the token comes back in the response as data.token
            token = data.token; 
            if(!token){
                alert('Invalid credentials !');
            }
            else{

                localStorage.setItem('authToken', token);
                
                console.log(token);
                console.log(response);
                
                alert('Succesfully Logged in!');
                if(response)
                navigate('/');
            }
    
            // Store the token in localStorage or sessionStorage
        } 
        catch (err) {
            console.log(err);
            alert('Invalid credentials !');
        }

    }

    return (
        <div class='container2 bg-slate-400'>

            <div className=' header'>
                <div className=' text'>LOGIN</div>

            </div>


            <form onSubmit={handleSubmit} id="registerForm" action="/login" method="post" data-sb-form-api-token="API_TOKEN">
                <div className='inputs'>
                    <div>
                        <label htmlFor='email' className=' ml-20'>Email</label>
                        <div className='input'>
                            <img src={email} alt="" />
                            <input autoComplete='off' onChange={handleInput} type="email" placeholder='Email Id' name='email' id='email' value={user.email} required />
                            <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                            <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                        </div>
                    </div>


                    <label htmlFor='password' className=' ml-20'>Password</label>
                    <div className='input'>
                        <img src={password} alt="" />
                        <input autoComplete='off' onChange={handleInput} type="password" placeholder='Type your password' name='password' id='password' value={user.password} required />
                        <div class="invalid-feedback" data-sb-feedback="password:required">A password is required.</div>
                    </div>
                </div>


                {/* <div className='forgot-password'>
            <Link to="/forgot_password_page">Forgot Password?</Link>

        </div> */}

                <button type='submit' className='submit2'>Submit</button>
                <br />

                <div>

                    {/* <p align="center">Or {action=="LOGIN"?"Sign up":"Login"} using:</p>
        <p align="center" onClick={()=>setAction("LOGIN")}>LOGIN</p> */}

                </div>

                <div>
                    <p align="center">Or Signup using:</p>

                    <span class='social_media_icons'>

                        <a href="https://www.twitter.com">
                            <img src={twitter} width=" 40px" height="40px" alt="" />
                        </a>
                        <a href="https://www.facebook.com">
                            <img src={facebook} width=" 40px" height="40px" alt="" />
                        </a>
                        <a href="https://www.github.com">
                            <img src={github} width=" 40px" height="40px" alt="" />
                        </a>
                    </span>

                    <br />
                    <center>

                        <Link to='/register' className=' cursor-pointer font-extrabold underline text-xl hover:underline hover:text-2xl'>Signup</Link>
                    </center>
                    {/* <p align="center">Or {action=="LOGIN"?"Sign up":"Login"} using:</p>
          <p align="center" onClick={()=>setAction("SIGN UP")}>SIGN UP</p> */}
                </div>
            </form>

        </div>
    )
}

export default Login;
