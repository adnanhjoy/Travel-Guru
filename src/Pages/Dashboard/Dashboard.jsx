import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoxBazar from '../CoxBazar/CoxBazar';

const Dashboard = () => {
    const destinations = useLoaderData();
    return (
        <div className='w-11/12 mx-auto'>
            <h1>Welcome to cox bazar</h1>
            <div className='grid md:grid-cols-2'>
                <div className='flex flex-col gap-5 w-10/12'>
                    {
                        destinations.map(destination => <CoxBazar
                            key={destination.id}
                            destination={destination}
                        ></CoxBazar>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;