import React from 'react'
import Sidenav from './Sidenav'
import { Outlet } from 'react-router-dom'


const LayoutUser = () => {
  return (
    <>
     <div className="flex md:flex-row flex-col " > 
       <div className="basis-[100%]  md:basis-[12%]" >
        <Sidenav/>
      </div> 
      <div className='basis-[100%] md:basis-[88%]' >
        <div><Outlet/> </div>
      </div>
  </div>
    </>
  )
}

export default LayoutUser