  import React, { useState } from 'react';
  import styles from './Sanpham.module.css';
  import { Link } from 'react-router-dom';
  import './Sanpham.module.css';

  // Component cho popup
  function Popup({ product, isOpen, onClose }) {
    if (!isOpen) return null;

    return (
      <div className={styles.popupOverlay}>
        <div className={styles.popupContent}>
          <button className={styles.closeButton} onClick={onClose}>X</button>
          <h2>{product.tenSp}</h2>
          <img src={product.image} alt={product.tenSp} style={{ width: '200px' }} />
          <p><strong>Giá:</strong> {product.gia} VND</p>
          <button className={styles.muahang} onClick={() => alert('Đã thêm sản phẩm vào giỏ hàng')}>Thêm vào giỏ</button>
        </div>
      </div>
    );
  }

  function Sanpham() {
    // State để kiểm soát popup
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Danh sách sản phẩm (dữ liệu mẫu)
    const products = [
      { id: 1, tenSp: 'Royal Canin Maxi Puppy - Thức Ăn Cao Cấp Dành Cho Chó', gia: '300,000', image: '../image/gioithieu2.png',loai:'chó' },
      { id: 2, tenSp: 'Thức ăn cho thú cưng B', gia: '350,000', image: '../image/gioithieu2.png',loai:'chó' },
      { id: 3, tenSp: 'Thức ăn cho thú cưng C', gia: '400,000', image: '../image/gioithieu2.png',loai:'chó' },
      { id: 4, tenSp: 'Thức ăn cho thú cưng D', gia: '450,000', image: '../image/gioithieu2.png',loai:'chó' },
      { id: 5, tenSp: 'Royal Canin Maxi Puppy - Thức Ăn Cao Cấp Dành Cho Chó', gia: '300,000', image: '../image/gioithieu2.png',loai:'chó' },
      { id: 6, tenSp: 'Thức ăn cho thú cưng B', gia: '350,000', image: '../image/gioithieu2.png' },
      { id: 7, tenSp: 'Thức ăn cho thú cưng C', gia: '400,000', image: '../image/gioithieu2.png' },
      { id: 8, tenSp: 'Thức ăn cho thú cưng D', gia: '450,000', image: '../image/gioithieu2.png' },
      { id: 9, tenSp: 'Royal Canin Maxi Puppy - Thức Ăn Cao Cấp Dành Cho Chó', gia: '300,000', image: '../image/gioithieu2.png' },
      { id: 10, tenSp: 'Thức ăn cho thú cưng B', gia: '350,000', image: '../image/gioithieu2.png' },
      { id: 11, tenSp: 'Thức ăn cho thú cưng C', gia: '400,000', image: '../image/gioithieu2.png' },
      { id: 12, tenSp: 'Thức ăn cho thú cưng D', gia: '450,000', image: '../image/gioithieu2.png' },
      { id: 13, tenSp: 'Royal Canin Maxi Puppy - Thức Ăn Cao Cấp Dành Cho Chó', gia: '300,000', image: '../image/gioithieu2.png' },
      { id: 14, tenSp: 'Thức ăn cho thú cưng B', gia: '350,000', image: '../image/gioithieu2.png' },
      { id: 15, tenSp: 'Thức ăn cho thú cưng C', gia: '400,000', image: '../image/gioithieu2.png' },
      { id: 16, tenSp: 'Thức ăn cho thú cưng D', gia: '450,000', image: '../image/gioithieu2.png' },

    ];

    // Hàm mở popup với sản phẩm được chọn
    const openPopup = (product) => {
      setSelectedProduct(product);
      setIsPopupOpen(true);
    };

    // Hàm đóng popup
    const closePopup = () => {
      setIsPopupOpen(false);
      setSelectedProduct(null);

    };

    const [filterType, setFilterType] = useState('');  // Bộ lọc theo loại chó/mèo
    const [filterPrice, setFilterPrice] = useState(''); // Bộ lọc theo giá
    const filteredProducts = products.filter((product) => {
      // Lọc theo loại
      if (filterType === 'cho' && !product.tenSp.toLowerCase().includes('chó')) {
        return false;
      }
      if (filterType === 'meo' && !product.tenSp.toLowerCase().includes('mèo')) {
        return false;
      }
    
      // Lọc theo giá
      const giaNum = parseInt(product.gia.replace(/,/g, ''));
      if (filterPrice === '300000' && giaNum >= 300000) return false;
      if (filterPrice === '300000-400000' && (giaNum < 300000 || giaNum > 400000)) return false;
      if (filterPrice === '400000' && giaNum <= 400000) return false;
    
  
    
      return true;
    });
    
    


    return (
      <div className={styles.sanPham}>
        <h1>SAN PHAM</h1>

        <div >
      <div className={styles.loc1}>
      <select onChange={(e) => setFilterType(e.target.value)}>
    <option value="">Chọn sản phẩm</option>
    <option value="cho">Chó</option>
    <option value="meo">Mèo</option>
  </select>
      </div>

<div className={styles.loc2}>
<select onChange={(e) => setFilterPrice(e.target.value)}>
    <option value="">Chọn giá </option>
    <option value="300000">Dưới 300,000 VND</option>
    <option value="300000-400000">300,000 - 400,000 VND</option>
    <option value="400000">Trên 400,000 VND</option>
  </select>
</div>

</div>
<div style={{clear:'both'}}></div>


<div className={styles.columCard}>
  {filteredProducts.map((product) => (
    <div className={styles.card} key={product.id}>
      <div className={styles.imageSP}>
        {/* Sử dụng <Link> để dẫn đến trang chi tiết sản phẩm */}
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.tenSp} />
        </Link>
      </div>
      <div className={styles.sanPhamTT}>
      <div className={styles.tenSP}>
          {/* Thêm <Link> cho tên sản phẩm */}
          <Link to={`/product/${product.id}`}  className={styles.ttSP}>{product.tenSp}</Link>
      </div>
        <hr />
        <div className={styles.muaNgay}>
          <p className={styles.gia}>{product.gia} VND</p>
          <div className={styles.overSP}>
            <button className={styles.muaHang} onClick={() => openPopup(product)}>Mua hàng</button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


        {/* Nút Xem thêm */}
        <div className={styles.btnSP}><button>XEM THEM</button></div>

        {/* Hiển thị popup nếu isPopupOpen là true */}
        {selectedProduct && (
          <Popup product={selectedProduct} isOpen={isPopupOpen} onClose={closePopup} />
        )}
      </div>
    );
  }

  export default Sanpham;
