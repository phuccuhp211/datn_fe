import React from 'react';
import assets from '../assets/img1.png'; // Adjust the path to where your logo is stored
import logo from '../assets/img2.png';
function Header() {
  return (
    <header>
      {/* Phần trên cùng của Header */}
      <div className="header-top">
        <div className="header-left">
          <span>Hồ Chí Minh - Việt Nam</span>
          <span>cuuhoadongvat@gmail.com</span>
          <span>0334857779</span>
        </div>
        <div className="header-right">
          <a href="#">Đăng nhập</a>
        </div>
      </div>

      {/* Phần chính của Header */}
      <div className="header-main">
        <div className="assets">
        <img src={logo} alt="Dog" className="about-image" />
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Nhận nuôi</a></li>
            <li><a href="#">Ủng hộ</a></li>
            <li><a href="#">Tin tức</a></li>
            <li><a href="#">Liên hệ</a></li>
            <li><a href="#">Sản phẩm</a></li>
            <li ><a href="#">Tình nguyện viên</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
