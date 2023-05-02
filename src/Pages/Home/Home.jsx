import React, { useState } from 'react';
import item1 from '../../assets/images/Sajek.png';
import item2 from '../../assets/images/Sreemongol.png';
import item3 from '../../assets/images/sundorbon.png';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {


    return (
        <div className='header-bg'>
            <div className='hero min-h-screen'>
                <div className="hero-content flex-col lg:flex-row">
                    <div className=' w-3/4'>
                        <h1 className='text-7xl text-white'>Cox's bazar</h1>
                        <p className='my-10 text-white'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <Link to='/booking'>
                            <button className=' bg-yellow-600 py-3 px-7 text-black rounded flex items-center'><span className='me-2'>Booking</span><FaArrowRight /></button>
                        </Link>
                    </div>

                    <div className="carousel w-full">
                        <div className="carousel rounded-box">
                            <div className="carousel-item me-10 relative text-center text-white">
                                <h3 className=' absolute bottom-5 text-3xl w-full me-auto'>Cox's Bazar</h3>
                                <Link to='/booking'>
                                    <img className=' cursor-pointer hover:border hover:border-yellow-600 rounded-2xl h-96 w-52' src={item1} alt="Burger" />
                                </Link>
                            </div>
                            <div className="carousel-item me-10 relative text-center text-white">
                                <h3 className=' absolute bottom-5 text-3xl w-full me-auto'>Sreemangal</h3>
                                <Link to='/booking'>
                                    <img className=' cursor-pointer hover:border hover:border-yellow-600 rounded-2xl h-96 w-52' src={item2} alt="Burger" />
                                </Link>
                            </div>
                            <div className="carousel-item me-10 relative text-center text-white">
                                <h3 className=' absolute bottom-5 text-3xl w-full me-auto'>Sundarbans</h3>
                                <Link to='/booking'>
                                    <img className=' cursor-pointer hover:border hover:border-yellow-600 rounded-2xl h-96 w-52' src={item3} alt="Burger" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;