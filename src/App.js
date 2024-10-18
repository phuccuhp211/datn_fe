import React from 'react';
import Headers from './include/Header';

import Footers from './include/Footers';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router'; 
import './App.css';
import Cuontrang from './Cuontrang'; // Nhập component bạn vừa tạo
function App() {
  return (
    <BrowserRouter >
    <Cuontrang/>
    {/* <Headers/> */}
   <AppRouter>
   </AppRouter>
    <Footers/>
  </BrowserRouter>
  );
}

export default App;
