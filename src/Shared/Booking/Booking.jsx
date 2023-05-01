import React, { useState } from 'react';
import { FaRegCalendar } from 'react-icons/fa';

const Booking = () => {
    const [date, setDate] = useState();

    const dateHandler = event => {
        setDate(event.target.value)
    }

    return (
        <div className='bg-white w-1/2 p-5 rounded'>
            <div className='mt-4'>
                <label className='block text-black'>Origin</label>
                <input className=' bg-slate-200 h-10 w-full rounded text-black p-1' type="text" />
            </div>
            <div className='mt-4'>
                <label className='block text-black'>Destination</label>
                <input className=' bg-slate-200 h-10 w-full rounded text-black p-1' type="text" />
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
        </div>
    );
};

export default Booking;