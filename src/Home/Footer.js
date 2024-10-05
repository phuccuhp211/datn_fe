import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="support-banner">
        <div className="support-text">
          <h3>Bạn đã sẵn sàng giúp đỡ?</h3>
        </div>
        <div className="support-button">
          <button className="donate-button">Ủng Hộ Ngay</button>
        </div>
      </div>

      <div className="footer-content">
        <div className="about-section">
          <h4>Về chúng tôi</h4>
          <p>
            Nhóm từ thiện tình nguyện viên Việt Nam và quốc tế, hoạt động vì tình yêu chó mèo.
          </p>
        </div>

        <div className="contact-section">
          <h4>Thông tin liên hệ</h4>
          <p>(+84)939 320 1068</p>
          <p>cuuchodongvat@gmail.com</p>
          <p>Ho Chi Minh - Viet Nam</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2019 / Designed by BMBSOft VietNam</p>
      </div>
    </footer>
  );
};

export default Footer;
