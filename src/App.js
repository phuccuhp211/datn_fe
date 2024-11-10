import React from 'react';
import Headers from './include/Header';

import Footers from './include/Footers';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router'; 
import './App.css';
import ScrollToTop from './ScrollPage'; // Nhập component bạn vừa tạo
function App() {
  return (
    <BrowserRouter >
    <ScrollToTop/>
    {/* <Headers/> */}
   <AppRouter>
   </AppRouter>
    <Footers/>
  </BrowserRouter>
  );
}

export default App;
