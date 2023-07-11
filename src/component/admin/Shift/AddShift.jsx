import React, { useState } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
// import { TimePicker } from "antd";
import axios from "axios";
import AuthUser from "../../AuthUser";

const AddShift = () => {
  const {token} = AuthUser()
  const [name, setName] = useState("");
  const [time_from, setTime_From] = useState("");
  const [time_to, setTime_To] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create the request body object
    const data = {
      name: name,
      time_from: time_from,
      time_to: time_to,
    };
    console.log(data);

    // Make the API request using Axios
    axios
      .post("https://crm.businesswayz.com/public/api/admin/shift/create", data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Handle the response if needed
        console.log(response.data);
        alert("successful uploded");
      })
      .catch((error) => {
        // Handle the error if needed
        console.error(error);
      });
  };

  const timefrom = [
    "00:00",
    "00:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
    "24:00",
  ];
  const timeto = [
    "00:00",
    "00:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
    "24:00",
  ];

  return (
    <>
      <Header />
      <div className="p-2 sm:ml-[18rem] mx-[2rem] ">
        <h1 className="text-3xl mt-2">AddShift</h1>
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
                <a className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                  AddShift
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
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-6">
              <>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Time_From
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setTime_From(e.target.value)}
                >
                  <option  selected disabled>Select Time</option>
                  {timefrom.map((item,index) => (

                  <option value={item} key={index}>{item}</option>
                  ))}
                </select>
              </>
            </div>
            <div className="mt-6">
              <>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Time_To
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => setTime_To(e.target.value) }
                >
                  <option  selected disabled>Select Time</option>
                  {timeto.map((item,index) => (

                  <option value={item} key={index}>{item}</option>
                  ))}
                </select>
              </>
            </div>
           
            <div className="mt-6">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
          {name}
          <br/>
          {time_from}
          <br/>
          {time_to} 
         
        </div>
      </div>
    </>
  );
};

export default AddShift;
