// import axios from "../../../api/axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from "../../AuthUser";
import Header from "../Header";
import { Link } from "react-router-dom";


const Register = () => {

  const { http, setToken } = AuthUser();

  const [role, setRole] = useState();

  const [name, setName] = useState();

  const [email, setEmail] = useState();

  const [password, setPassword] = useState();

  const [phone_number, setPhone_number] = useState();

  const [designation, setDesignation] = useState();

  const [shift_id, setShift_id] = useState();

  const [show, setShow] = useState(true);

  const handlerole = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);

    if (selectedRole === "admin") {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    http
      .post("/admin/register", {
        role: role,
        name: name,
        email: email,
        password: password,
        phone: phone_number,
        designation: designation,
        shift_id: shift_id,
      })
      .then((res) => {
        // setToken(res.data.user,res.data.access_token);
        navigate("/");
        alert("successfuly upload");
      });
  };

  const [shifts, setShifts] = useState([]); // State to store the fetched data

//   const[Showshift, setShowshift] = useState();

  const {token} = AuthUser()

  useEffect(() => {
    // Fetch data from the API
    http.get('/admin/shift/show',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })
      .then(response => {
        console.log(response.data.shifts)
        setShifts(response.data.shifts); // Update the data state with the fetched data
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);


  return (
    <>
      <Header />
      <div className="p-2 sm:ml-[18rem] mx-[2rem] ">
        <div className="grid md:grid-cols-2">
          <div>
            <h1 className="text-3xl mt-2">Register</h1>
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
                      Register
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          {/* <div>
        <Link to='/dashboard/admin/Addshift' className='flex justify-end items-center mt-2' >
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add New</button>
        </Link>
    </div> */}
        </div>
        <div>
          <div className="w-full rounded-lg border mt-2 border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:p-8">
            <form onSubmit={onSubmit} className="space-y-6">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Registration Form
              </h5>
              <div>
                <label
                  for="countries"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an option
                </label>
                <select
                  id="countries"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  onChange={handlerole}
                  value={role}
                >
                  <option selected>Select A Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              {!show && (
                <select
                  id="countries"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  onChange={(e) => setShift_id(e.target.value) }
                  
                >
                  <option  selected disabled>Select Time</option>
                  {shifts.map((item,index) => (

                  <option value={item.id} key={index}>{item.id} {item.name} </option>
                  ))}
                </select>
              )}
                  
              <div>
                <label
                  htmlFor="Name"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                  placeholder="name"
                  required=""
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="Name"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Designation
                </label>
                <input
                  type="text"
                  name="Designation"
                  id="name"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                  placeholder="Designation"
                  required=""
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                  placeholder="name@company.com"
                  required=""
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                  required=""
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  // id="password"
                  placeholder="+92123456789"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                  required=""
                  onChange={(e) => setPhone_number(e.target.value)}
                />
              </div>
              <button
                // type="submit"
                className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={onSubmit}
              >
                Registration
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
