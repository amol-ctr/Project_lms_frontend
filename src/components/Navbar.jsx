import React, { useState,useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    // Scroll to the hash section when the location changes
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1)); // Get the element by ID
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the element
            }
        }
    }, [location]); // Run the effect whenever the location changes

    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="flex-row">
                <Link to='/' className="btn btn-ghost text-xl">Solution Point</Link>
            </div>
            <div className=" flex-none font-semibold cursor-pointer">
                <div className=' ml-20 hover:underline'>
                    <Link to='/instructions'>Take Mock Test</Link>
                </div>
                <div className=' ml-20 hover:underline'>
                    <Link to='/#cards'>Featured PYQs</Link>
                </div>

                <div className=' ml-20 hover:underline'>
                    <Link to='/#cards2'>Recommended Books</Link>
                </div>
                
                <div className="flex-none">
                    
                    <div className="dropdown dropdown-end absolute right-1 top-2">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to='/profile' className="justify-between">
                                    Profile
                                    {/* <span className="badge">New</span> */}
                                </Link>
                            </li>
                            {/* <li><a>Settings</a></li> */}
                            <li><Link to='/logout'>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            );
}

            export default Navbar;
