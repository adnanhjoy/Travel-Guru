import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { signIn, googelSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmitLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
                navigate(from, {replace: true})
            })
            .catch(error => console.error(error))
    }

    const handleGoogle = () => {
        googelSignIn(googleProvider)
        .then(result => {
            result.user;
        })
        .catch(error => console.error(error))
    }

    return (
        <div className='min-h-screen'>

            <form onSubmit={handleSubmitLogin} className='bg-white w-1/2 p-5 rounded m-auto mt-10 border'>
                <h1 className='text-center text-3xl my-5'>Login</h1>
                <div className='mt-4'>
                    <input className='bg-transparent  h-10 w-full rounded border-b-2 text-black p-1' type="text" placeholder='Username & Email' name='email' />
                </div>
                <div className='mt-4'>
                    <input className='bg-transparent  h-10 w-full rounded border-b-2 text-black p-1' type="password" placeholder='Password' name='password' />
                </div>
                <div className='flex justify-center'>
                    <button className='bg-yellow-600 w-1/4 text-black py-4 rounded hover:bg-yellow-400 mt-7'>Login</button>
                </div>
                <p className='mt-10 mb-5 text-black'>Don't Have an Account ? <Link className=' text-blue-800 hover:underline hover:text-purple-800' to='/register'>Create a new account</Link></p>
                <div className='flex items-center gap-5 justify-center'>
                    <hr className='w-1/5 border border-gray' /> or <hr className='w-1/5 border border-gray' />
                </div>
                <div className='flex justify-center'>
                    <button onClick={handleGoogle} className=' btn bg-blue-500 w-5/12 text-white py-4 rounded hover:bg-blue-600 hover:text-white mt-7 items-center'> <FaGoogle /> <span className='ms-2'>Sign in with Google</span></button>
                </div>
            </form>
        </div>
    );
};

export default Login;