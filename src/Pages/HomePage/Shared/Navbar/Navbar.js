import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../../../Images/logo1.png';

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>DashBoard</a></li>
                            <li><a>Review</a></li>
                            <li><a>My Portfolio</a></li>
                            <li><a>Login</a></li>
                            <li><a>Sign Up</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">
                        <img src={logo1} alt="" />
                    </a>
                </div>
                <div class="navbar-center hidden lg:flex font-bold">
                    <ul class="menu menu-horizontal p-0">

                        
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/dashboard">DashBoard</Link></li>
                        <li><Link to="/review">Review</Link></li>
                        <li><Link to="/portfolio">My Portfolio</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signUp">Sign Up</Link></li>


                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;