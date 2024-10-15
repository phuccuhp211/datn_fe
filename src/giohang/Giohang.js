import React, { useState } from 'react';
import styles from './giohang.module.css';

function Giohang() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  // Hàm xử lý khi cập nhật số lượng sản phẩm
  const handleUpdate = (id, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    // Cập nhật giỏ hàng trong state và localStorage
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    console.log('Giỏ hàng đã được cập nhật:', updatedCart);
  };

  // Hàm xử lý khi xóa sản phẩm khỏi giỏ hàng
  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    // Cập nhật giỏ hàng trong state và localStorage
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    console.log('Sản phẩm đã bị xóa:', id);
  };

  // Hàm xử lý tính tổng tiền các sản phẩm 
  const totalCart = cart.reduce((acc,item)=>
{
return acc + (Number(item.gia) * Number(item.quantity));
// Cổng tổng tiền của các sản phẩm
},0); 

  return (
    <div>
      <div className={styles.cartContainer}>
        <h1>Giỏ hàng của bạn</h1>
        <table>
          <thead  className={styles.theadGH}>
            <tr className={styles.chude}>
              <th scope="col">ẢNH SẢN PHẨM</th>
              <th scope="col">TÊN SẢN PHẨM</th>
              <th scope="col">ĐƠN GIÁ</th>
              <th scope="col">SỐ LƯỢNG</th>
              <th scope="col">THÀNH TIỀN</th>
              <th scope="col">XÓA</th>
            </tr>
          </thead>
          <tbody className={styles.spGioHang}>
            {cart.length === 0 ? (
              <tr>
                <td colSpan="6">Giỏ hàng của bạn trống.</td>
              </tr>
            ) : (
              cart.map((item) => (
                <tr key={item.id}>
                  <td className={styles.tensp}>
                    <img src='../image/gioithieu2.png' alt="Sản phẩm" />
                  </td>
                  <td className={styles.tensp}>
                    {item.tenSp} - {item.selectedType}
                  </td>
                  <td className={styles.tensp}>{Number(item.gia).toLocaleString()} VND</td>
                  <td>
                    <div className={styles.tensp1}>
                      <input
                        type="number"
                        name="quantity"
                        value={item.quantity}
                        min={1}
                        max={99}
                        onChange={(e) => handleUpdate(item.id, e.target.value)}
                        
                      />
                    </div>
                  </td>
                  <td className={styles.tensp}>
                    {(Number(item.gia) * Number(item.quantity)).toLocaleString()} VND
                    
                  </td>
                  <td className={styles.tensp}>
                    <button
                      className={styles.xoa}
                      onClick={() => handleRemove(item.id)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

    <button className={styles.ttMua}>Tiep tuc mua hang</button>
   <div className={styles.tbThanhToan}>
   <table >
       <thead className={styles.tongTien}>
       <tr>
            <th>Tong tien </th>
        </tr>
       </thead>
        <tbody>
            <tr><td className={styles.Tong}> {cart.length > 0 && (
        <div>
            <p>{totalCart.toLocaleString()} VND</p>
        </div>
        
        )}</td></tr>
        </tbody>
    </table>
<button className={styles.thanhToan}>THANH TOAN DON HANG </button>
   </div>
      {/* Hiển thị ra bảng tổng tiền */}
     
      </div>
    </div>
  );
}

export default Giohang;
