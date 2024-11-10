import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarMenu.css';

function SidebarMenu() {
  return (
    <div className="sidebar">
      <h2>CHỨC NĂNG HỆ THỐNG</h2>
      <div className="menu-items">
        <NavLink to="/admin" className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}>
          <div className="menu-item">Trang chủ</div>
        </NavLink>
        <NavLink to="/admin/animals" className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}>
          <div className="menu-item">Quản lý thú nuôi</div>
        </NavLink>
        <NavLink to="/admin/support" className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}>
          <div className="menu-item">Quản lý hỗ trợ</div>
        </NavLink>
        <NavLink to="/admin/volunteer" className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}>
          <div className="menu-item">Quản lý tình nguyện viên</div>
        </NavLink>
        <NavLink to="/admin/news" className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}>
          <div className="menu-item">Quản lý tin tức</div>
        </NavLink>
        <NavLink to="/admin/users" className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}>
          <div className="menu-item">Quản lý khách hàng</div>
        </NavLink>
        <NavLink to="/admin/products" className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}>
          <div className="menu-item">Quản lý sản phẩm</div>
        </NavLink>
      </div>
    </div>
  );
}

export default SidebarMenu;
