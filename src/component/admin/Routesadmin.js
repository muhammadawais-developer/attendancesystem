import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Dashboard from './Dashboard'
import Sidenav from './Sidenav'
import Showshift from './Shift/ShowShift'
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