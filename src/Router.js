// Router.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './include/Header';
import Trangchu from './trangchu/Home';
import Products from './sanpham/Products';
import Product from './detailproduct/detailproduct-js/Product';
import Giohang from './giohang/Cart';
import Login from './login/Login';
import Register from './login/Register';


function AppRouter() {
  const [user, setUser] = useState(null); // Quản lý trạng thái người dùng
  return (
    <>
    <Header user={user}  setUser={setUser} /> {/* Hiển thị Header và truyền user */}
    <Routes>
      <Route path="/" element={<Trangchu />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/giohang" element={<Giohang />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/register" element={<Register  setUser={setUser}  />} />
    </Routes>
    </>
  );
}

export default AppRouter;
