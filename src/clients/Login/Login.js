import React ,{useState} from 'react';
import styles from './Login.module.css'; // Đảm bảo bạn tạo file CSS module có tên tương ứng
import { Link ,useNavigate} from 'react-router-dom';
function Login({ setUser }) {
    // Mảng chứa thông tin người dùng giả định
    const users = [
    { id: 1, email: 'minh@gmail.com', password: '11111111', name: 'User One' },
    { id: 2, email: 'user2@example.com', password: 'password2', name: 'User Two' },
    { id: 3, email: 'user3@example.com', password: 'password3', name: 'User Three' }
  ];

  // Component trang đăng nhập

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      // Kiểm tra thông tin đăng nhập với mảng users
      const user = users.find(user => user.email === email && user.password === password);
  
      if (user) {
        // Nếu thông tin chính xác, lưu thông tin người dùng và điều hướng tới trang dashboard
        setUser(user); 
        navigate('/');
        setError('');
      } else {
        // Nếu thông tin không chính xác, hiển thị lỗi
        setError('Email hoặc mật khẩu không chính xác');
      }
    };


  return (
    <div className={styles.container}>
    <Link to="/login" ><input className={styles.btn} type="button" value="ĐĂNG NHẬP" /></Link>
    <Link to="/register"><input className={styles.btn1} type="button" value="ĐĂNG KÝ" /></Link>
   <form  onSubmit={handleLogin}>
   <div className={styles.dangnhap}>
      <br />
      <label className={styles.tkmk} htmlFor="email">Email</label>
      <br />
      <input
           className={styles.txt}
           type="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
            placeholder="Nhập email *"
          />
    
      <br />
      <label className={styles.tkmk} htmlFor="mk">Mật khẩu</label>
      <br />
      <input
            className={styles.txt}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Nhập mật khẩu *"
          />
      
      <br />
      <button className={styles.bt} type="submit" name="btndangnhap" id="btndangnhap">Đăng nhập</button>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <br />
      <a className={styles.tao} href="#">Tạo tài khoản</a>
      <a className={styles.quen} href="#">Quên mật khẩu?</a>
    </div>
   </form>
  </div>  
        
  );
}

export default Login;
