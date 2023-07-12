import React from 'react'
import Layout from '../../component/layout/Layout'
import { Route, Router, Routes } from 'react-router-dom'
import Dashboard from '../../component/admin/Dashboard'
import Showshift from '../../component/admin/Shift/ShowShift'
import Sidenav from '../../component/admin/Sidenav'
import AddShift from '../../component/admin/Shift/AddShift'
import EditShift from '../../component/admin/Shift/EditShift'
import ShowAttedences from '../../component/admin/Attedences/ShowAttedences'
import ShowDepartment from '../../component/admin/Department/ShowDepartment'
import Register from '../../component/admin/Register/Register'


const Home = () => {
  return (
    <>
      {/* <Router> */}
      <Sidenav/>
      <Routes>
        <Route path='/' element={<Layout/>} />
        <Route index element={<h1><Dashboard/></h1>} />
        <Route path='showshift' element={<Showshift/>}/>
        <Route path='/Addshift' element={<AddShift/>}/>
        <Route path='/Editshift' element={<EditShift/>}/>
        <Route path='showattedences' element={<ShowAttedences/>}/>
        <Route path='showdepartment' element={<ShowDepartment/>}/>
        <Route path='register' element={<Register/>}/>
      </Routes>
      {/* </Router> */}
   
    </>
  )
}

export default Home