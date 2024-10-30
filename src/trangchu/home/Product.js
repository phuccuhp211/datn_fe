import styles from '../home-css/Home.module.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Product() {
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
          <button className={styles.buyProductPopup} onClick={() => addToCart(product)}>Thêm vào giỏ</button>
        </div>
      </div>
    );
  }

  //  kiểm soát popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [cart, setCart] = useState([]); // khởi tạo giỏ hàng ban đầu là rỗng
  const navigate = useNavigate(); // Khởi tạo navigate
  const [quantity, setQuantity] = useState(1); // State để theo dõi số lượng

  useEffect(() => {
    const savedCart = localStorage.getItem('cart'); // lưu giỏ hàng để khi reload không bị mất
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);  // Xét theo giỏ hàng theo id sản phẩm
      let newCart;

      if (existingProduct) {
        // nếu có rồi thì thêm 1 vào số lượng 
        newCart = prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: Number(item.quantity) + Number(quantity) } : item
        );
      } else {
        // còn chưa có thì tạo sản phẩm mới trong giỏ hàng 
        newCart = [...prevCart, { ...product, quantity: 1 }];
      }

      localStorage.setItem('cart', JSON.stringify(newCart));
      // Chuyển hướng sang trang giỏ hàng
      navigate('/giohang');
      return newCart;
    });
  };

  // Lấy danh sách sản phẩm từ API
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách sản phẩm:', error);
      }
    };
    fetchProducts();
  }, []);

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
    const giaNum = product.gia; // Giả sử gia đã là số

    if (filterType === 'cho' && !product.tenSp.toLowerCase().includes('chó')) {
      return false;
    }
    if (filterType === 'meo' && !product.tenSp.toLowerCase().includes('mèo')) {
      return false;
    }

    // Lọc theo giá
    if (filterPrice === '300000' && giaNum >= 300000) return false;
    if (filterPrice === '300000-400000' && (giaNum < 300000 || giaNum > 400000)) return false;
    if (filterPrice === '400000' && giaNum <= 400000) return false;

    return true;
  });

  return (
    <div className={styles.product}>
      <h1>SẢN PHẨM</h1>

      <div>
        <div className={styles.filterAnimal}>
          <select onChange={(e) => setFilterType(e.target.value)}>
            <option value="">Chọn sản phẩm</option>
            <option value="cho">Chó</option>
            <option value="meo">Mèo</option>
          </select>
        </div>

        <div className={styles.filterPrice}>
          <select onChange={(e) => setFilterPrice(e.target.value)}>
            <option value="">Chọn giá</option>
            <option value="300000">Dưới 300,000 VND</option>
            <option value="300000-400000">300,000 - 400,000 VND</option>
            <option value="400000">Trên 400,000 VND</option>
          </select>
        </div>
      </div>

      <div style={{ clear: 'both' }}></div>

      <div className={styles.columCardProduct}>
        {filteredProducts.map((product) => (
          <div className={styles.cardProduct} key={product.id}>
            <div className={styles.imgProduct}>
              <Link to={`/product/${product.id}`}>
                <img src={`image/${product.images[0]}`} alt={product.name} />
              </Link>
            </div>
            <div className={styles.informationProduct}>
              <div className={styles.nameProduct}>
                <Link to={`/product/${product.id}`} className={styles.linkProduct}>{product.name}</Link>
              </div>
              <hr />
              <div className={styles.buyNowProduct}>
              <p className={styles.priceProduct}>
  {product.sizes && product.sizes.length > 0 ? product.sizes[0].price : 'Liên hệ'} VND
      </p>
                <div className={styles.overProduct}>
                  <button className={styles.buyProduct} onClick={() => openPopup(product)}>Mua hàng</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nút Xem thêm */}
      <div className={styles.btnSeeMoreProduct}><button>XEM THÊM</button></div>

      {/* Hiển thị popup nếu isPopupOpen là true */}
      {selectedProduct && (
        <Popup product={selectedProduct} isOpen={isPopupOpen} onClose={closePopup} />
      )}
    </div>
  );
}

export default Product;
