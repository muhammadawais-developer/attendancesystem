import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="p-4 sm:ml-[16rem] bg-white shadow-lg shadow-gray-500/50">
    <div className="flex md:flex-row flex-col">
        <div className="basis-[100%]  md:basis-[45%] ml-[1.555rem]" >
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
        <div className="basis-[100%] md:basis-[88%]" >
            <div className="flex  justify-end items-center" >
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
  )
}

export default Header