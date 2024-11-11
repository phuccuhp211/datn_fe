// Trangchu.js
import React ,{ useState }from 'react';
import { Link , useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

function Trangchu({ user , setUser}) {
  const navigate = useNavigate(); // Khởi tạo navigate
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    setUser(null); // Đặt user về null khi đăng xuất
    setIsDropdownOpen(false); // Đóng dropdown sau khi đăng xuất
    navigate('/');

  };
  return (
    <div className={styles.container}>
      <div >
        <div className={styles.colorContact}>
          <div className={styles.Contact}>
            <div className={styles.informationContact}>
              <p>hochiminh@gmail.com</p>
              <p>0334857779</p>
              <p>hochiminh - viet nam</p>
            </div>

            <div className={styles.login}>
            {user ? (
              <div className={styles.userProfile} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <button className={styles.userButton}>
                  Chào, {user.name}!▼
                </button>
                {isDropdownOpen && (
                  <div className={styles.dropdownMenu}>
                    <Link to="/profile" className={styles.menuItem}>Thông Tin User</Link>
                    <button onClick={handleLogout} className={styles.menuItem}>Đăng Xuất</button>
                  </div>
                )}
              </div>
            ) : (
              <div className={styles.btnLogin}>
                <button >
                <Link className={styles.linkLogout} to="/login">Đăng nhập</Link>
              </button>
              </div>
              
            )}
          </div>
          </div>
        </div>

        <div className={styles.header}>
          <nav className={styles.menu}>
            <div className={styles.editMenu}>
              <div>
                <ul>
                  {/* Sử dụng Link để điều hướng mà không cần reload lại trang */}
                  <li>
                    <Link to="/">
                      <img
                        src="../image/anhdep.png"
                        alt="My Image"
                        style={{ width: '225px', height: '65px' }}
                      />
                    </Link>
                  </li>
                  <li><Link className={styles.textMenu} to="/">Trang chủ</Link></li>
                  <li><Link className={styles.textMenu} to="/nhannuoi">Nhân nuôi</Link></li>
                  <li><Link className={styles.textMenu} to="/ungho">Ủng hộ</Link></li>
                  <li><Link className={styles.textMenu} to="/tintuc">Tin tức</Link></li>
                  <li><Link className={styles.textMenu} to="/lienhe">Liên hệ</Link></li>
                  <li><Link className={styles.textMenu} to="/products">Sản phẩm</Link></li>
                  <li><Link className={`${styles.textMenu} ${styles.color}`} to="/tinhnguyen">
                    <span>Tình nguyện viên</span>
                  </Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Trangchu;
