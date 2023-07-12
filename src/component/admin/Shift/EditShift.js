import React,{ useState } from 'react'
import Header from '../Header'
import { Link } from "react-router-dom";
import { TimePicker } from "antd";

const EditShift = () => {

   const [name, setName] = useState('')

  const [timefrom, setTimeFrom] = useState(null);
  const onChangetimefrom = (e,time) => {
    setTimeFrom(time);
  };
  const [timeto, setTimeTo] = useState(null);
  const onChangetimeto = (e,time) => {
    setTimeTo(time);
  };

  return (
    <>
    <Header />
    <div className="p-2 sm:ml-[18rem] mx-[2rem] ">
      <h1 className="text-3xl mt-2">EditShift</h1>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 mt-2">
          <li className="inline-flex items-center">
            <Link
              to="/dashboard/admin"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <a
                
                className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                EditShift
              </a>
            </div>
          </li>
        </ol>
      </nav>
      <div>
          <form>
            <div className="mt-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <input
                type="Name"
                className="bg-gray-50 w-[20rem] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name"
                required=""
                onChange={(e) => setName(e.target.value) }
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="Time_From"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Time_From
              </label>
              <TimePicker
                className="w-[20rem]"
                value={timefrom}
                onChange={onChangetimefrom}
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="Time_From"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Time_To
              </label>
              <TimePicker
                className="w-[20rem]"
                value={timeto}
                onChange={onChangetimeto}
              />
            </div>
            <div className="mt-6">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update
            </button>
            </div>
          </form>
        </div>
    </div>
  </>
  )
}

export default EditShift