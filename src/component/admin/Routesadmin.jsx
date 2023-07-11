import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Dashboard from './dashboard'
import Sidenav from './sidenav'
// import ShowShift from '../../pages/admin/shift/ShowShift'
import Showshift from './Shift/Showshift'
const Routesadmin = () => {
  return (
    <>
    <Sidenav/>
    {/* <BrowserRouter> */}
        <Routes>
            <Route path='/*' element={<Layout/>}  />
            <Route index element={<Dashboard/>} />
            <Route path='/*showshift' element={<Showshift/>} />
        </Routes>
    {/* </BrowserRouter> */}
    </>
  )
}

export default Routesadmin