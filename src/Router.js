// Router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Trangchu from './trangchu/Home';
import Sanpham from './sanpham/Sanpham';
import Product from './detailproduct/detailproduct-js/Product';
import Giohang from './giohang/Giohang';


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Trangchu />} />
      <Route path="/sanpham" element={<Sanpham />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/giohang" element={<Giohang />} />
    </Routes>
  );
}

export default AppRouter;
