import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
// import Portfolio from './Portfolio';
import Contact from './Contact';

const Content = () => {
  return (
    <Routes>
      <Route path="/eiringonzales" element={<Home />} />
      {/* <Route path="/eiringonzales/portfolio" element={<Portfolio />} /> */}
      <Route path="/eiringonzales/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/eiringonzales" replace />} />
    </Routes>
  );
}

export default Content;
