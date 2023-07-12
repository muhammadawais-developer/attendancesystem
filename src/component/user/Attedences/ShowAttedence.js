import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import axios from 'axios';
import AuthUser from '../../AuthUser';

const ShowAttendance = () => {
  const [data, setData] = useState([]);
  const { token, user } = AuthUser();

  useEffect(() => {
    // Fetch data from the API
    axios
      .get(`https://crm.businesswayz.com/public/api/attendence/show/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        // console.log(response.data.data);
        setData(response.data.data); // Update the data state with the fetched data
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, [token, user.id]);

  return (
    <>
      <Header />
      <div className="p-2 sm:ml-[18rem] mx-[2rem]">
        <div className="grid md:grid-cols-2">
          <div>
            <h1 className="text-3xl mt-2">Attendances</h1>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3 mt-2">
                <li className="inline-flex items-center">
                  <Link
                    to="/dashboard/user"
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
                      Attendances
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Employee name
                </th>
                <th scope="col" className="px-6 py-3">
                  Employee Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Time From
                </th>
                <th scope="col" className="px-6 py-3">
                  Time To
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.user.name}
                  </td>
                  <td className="px-6 py-4">{item.user.email}</td>
                  <td className="px-6 py-4">{item.time_in}</td>
                  <td className="px-6 py-4">{item.time_out}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ShowAttendance;