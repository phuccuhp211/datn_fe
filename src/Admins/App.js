import React from 'react';
import { BrowserRouter as  Router ,Routes, Route, Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Sidebar from './SidebarMenu/SidebarMenu';
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
