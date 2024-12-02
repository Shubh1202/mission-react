import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash  } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

    let [isHidePassword, hideShowPassword] = useState(true)

    return (
        <div className="container mx-auto p-4">
            <div className='flex items-center justify-center'>
                <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-md'>
                    <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Welcome Back</h2>
                    <p className="text-center text-gray-500 mb-8">Please sign in to your account</p>
                    <form action="#" method="POST">

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" required />
                        </div>


                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                            <div className='relative'>
                                <input type={isHidePassword ? 'password' : 'text'} id="password" name="password" className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required />
                                <button type='button' onClick={() => hideShowPassword(!isHidePassword)} className='absolute top-0 right-0 py-3 px-4 flex items-center text-gray-500 hover:cursor-pointer hover:text-blue-500 rounded-lg'>
                                    {isHidePassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                                </button>

                            </div>
                        </div>


                        <div className="flex items-center justify-between mb-6">
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox text-blue-500" />
                                <span className="ml-2 text-gray-600 text-sm">Remember Me</span>
                            </label>
                            <a href="/" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-300">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login