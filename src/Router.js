// Router.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './include/Header';
import Trangchu from './Home/Home';
import Products from './product/Products';
import Product from './detailproduct/detailproduct-js/Product';
import Giohang from './shoppingcart/Cart';
import Login from './login/Login';
import Register from './login/Register';
import Support from './donate/Support';
import Contact from './Contact/Contact';
import Volunteer from './volunteer/Volunteer';
import New from './News/New';
import DetailNew from './News/DetailNew';
import FormVolunteer from './volunteer/FormVolunteer';
import Vaccin from './vaccination/Vaccin';
import UserProfile from './profile/UserProfile';
import Adopt from './Adopt/adopt';
import DetailAdopt from './Adopt/DetailAdopt';
import AdoptionForm from './Adopt/FromNhannuoi';
import App from './App';
import App2 from './Admin_FE/App';

import Home from './Admin_FE/Dashboard_Ad/Dashboard';
import AnimalManagement from './Admin_FE/Animal_Ad/AnimalManagement';
import AnimalForm from './Admin_FE/Animal_Ad/AnimalForm';
import Sidebar from './Admin_FE/SidebarMenu_Ad/SidebarMenu';
import SupportManagement from './Admin_FE/SupportManagement_Ad/SupportManagement';
import VolunteerManagement from './Admin_FE/Volunteer_Ad/VolunteerManagement';
import NewsManagement from './Admin_FE/News_Ad/NewsManagement';
import NewsForm from './Admin_FE/News_Ad/NewsForm';
import CustomerManagement from './Admin_FE/Customer_Ad/CustomerManagement';
import ProductManagement from './Admin_FE/Product_Admin/ProductManagement';
import ProductForm from './Admin_FE/Product_Admin/ProductForm';


function AppRouter() {
  const [user, setUser] = useState(null); // Quản lý trạng thái người dùng
  return (
    <>
    <Header user={user}  setUser={setUser} /> {/* Hiển thị Header và truyền user */}
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
