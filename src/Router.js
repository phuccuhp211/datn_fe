// Router.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './clients/include/Header';
import Trangchu from './clients/Home/Home';
import Products from './clients/Product/Products';
import Product from './clients/Detailproduct/detailproduct-js/Product';
import Giohang from './clients/Shoppingcart/Cart';
import Login from './clients/Login/Login';
import Register from './clients/Login/Register';
import Support from './clients/Donate/Support';
import Contact from './clients/Contact/Contact';
import Volunteer from './clients/Volunteer/Volunteer';
import New from './clients/News/New';
import DetailNew from './clients/News/DetailNew';
import FormVolunteer from './clients/Volunteer/FormVolunteer';
import Vaccin from './clients/Vaccination/Vaccin';
import UserProfile from './clients/Profile/UserProfile';
import Adopt from './clients/Adopt/adopt';
import DetailAdopt from './clients/Adopt/DetailAdopt';
import AdoptionForm from './clients/Adopt/FromNhannuoi';
import App from './App';
import App2 from './Admins/App';

import Home from './Admins/Dashboard/Dashboard';
import AnimalManagement from './Admins/Animal/AnimalManagement';
import AnimalForm from './Admins/Animal/AnimalForm';
import Sidebar from './Admins/SidebarMenu/SidebarMenu';
import SupportManagement from './Admins/SupportManagement/SupportManagement';
import VolunteerManagement from './Admins/Volunteer/VolunteerManagement';
import NewsManagement from './Admins/News/NewsManagement';
import NewsForm from './Admins/News/NewsForm';
import CustomerManagement from './Admins/Customer/CustomerManagement';
import ProductManagement from './Admins/Product/ProductManagement';
import ProductForm from './Admins/Product/ProductForm';


function AppRouter() {
  const [user, setUser] = useState(null); // Quản lý trạng thái người dùng
  return (
    <>
    <Header user={user} setUser={setUser} /> {/* Hiển thị Header và truyền user */}
    <Routes>
      <Route path="/" element={<App/>} >
        <Route path="/" element={<Trangchu />} />
        <Route path="/nhannuoi" element={<Adopt />} />
        <Route path="/nhannuoi/chitiet" element={<DetailAdopt />} />
        <Route path="/nhannuoi/dangky" element={<AdoptionForm />} />
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
      </Route>
      <Route path="/admin" element={<App2 />} >
        <Route path="/admin" element={<Home />} />
        <Route path="/admin/animals" element={<AnimalManagement />} />
        <Route path="/admin/support" element={<SupportManagement />} />
        <Route path="/admin/volunteer" element={<VolunteerManagement />} />
        <Route path="/admin/news" element={<NewsManagement />} />
        <Route path="/admin/news-form" element={<NewsForm />} />
        <Route path="/admin/animal-form" element={<AnimalForm />} />
        <Route path="/admin/users" element={<CustomerManagement />} />
        <Route path="/admin/products" element={<ProductManagement />} />
        <Route path="/admin/products-form" element={<ProductForm />} />
      </Route>
    </Routes>
    </> 

  );
}

export default AppRouter;
