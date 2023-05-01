import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/logo.png';
import './Header.css';
import Home from '../Pages/Home/Home';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>News</Link></li>
                            <li><Link>Destination</Link></li>
                            <li><Link>Blog</Link></li>
                            <li><Link>Contact</Link></li>
                        </ul>
                    </div>
                    <Link to='/'>
                        <img className=' h-10 w-25 text-white' src={logo} />
                    </Link>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered bg-transparent" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link>News</Link></li>
                        <li><Link>Destination</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login' className="btn bg-yellow-600 text-black hover:bg-yellow-400">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;