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
import Support from './ungho/Support';
import Contact from './lienhe/Contact';
import Volunteer from './tinhnguyen/Volunteer';
import New from './tintuc/New';
import DetailNew from './tintuc/DetailNew';
import FormVolunteer from './tinhnguyen/FormVolunteer';
import Vaccin from './tiemphong/Vaccin';
import UserProfile from './profile/UserProfile';


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
      <Route path="/ungho" element={<Support />} />
      <Route path="/lienhe" element={<Contact />} />
      <Route path="/tinhnguyen" element={<Volunteer />} />
      <Route path="/tintuc" element={<New />} />
      <Route path="/tintuc/:1" element={<DetailNew />} />
      <Route path="/dangkytinhnguyen" element={<FormVolunteer />} />
      <Route path="/vaccin" element={<Vaccin />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
    </>
  );
}

export default AppRouter;
