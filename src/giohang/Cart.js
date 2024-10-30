import React, { useState } from 'react';
import styles from './Cart.module.css';

function Cart() {
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
  const totalCart = cart.reduce((acc, item) => {
    return acc + (Number(item.price) * Number(item.quantity));
  }, 0);

  return (
    <div>
      <div className={styles.formN}>
      <h2>Thông tin</h2>
      <div className={styles.thongtin}>
        <div>
          <input type="text" placeholder="Họ và tên" />
        </div>
        <div>
          <input type="text" placeholder="Số điện thoại" />
        </div>
        <div>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <select id="province" name="province" >
            <option value="">Chọn Tỉnh/Thành phố</option>
            {/* Danh sách Tỉnh/Thành phố sẽ được thêm vào đây */}
          </select>
        </div>
        <div>
          <select id="district" name="district" >
            <option value="">Chọn Quận/Huyện</option>
            {/* Danh sách Quận/Huyện sẽ được thêm vào đây */}
          </select>
        </div>
        <div>
          <select id="ward" name="ward">
            <option value="">Chọn Xã/Phường</option>
            {/* Danh sách Xã/Phường sẽ được thêm vào đây */}
          </select>
        </div>
      </div>
      <hr />
      <h2>Đơn hàng của bạn</h2>
      <div className={styles.formPay}>
        <div className={styles.formSection}>
          {cart.length === 0 ? (
              
                <td colSpan="6">Giỏ hàng của bạn trống.</td>
             
            ) : (
              cart.map((item) => (
                <div key={item.id}>
                  <div className={styles.order} >
                <div>
                <img src={`../image/${item.images[0]}`} alt="Sản phẩm" />
                </div>
                <div className={styles.orderItem}>
                  <p> {item.name}  | <span> Size: {item.selectedSize?.size}</span></p>
                  <p>100.000VND - <span style={{ textDecoration: 'line-through' }}> {Number(item.sizes[0].price).toLocaleString()} VND</span></p>
                </div>
                <div className={styles.item}>
                <input  
                            type="number"
                            name="quantity"
                            value={item.quantity}
                            className={styles.quantityInput}
                            min={1}
                            max={99}
                            onChange={(e) => handleUpdate(item.id, e.target.value)}
                          />
                 <button
                          className={styles.delete}
                          onClick={() => handleRemove(item.id)}
                        >
                          Xóa
                        </button>
                </div>
                </div>
                </div>
              ))
            )}

          {/* Thêm các đơn hàng khác tương tự */}
        </div>

        <div className={styles.summarySection}>
          <div className={styles.orderTotals}>
            <p>Tạm tính: <span> {totalCart.toLocaleString()} VND</span></p>
            <p>Mã giảm giá:</p>
            <input type="text" placeholder="Nhập mã giảm giá" />
            <p>Giao hàng: <span>Flat rate shipping</span></p>
            <p>Giảm: <span>$8.20</span></p>
            <hr />
            <h3>Tổng: <span> 1000 VND</span></h3>
          </div>

          <div className={styles.paymentMethod}>
            <div className={styles.method}>
              <input type="radio" id="vietqr" name="payment" value="vietqr" checked />
              <label htmlFor="vietqr">
                <span className={styles.methodTitle}>Thanh toán qua vnPay</span>
              </label>
            </div>
            <div className={styles.method}>
              <input type="radio" id="cod" name="payment" value="cod" />
              <label htmlFor="cod">
                <span className={styles.methodTitle}>Thanh toán khi giao hàng (COD)</span>
              </label>
            </div>
          </div>

          <button className={styles.thanhtoan}>thanh toan</button>
        </div>
      </div>
    </div>



    </div>
  );
}

export default Cart;
