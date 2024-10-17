  // show san pham o trang chu
  import styles from '../home-css/Home.module.css';
  import React , { useState ,useEffect} from 'react';
  import { Link ,useNavigate } from 'react-router-dom';
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


    // Thêm sản phẩm vào giỏ hàng từ popup
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
    // Danh sách sản phẩm dữ liệu mẫu
   const products = [
  { id: 1, tenSp: 'Royal Canin Maxi Puppy - Thức Ăn Cao Cấp Dành Cho Chó', gia: 300000, image: '../image/gioithieu2.png', loai: 'chó' },
  { id: 2, tenSp: 'Thức ăn cho thú cưng B', gia: 350000, image: '../image/gioithieu2.png', loai: 'chó' },
  { id: 3, tenSp: 'Thức ăn cho thú cưng C', gia: 400000, image: '../image/gioithieu2.png', loai: 'chó' },
  { id: 4, tenSp: 'Thức ăn cho thú cưng D', gia: 450000, image: '../image/gioithieu2.png', loai: 'chó' },
  { id: 5, tenSp: 'Royal Canin Maxi Puppy - Thức Ăn Cao Cấp Dành Cho Chó', gia: 300000, image: '../image/gioithieu2.png', loai: 'chó' },
  { id: 6, tenSp: 'Thức ăn cho thú cưng B', gia: 350000, image: '../image/gioithieu2.png' },
  { id: 7, tenSp: 'Thức ăn cho thú cưng C', gia: 400000, image: '../image/gioithieu2.png' },
  { id: 8, tenSp: 'Thức ăn cho thú cưng D', gia: 450000, image: '../image/gioithieu2.png' },
  { id: 9, tenSp: 'Royal Canin Maxi Puppy - Thức Ăn Cao Cấp Dành Cho Chó', gia: 300000, image: '../image/gioithieu2.png' },
  { id: 10, tenSp: 'Thức ăn cho thú cưng B', gia: 350000, image: '../image/gioithieu2.png' },
  { id: 11, tenSp: 'Thức ăn cho thú cưng C', gia: 400000, image: '../image/gioithieu2.png' },
  { id: 12, tenSp: 'Thức ăn cho thú cưng D', gia: 450000, image: '../image/gioithieu2.png' },
  { id: 13, tenSp: 'Royal Canin Maxi Puppy - Thức Ăn Cao Cấp Dành Cho Chó', gia: 300000, image: '../image/gioithieu2.png' },
  { id: 14, tenSp: 'Thức ăn cho thú cưng đc', gia: 350000, image: '../image/gioithieu2.png' },
  { id: 15, tenSp: 'Thức ăn cho thú cưng 111', gia: 400000, image: '../image/gioithieu2.png' },
  { id: 16, tenSp: 'Thức ăn cho thú cưng G', gia: 450000, image: '../image/gioithieu2.png' },
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
    // Chuyển đổi giá trị của product.gia thành số
    const giaNum = product.gia; // Giả sử gia đã là số

    // Lọc theo loại chó/mèo
    if (filterType === 'cho' && !product.tenSp.toLowerCase().includes('chó')) {
        return false;
    }
    if (filterType === 'meo' && !product.tenSp.toLowerCase().includes('mèo')) {
        return false;
    }

    // Lọc theo giá
    if (filterPrice === '300000' && giaNum >= 300000) return false; // Chỉ hiển thị sản phẩm có giá nhỏ hơn 300000
    if (filterPrice === '300000-400000' && (giaNum < 300000 || giaNum > 400000)) return false; // Hiển thị sản phẩm trong khoảng 300000 - 400000
    if (filterPrice === '400000' && giaNum <= 400000) return false; // Chỉ hiển thị sản phẩm có giá lớn hơn 400000

    return true;
});

    
    


    return (
      <div className={styles.product}>
        <h1>SAN PHAM</h1>

        <div >
      <div className={styles.filterAnimal}>
      <select onChange={(e) => setFilterType(e.target.value)}>
    <option value="">Chọn sản phẩm</option>
    <option value="cho">Chó</option>
    <option value="meo">Mèo</option>
  </select>
      </div>

<div className={styles.filterPrice}>
<select onChange={(e) => setFilterPrice(e.target.value)}>
    <option value="">Chọn giá </option>
    <option value="300000">Dưới 300,000 VND</option>
    <option value="300000-400000">300,000 - 400,000 VND</option>
    <option value="400000">Trên 400,000 VND</option>
  </select>
</div>

</div>
<div style={{clear:'both'}}></div>


<div className={styles.columCardProduct}>
  {filteredProducts.map((product) => (
    <div className={styles.cardProduct} key={product.id}>
      <div className={styles.imgProduct}>
        {/* Sử dụng <Link> để dẫn đến trang chi tiết sản phẩm */}
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.tenSp} />
        </Link>
      </div>
      <div className={styles.informationProduct}>
      <div className={styles.nameProduct}>
          {/* Thêm <Link> cho tên sản phẩm */}
          <Link to={`/product/${product.id}`}  className={styles.linkProduct}>{product.tenSp}</Link>
      </div>
        <hr />
        <div className={styles.buyNowProduct}>
          <p className={styles.priceProduct}>{product.gia} VND</p>
          <div className={styles.overProduct}>
            <button className={styles.buyProduct} onClick={() => openPopup(product)}>Mua hàng</button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


        {/* Nút Xem thêm */}
        <div className={styles.btnSeeMoreProduct}><button>XEM THEM</button></div>

        {/* Hiển thị popup nếu isPopupOpen là true */}
        {selectedProduct && (
          <Popup product={selectedProduct} isOpen={isPopupOpen} onClose={closePopup} />
        )}
      </div>
    );
  }

  export default Product;
