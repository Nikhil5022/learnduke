import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Body from './Body';
import Teachingjobs from './teachingjobs/Teachingjobs';

function NavbarWrapper() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/teachingJobs';
  return showNavbar ? <Navbar /> : null;
}

export default function App() {
  return (
    <Router>
      <>
        {/* Render NavbarWrapper instead of Navbar */}
        <NavbarWrapper />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/teachingJobs" element={<Teachingjobs />} />
          {/* Add additional routes here */}
        </Routes>
      </>
    </Router>
  );
}
