import React, { useState } from 'react';
import styles  from './UserProfile.module.css';

const UserProfile = () => {
  const [isContent1Visible, setIsContent1Visible] = useState(true);

  const toggleContent = () => {
    setIsContent1Visible(!isContent1Visible);
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profilePicture}>
        <img src="../image/anhthucungdep.png" alt="User Avatar" />
      </div>
      
      <div className={styles.profileInfo}>
        {isContent1Visible ? (
          <div id="content1" className={styles.content}>
            <h2>Quản Lý Tài Khoản</h2>
            <form className={styles.scrollProfile}>
              <div className={styles.infoGroup}>
                <label>Tên Tài Khoản:</label>
                <input defaultValue="Luong Bao Minh" />
              </div>
              <div className={styles.infoGroup}>
                <label>Họ và Tên:</label>
                <input defaultValue="Luong Bao Minh" />
              </div>
              <div className={styles.infoGroup}>
                <label>Số Điện Thoại:</label>
                <input defaultValue="Luong Bao Minh" />
              </div>
              <div className={styles.infoGroup}>
                <label>Email:</label>
                <input defaultValue="Luong Bao Minh" />
              </div>
              <div className={styles.infoGroup}>
                <label>Địa Chỉ:</label>
                <input defaultValue="Luong Bao Minh" />
              </div>
            </form>
            <div>
            <button className={styles.updateBtn}>Cập Nhật</button>
            <button className={styles.changePasswordBtn}>Đổi Mật Khẩu</button>
            <button 
          className={styles.purchaseHistoryLink} 
          onClick={toggleContent}
        >
          {isContent1Visible ? "Lịch Sử Mua Hàng" : "Xem Thông Tin User"}
        </button>
            </div>
          </div>
          
        ) : (
          <div id="content2" className={styles.content}>
            <h2>Quản Lý Đơn Hàng</h2>
            <div className={styles.scrollItem}>
              <div className={styles.cartItem}>
                <div className={styles.cartProduct}>
                  <img src="../image/food1_1.webp" alt="Áo thun đỏ cho chó" />
                  <div className={styles.itemDetails}>
                    <p className={styles.itemName}>Áo thun đỏ cho chó | Size: M </p>
                    <p className={styles.itemPrice}>
                      <span>100.000 VND</span> – <span className={styles.oldPrice}>110,000 VND</span>
                    </p>
                  </div>
                  <div className={styles.itemTotal}>
                    <p className={styles.totalPrice}>Số lượng: 10</p>
                  </div>
                </div>

                <div className={styles.cartProduct}>
                  <img src="../image/food1_1.webp" alt="Áo thun đỏ cho chó" />
                  <div className={styles.itemDetails}>
                    <p className={styles.itemName}>Áo thun đỏ cho chó | Size: M </p>
                    <p className={styles.itemPrice}>
                      <span>100.000 VND</span> – <span className={styles.oldPrice}>110,000 VND</span>
                    </p>
                  </div>
                  <div className={styles.itemTotal}>
                    <p className={styles.totalPrice}>Số lượng: 10</p>
                  </div>
                </div>


                <div className={styles.cartProduct}>
                  <img src="../image/food1_1.webp" alt="Áo thun đỏ cho chó" />
                  <div className={styles.itemDetails}>
                    <p className={styles.itemName}>Áo thun đỏ cho chó | Size: M </p>
                    <p className={styles.itemPrice}>
                      <span>100.000 VND</span> – <span className={styles.oldPrice}>110,000 VND</span>
                    </p>
                  </div>
                  <div className={styles.itemTotal}>
                    <p className={styles.totalPrice}>Số lượng: 10</p>
                  </div>
                </div>

                <div className={styles.cartProduct}>
                  <img src="../image/food1_1.webp" alt="Áo thun đỏ cho chó" />
                  <div className={styles.itemDetails}>
                    <p className={styles.itemName}>Áo thun đỏ cho chó | Size: M </p>
                    <p className={styles.itemPrice}>
                      <span>100.000 VND</span> – <span className={styles.oldPrice}>110,000 VND</span>
                    </p>
                  </div>
                  <div className={styles.itemTotal}>
                    <p className={styles.totalPrice}>Số lượng: 10</p>
                  </div>
                </div>
                {/* Thêm các sản phẩm khác tương tự */}
                <div className={styles.itemTotal}>
                  <p>Ngay dat: 15/10/2024</p>
                  <p><strong className={styles.str}>Tong tien: 300.000 VND</strong></p>
                </div>
              </div>
              {/* Thêm các đơn hàng khác nếu cần */}
            </div>
            <button 
          className={styles.purchaseHistoryLink} 
          onClick={toggleContent}
        >
          {isContent1Visible ? "Lịch Sử Mua Hàng" : "Xem Thông Tin User"}
        </button>
          </div>
        )}

     
      
      </div>
    </div>
  );
};

export default UserProfile;
