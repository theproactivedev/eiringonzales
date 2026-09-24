import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
// import Portfolio from './Portfolio';

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/portfolio" element={<Portfolio />} /> */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Content;
