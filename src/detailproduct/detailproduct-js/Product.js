import React , { useState ,useEffect} from 'react';

import { useParams ,useNavigate } from 'react-router-dom';
import styles from '../detailproduct-css/detailProduct.module.css';
import Describe from './Describe';
import ProductOther from './ProductOther';


 function Product () {
  const { id } = useParams(); // Lấy id từ URL
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
  

const [cart, setCart] = useState([]); // khởi tạo giỏ hàng ban đầu là rỗng 
const navigate = useNavigate(); // Khởi tạo navigate
const [quantity, setQuantity] = useState(1); // State để theo dõi số lượng

useEffect(() => {
    const savedCart = localStorage.getItem('cart'); // lưu giỏ hàng để khi reload không bị mất
    if (savedCart) {
        setCart(JSON.parse(savedCart));
    }
}, []);
const handleQuantityChange = (e) => { // Hàm xử lý khi người dùng chọn số lượng
 setQuantity(parseInt(e.target.value));
};

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



  const product = products.find(p => p.id === parseInt(id));

  // Chọn mảng ảnh để làm chuyển ảnh 
  const images = [
    '../image/gioithieu2.png',
    '../image/gioithieu1.png',
    '../image/gioithieu2.png',
    '../image/gioithieu1.png'
];
// Set ảnh đầu tiền trong mảng để show + show thông tin vị 
const [currentIndex, setCurrentIndex] = useState(0);
const [selectedType, setSelectedType] = useState('Cá ngừ và tôm');

// Lệnh chọn ảnh 
const changeImage = (index) => {
    setCurrentIndex(index);
};

// Nút chuyển ảnh lên hoặc xuống 
const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
}; // Xét theo mảng 

const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
};


  if (!product) {
    return <h2>Sản phẩm không tồn tại!</h2>;
  }

  return (
    <div >
    <div className={styles.linkWeb}>
    <div className={styles.link}>
        <a href='/'>Trang chu </a> -- <a href='/sanpham'>San pham</a>
    </div>
    </div>
      <div className={styles.detailProducts}>
            {/* Hình ảnh nhỏ bên trái */}
           <div className={styles.images}>
           <div className={styles.imgSub}>
                <div className={styles.arrows}>
                    <button onClick={previousImage}>&#9650;</button> {/* Mũi tên lên */}
                </div>
                
                {images.map((image, index) => (
                    <img 
                        key={index}
                        src={image} // Thay đổi kích thước ảnh cho thumbnail
                        alt={`Image ${index + 1}`} 
                        className={index === currentIndex ? styles.active : ''} 
                        onClick={() => changeImage(index)} 
                    />
                ))}
                
                <div className={styles.arrows}>
                    <button onClick={nextImage}>&#9660;</button> {/* Mũi tên xuống */}
                </div>
            </div>
           

            {/* Hình ảnh chính */}
            <div className={styles.mainImage}>
                <img src={images[currentIndex]} alt="Main" />
            </div>
            </div>
            
            {/* Chi tiết sản phẩm */}
           <div className={styles.detailProduct}>
           <div className={styles.informationDetail}>
                <h1>{product.tenSp}</h1>
                <p className={styles.trademark}>Thương hiệu: ROYAL CANIN | Tình trạng: Còn hàng</p>
                <div className={styles.price}>
                <p className={styles.oldPrice}>{product.gia} VND  </p>
                <p className={styles.newPrice}>|99.000 VND</p>
                </div>
                <h4>LOAI : <span>{selectedType}</span></h4>
                <div className={styles.options}>
                    
                    <button onClick={() => setSelectedType('Cá ngừ & Tôm')}>Cá ngừ & Tôm</button>
                    <button onClick={() => setSelectedType('Cá ngừ & Mực')}>Cá ngừ & Mực</button>
                    <button onClick={() => setSelectedType('Cá ngừ & Gà')}>Cá ngừ & Gà</button>


                
                </div>
               <div className={styles.quantitys}> <label >CHỌN SỐ LƯỢNG : </label></div>
                <div className={styles.quantity}>
                <input
                type="number"
                id="quantity"
                value={quantity}
                min={1}
                onChange={handleQuantityChange}
            />
                    <button className={styles.addToCartBtn}  onClick={() => addToCart(product)}>THEM VAO GIO HANG</button>
                    
                </div>

               
            </div>
           </div>

         
        </div>
        <Describe/>
        <ProductOther/>
    </div>
  );
};

export default Product;




