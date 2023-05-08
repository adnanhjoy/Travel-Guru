import React from 'react';
import { FaStar } from 'react-icons/fa';

const CoxBazar = ({destination}) => {
    const {id, title, img, details, price, rating} = destination;
    return (
        <div>
            <div className='flex border p-5 rounded'>
                <img className=' h-36 me-3' src={img} alt="" />
                <div>
                    <h2 className='text-2xl'>{title}</h2>
                    <p className='my-1'>{details}</p>
                    <div className='flex justify-between'>
                        <p className='flex items-center'><span className=' text-warning'><FaStar/> </span><span>{rating}</span></p>
                        <p>$ {price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoxBazar;