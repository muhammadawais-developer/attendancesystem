import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
// import Register from './component/admin/Register/Register'
import Home from './pages/admin/Home'
// import AuthUser from './component/AuthUser'
import User from './pages/user/User'
// import Routesadmin from './component/admin/routesadmin'
// import RoutesUser from './component/user/RoutesUser'
// import Dashboard from './component/admin/dashboard'
// import Showshift from './component/admin/Shift/Showshift'
function App() {

  return (
    <>
      {/* <Router> */}
        <Routes>
          <Route path='/' element={<Login/>} />
          {/* <Route path='/register' element={<Register/>} /> */}
          <Route path='/dashboard/admin/*' element={<Home/>}  />
          <Route path='/dashboard/user/*' element={<User/>} />
        </Routes>
      {/* </Router> */}
    </>
  )
}

export default App
