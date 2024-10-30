import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Register.module.css';

function Register({ setUser }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Mật khẩu không khớp!');
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/auth/client/register", {
        firstName,
        lastName,
        email,
        phone,
        password,
      });

      const newUser = response.data;
      setUser({ id: newUser.id, email, name: `${firstName} ${lastName}`, phone });
      navigate('/');
      setError('');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'Đã xảy ra lỗi. Vui lòng thử lại.');
      } else {
        setError('Không thể kết nối đến server.');
      }
    }
  };

  return (
    <div className={styles.container}>
      <Link to="/login"><input className={styles.btn} type="button" value="ĐĂNG NHẬP" /></Link>
      <Link to="/register"><input className={styles.btn1} type="button" value="ĐĂNG KÝ" /></Link>

      <form onSubmit={handleRegister}>
        <div className={styles.dangnhap}>
          <br />
          <label className={styles.tkmk} htmlFor="firstName">Họ</label>
          <label className={styles.tkmk1} htmlFor="lastName">Tên</label>
          <br />
          <input type="text" className={styles.txt1} id="firstName" placeholder="Nhập họ *" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          <input type="text" className={styles.txt2} id="lastName" placeholder="Nhập tên *" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

          <br />
          <label className={styles.tkmk} htmlFor="email">Email</label>
          <input className={styles.txt} id="email" type="email" placeholder="Nhập email *" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <br />
          <label className={styles.tkmk} htmlFor="phone">Số điện thoại</label>
          <input type="text" className={styles.txt} id="phone" placeholder="Nhập số điện thoại *" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <label className={styles.tkmk} htmlFor="password">Mật khẩu</label>
          <input type="password" className={styles.txt} id="password" placeholder="Nhập mật khẩu *" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input type="password" className={styles.txt} id="confirmPassword" placeholder="Nhập lại mật khẩu *" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          <br />
          <button className={styles.bt} type="submit">Tạo tài khoản</button>
          <br />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <a className={styles.quen} href="#">Đã có tài khoản? Đăng nhập ngay!</a>
          <br />
        </div>
      </form>
    </div>
  );
}

export default Register;
