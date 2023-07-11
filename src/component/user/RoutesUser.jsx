import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutUser from './LayoutUser'
import DashboardUser from './DashboardUser'
import Sidenav from './Sidenav'
import ShowAttedence from './Attedences/ShowAttedence'

const RoutesUser = () => {
  return (
    <>
    <Sidenav/>
        <Routes>
            <Route path='/*' element={<LayoutUser/>} />
            <Route index element={<DashboardUser/>} />
            <Route path='/*Showattedence' element={<ShowAttedence/>} />
        </Routes>
    </>
  )
}

export default RoutesUser