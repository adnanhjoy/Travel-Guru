import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useTitle from '../../others/Hooks/useTitle';

const Booking = () => {
    const [date, setDate] = useState();
    const [error, setError] = useState();
    useTitle('Booking | ')

    const dateHandler = event => {
        setDate(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const origin = form.origin.value;
        const destination = form.destination.value;

        if(origin === ""){
            setError('Please Select the origin')
        }
        console.log(origin, destination)
    }

    return (
        <div className='header-bg'>
            <div className='hero min-h-screen'>
                <div className="hero-content flex-col lg:flex-row">
                    <div className=' w-3/4'>
                        <h1 className='text-7xl text-white'>Cox's bazar</h1>
                        <p className='my-10 text-white'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <button className=' bg-yellow-600 py-3 px-7 text-black rounded flex items-center'><span className='me-2'>Booking</span><FaArrowRight /></button>
                    </div>

                    <form onSubmit={handleSubmit} className='bg-white w-1/2 p-5 rounded'>
                        <div className='mt-4'>
                            <label className='block text-black'>Origin</label>
                            <input className=' bg-slate-200 h-10 w-full rounded text-black p-1' type="text" name='origin' required/>
                            <p>{error}</p>
                        </div>
                        <div className='mt-4'>
                            <label className='block text-black'>Destination</label>
                            <input className=' bg-slate-200 h-10 w-full rounded text-black p-1' type="text" name='destination' required/>
                        </div>
                        <div className='flex justify-between gap-3'>
                            <div className='mt-4'>
                                <label className='block text-black'>Form</label>
                                <div className='flex items-center bg-slate-200 rounded'>
                                    <input onChange={dateHandler} className=' bg-slate-200 h-10 w-full rounded text-black p-1' type="date" />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label className='block text-black'>To</label>
                                <div className='flex items-center bg-slate-200 rounded'>
                                    <input className=' bg-slate-200 h-10 w-full rounded text-black p-1' type="date" />

                                </div>
                            </div>
                        </div>
                        <Link to='/dashboard'>
                            <button className='bg-yellow-600 w-full text-black py-5 rounded hover:bg-yellow-400 mt-7'>Start Booking</button>
                        </Link>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default Booking;





