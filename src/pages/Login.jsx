import React, { useState } from 'react';
// import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

import AuthUser from '../component/AuthUser';

const Login = () => {

  const {http,setToken} = AuthUser();

  const [email,setEmail] = useState("");

  const [password, setPassword] = useState("");

  // const navigate = useNavigate();

  const handlelogin = (e) => {
      e.preventDefault();
      http.post('/login',{email:email, password:password}).then((res)=>{
        setToken(res.data.user,res.data.token);
        alert('succesful login');
      })
  };

  return (
    <>
    <div>
        <form className='flex flex-col justify-center items-center min-h-screen' >
        <h1 className='text-xl font-semibold' >Attedences Login</h1><br/>
  <div className="mb-6">
    <label
      htmlFor="email"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Your email
    </label>
    <input
      type="email"
      id="email"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="name@flowbite.com"
      required=""
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="mb-6">
    <label
      htmlFor="password"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Your password
    </label>
    <input
      type="password"
      id="password"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required=""
      placeholder='***********'
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
 
  <button
    type="submit"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    onClick={handlelogin}
  >
    Submit
  </button>
</form>

    </div>
    </>
  )
}

export default Login