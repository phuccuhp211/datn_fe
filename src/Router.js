// Router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Trangchu from './trangchu/Home';
import Products from './sanpham/Products';
import Product from './detailproduct/detailproduct-js/Product';
import Giohang from './giohang/Cart';


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Trangchu />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/giohang" element={<Giohang />} />
    </Routes>
  );
}

export default AppRouter;
