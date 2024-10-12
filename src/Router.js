// Router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Trangchu from './trangchu/Home';
import Sanpham from './sanpham/Sanpham';


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Trangchu />} />
      <Route path="/sanpham" element={<Sanpham />} />
    </Routes>
  );
}

export default AppRouter;
