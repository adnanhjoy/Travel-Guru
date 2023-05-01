import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='min-h-screen'>

            <form className='bg-white w-1/2 p-5 rounded m-auto mt-10 border'>
                <h1 className='text-center text-3xl my-5'>Login</h1>
                <div className='mt-4'>
                    <input className='bg-transparent  h-10 w-full rounded border-b-2 text-black p-1' type="text" placeholder='Username & Email' />
                </div>
                <div className='mt-4'>
                    <input className='bg-transparent  h-10 w-full rounded border-b-2 text-black p-1' type="password" placeholder='Password' />
                </div>
                <div className='flex justify-center'>
                    <button className='bg-yellow-600 w-1/4 text-black py-4 rounded hover:bg-yellow-400 mt-7'>Login</button>
                </div>
                <p className='my-10 text-black'>Don't Have an Account ? <Link className=' text-blue-800 hover:underline hover:text-purple-800' to='/register'>Create a new account</Link></p>
            </form>
        </div>
    );
};

export default Login;