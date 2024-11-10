import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './Dashboard_Ad/Dashboard';
import AnimalManagement from './Animal_Ad/AnimalManagement';
import AnimalForm from './Animal_Ad/AnimalForm';
import Header from './Header_Ad/Header';
import Sidebar from './SidebarMenu_Ad/SidebarMenu';
import SupportManagement from './SupportManagement_Ad/SupportManagement';
import VolunteerManagement from './Volunteer_Ad/VolunteerManagement';
import NewsManagement from './News_Ad/NewsManagement';
import NewsForm from './News_Ad/NewsForm';
import CustomerManagement from './Customer_Ad/CustomerManagement';
import ProductManagement from './Product_Admin/ProductManagement';
import ProductForm from './Product_Admin/ProductForm';
import './App.css';

function App2() {
  return (
      <div className="main-layout">
        <Header />
        <div className="body-layout">
          <Sidebar />
          <div className="content">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
  );
}

export default App2;
