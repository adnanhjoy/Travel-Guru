import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../others/Hooks/useTitle';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    useTitle('Register | ')

    const handleSubmitRegister = event => {
        event.preventDefault();
        const form = event.target;
        const fName = form.fname.value;
        const lName = form.lname.value;
        const name = fName + ' ' + lName;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }

    return (
        <div className='min-h-screen'>

            <form onSubmit={handleSubmitRegister} className='bg-white w-1/2 p-5 rounded m-auto mt-10 border'>
                <h1 className='text-center text-3xl my-5'>Sign Up</h1>
                <div className='mt-4'>
                    <input className='bg-transparent  h-10 w-full rounded border-b-2 text-black p-1' type="text" placeholder='First Name' name='fname' />
                </div>
                <div className='mt-4'>
                    <input className='bg-transparent  h-10 w-full rounded border-b-2 text-black p-1' type="text" placeholder='Last Name' name='lname' />
                </div>
                <div className='mt-4'>
                    <input className='bg-transparent  h-10 w-full rounded border-b-2 text-black p-1' type="text" placeholder='Email' name='email' />
                </div>
                <div className='mt-4'>
                    <input className='bg-transparent  h-10 w-full rounded border-b-2 text-black p-1' type="password" placeholder='Password' name='password' />
                </div>
                <div className='flex justify-center'>
                    <button className='bg-yellow-600 w-1/4 text-black py-4 rounded hover:bg-yellow-400 mt-7'>Signup</button>
                </div>
                <p className='my-10 text-black'>Already Have an Account ? <Link className=' text-blue-800 hover:underline hover:text-purple-800' to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;