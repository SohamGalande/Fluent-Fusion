import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import Login from './Login';
import FooterComp from './FooterComp';
import TutorRegistration from './TutorRegistration';
import Student from './Student';
import Tutor from './Tutor';
import AdminLoginPage from './AdminSide/AdminLoginPage';
import StudEditProfile from './StudentSide/StudEditProfile';
import PageNotFound from './Others/PageNotFound';

import AllStudList from '../Component/AdminSide/AllStudList';
import AllTutList from '../Component/AdminSide/AllTutList';
import AllFeedBackList from '../Component/AdminSide/AllFeedBackList';
import AdminHome from './AdminSide/AdminHome';

function MyRoute() {
  const location = useLocation();

  // Function to determine if Navbar and FooterComp should be displayed based on route
  const shouldDisplayNavbarAndFooter = () => {
    const { pathname } = location;
    return pathname === '/' || pathname === '/login' || pathname === '/Becometutor' || pathname === '/*';
  };

  return (
    <div>
      {/* Conditionally render Navbar and FooterComp */}
      {shouldDisplayNavbarAndFooter() && <Navbar />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Becometutor' element={<TutorRegistration />} />
        <Route path='/student/*' element={<Student />} />
        <Route path='/tutor/*' element={<Tutor />} />
       
        <Route path='/admin' element={<AdminLoginPage/>}/>
        <Route path='/student/studedit' element={<StudEditProfile/>}/>
            <Route path='/admin/adminhome'>
                <Route path='alllanguage' element={<AdminHome/>}/>
                <Route path='allstudents' element={<AllStudList/>}/>
                <Route path='alltutors' element={<AllTutList/>}/>
                <Route path='allfeedbacks' element={<AllFeedBackList/>}/>
            </Route>
            
        <Route path='/*' element={<PageNotFound />}/>

      </Routes>
      {shouldDisplayNavbarAndFooter() && <FooterComp />}
    </div>
  );
}

export default MyRoute;