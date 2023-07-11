import React,{ useState } from 'react'
import LayoutUser from '../../component/user/LayoutUser';
import Sidenav from '../../component/user/Sidenav';
import { Route, Routes } from 'react-router-dom';
import DashboardUser from '../../component/user/DashboardUser';
import ShowAttedence from '../../component/user/Attedences/ShowAttedence';


const User = () => {

  // const [timeValue, setTimeValue] = useState('');

  // const handleTimeChange = (event) => {
  //   const { value } = event.target;
  //   setTimeValue(value);
  // };

  return (
    <>
    <Sidenav/>
    <Routes>
      <Route path='/*' element={<LayoutUser/>} />
      <Route index element={<DashboardUser/>} />
      <Route path='/showattedence' element={<ShowAttedence/>}  />
    </Routes>
    </>
  )
}

export default User;