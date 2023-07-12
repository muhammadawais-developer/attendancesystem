import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import AuthUser from '../AuthUser';
const Header = () => {

  // const [shifts, setShifts] = useState([]); // State to store the fetched data

  const {token,user} = AuthUser();

  const[user_id, setUser_id] = useState([]);

  // console.log(user)
  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 500);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);
  const handleToggle = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };
  
  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    
    const formattedTime = [hours, minutes, seconds]
    .map((unit) => String(unit).padStart(2, "0"))
    .join(":");
    
    return formattedTime;
  };

// break in time
const [breaktime, setbreakTime] = useState(0);

const [isRunningbreak, setIsRunningbreak] = useState(false);
useEffect(() => {
  let intervalId;
  if (isRunningbreak) {
    intervalId = setInterval(() => {
      setbreakTime((prevbreakTime) => prevbreakTime + 1);
    }, 500);
  }

  return () => {
    clearInterval(intervalId);
  };
}, [isRunningbreak]);
const handleTogglebreak = () => {
  setIsRunningbreak((prevIsRunningbreak) => !prevIsRunningbreak);
};

const formatTimebreak = () => {
  const hours = Math.floor(breaktime / 3600);
  const minutes = Math.floor((breaktime % 3600) / 60);
  const seconds = breaktime % 60;
  
  const formattedTimebreak = [hours, minutes, seconds]
  .map((unit) => String(unit).padStart(2, "0"))
  .join(":");
  
  return formattedTimebreak;
};

  

 
  const timeid = () => {
    axios.get(`https://crm.businesswayz.com/public/api/attendence/time_in/${user.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  })
    .then(response => {
      console.log(response.data)
      // setShifts(response.data.shifts); // Update the data state with the fetched data
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
  }

  const timeout = () => {
    axios.get(`https://crm.businesswayz.com/public/api/attendence/time_out/${user.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  })
    .then(response => {
      console.log(response.data)
      // setShifts(response.data.shifts); // Update the data state with the fetched data
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
  }

const breakIn = () => {
  axios.get(`https://crm.businesswayz.com/public/api/break/break_in`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
})
  .then(response => {
    console.log(response.data)
    // setShifts(response.data.shifts); // Update the data state with the fetched data
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
}



  return (
    <>
      <div className="p-4 sm:ml-[16rem] bg-white shadow-lg shadow-gray-500/50">
        <div className="grid md:grid-cols-3">
          <div>
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only "
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full mt-1 p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required=""
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-[0.44rem] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-[0.4rem] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div>
            <div className="flex justify-center items-center ">
              <div className="flex justify-center items-center" >
                <h1>{formatTime()}</h1>
                {
                  isRunning ? 
                  <>
                  <button className="text-white mx-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => {handleToggle();
                timeout()}}>
                  Time_Out
                </button>
                  </> :
                  <>
                
                <button className="text-white mx-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => {handleToggle();
                timeid()}}>
                Time_In
                </button>
                  </>
                }
                
              </div>

              <div className="flex justify-center items-center" >
                <h1>{formatTimebreak()}</h1>
                {
                  isRunningbreak ? 
                  <>
                  <button className="text-white mx-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => {handleTogglebreak();
                timeout()}}>
                  Break_Out
                </button>
                  </> :
                  <>
                
                <button className="text-white mx-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => {handleTogglebreak();
                timeid()}}>
                Break_In
                </button>
                  </>
                }
                
              </div>

            </div>
          </div>
          <div>
            <div className="flex  justify-end items-center">
              <>
                <button
                  id="dropdownAvatarNameButton"
                  data-dropdown-toggle="dropdownAvatarName"
                  className="flex items-center mt-2 text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
                  type="button"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 mr-2 rounded-full"
                    src="/docs/images/people/profile-picture-3.jpg"
                    alt="user photo"
                  />
                  Bonnie Green
                  <svg
                    className="w-4 h-4 mx-1.5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownAvatarName"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div className="font-medium ">Pro User</div>
                    <div className="truncate">name@flowbite.com</div>
                  </div>
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
                  >
                    <li>
                      <Link
                       
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                      
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </Link>
                    </li>
                  </ul>
                  <div className="py-2">
                    <Link
                      
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </Link>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
