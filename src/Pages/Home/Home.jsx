import React from 'react';
import item1 from '../../assets/images/Sajek.png';
import item2 from '../../assets/images/Sreemongol.png';
import item3 from '../../assets/images/sundorbon.png';
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    return (
        <div>
            <div className='hero'>
                <div className="hero-content flex-col lg:flex-row">
                    <div className=' w-3/4'>
                        <h1 className='text-7xl'>Cox's bazar</h1>
                        <p className='my-10'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <button className=' bg-yellow-600 py-3 px-7 text-black rounded flex items-center'><span className='me-2'>Booking</span><FaArrowRight/></button>
                    </div>
                    <div className="carousel w-full">
                        <div className="carousel rounded-box">
                            <div id='item1' className="carousel-item me-10">
                                <img className=' h-96 w-52' src={item1} alt="Burger" />
                            </div>
                            <div id='item2' className="carousel-item me-10">
                                <img className=' h-96 w-52' src={item2} alt="Burger" />
                            </div>
                            <div id='item3' className="carousel-item me-10">
                                <img className=' h-96 w-52' src={item3} alt="Burger" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Home;