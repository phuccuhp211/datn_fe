// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Trangchu from './Trangchu';
import Footers from './trangchu/Footers';
import AppRouter from './Router'; // Đổi tên Router thành AppRouter hoặc một tên khác

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Trangchu/>
    <AppRouter />
    <Footers/>
  </BrowserRouter>
);
