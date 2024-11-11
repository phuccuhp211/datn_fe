import React from 'react';
import Headers from './clients/include/Header';

import Footers from './clients/include/Footers';
import { BrowserRouter, Outlet } from 'react-router-dom';
import AppRouter from './Router'; 
import './App.css';
import ScrollToTop from './ScrollPage'; // Nhập component bạn vừa tạo
function App() {
  return (
    <Outlet></Outlet>
  );
}

export default App;
