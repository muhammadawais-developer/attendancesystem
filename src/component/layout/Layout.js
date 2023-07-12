import React from 'react'
import { Outlet } from 'react-router-dom';
// import Dashboard from '../admin/dashboard';
import Sidenav from '../admin/Sidenav';
import Header from '../admin/Header';
import Footer from '../admin/Footer';

const Layout = () => {
  return (
    
    <>
    <div className="flex md:flex-row flex-col " > 
      <div className="basis-[100%]  md:basis-[12%]" >
       <Sidenav/>
     </div> 
     <div className='basis-[100%] md:basis-[88%]' >
     <Header/>
       <Outlet>
       </Outlet>
       <Footer/>
     </div>
 </div>
   </>

  )
}

export default Layout