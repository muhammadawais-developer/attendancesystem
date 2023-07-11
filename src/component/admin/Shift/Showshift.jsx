import React,{useState, useEffect} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AuthUser from '../../AuthUser'

const Showshift = () => {

  const [shifts, setShifts] = useState([]); // State to store the fetched data

  const {token} = AuthUser()


  useEffect(() => {
    // Fetch data from the API
    axios.get('https://crm.businesswayz.com/public/api/admin/shift/show',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })
      .then(response => {
        // console.log(response.data.shifts)
        setShifts(response.data.shifts); // Update the data state with the fetched data
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);


  return (
    <>
    <Header/>
    <div className="p-2 sm:ml-[18rem] mx-[2rem] ">
    <div className='grid md:grid-cols-2'>
        <div>
        <h1 className='text-3xl mt-2' >Shift</h1>
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
          Shift
        </a>
      </div>
    </li>
  </ol>
</nav>
        </div>
        <div>
            <Link to='/dashboard/admin/Addshift' className='flex justify-end items-center mt-2' >
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add New</button>
            </Link>
        </div>
    </div>

    <div className="relative overflow-x-auto">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Shift name
        </th>
        <th scope="col" className="px-6 py-3">
          Time_From
        </th>
        <th scope="col" className="px-6 py-3">
          Time_To
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
    {shifts.map((item) => (
            <tr key={item.id}>
            <td
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {item.name}
        </td>
        <td className="px-6 py-4">{item.time_from}</td>
        <td className="px-6 py-4">{item.time_to}</td>
        <td>
            <div className='ml-8' >
                <Link to="/dashboard/admin/Editshift" > Edit </Link>
                {/* <Link className='mx-[1rem]'> Delete </Link> */}
            </div>
        </td>
            </tr>
          ))}
    
    </tbody>
  </table>
</div>
</div>
<div>
    {/* <Footer /> */}
</div>
    </>
  )
}

export default Showshift