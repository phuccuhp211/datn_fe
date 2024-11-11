import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../detailproduct-css/detailProduct.module.css';
import Describe from './Describe';
import ProductOther from './ProductOther';


function Product() {
  const { id } = useParams(); // Lấy id từ URL
  const [product, setProduct] = useState(null); // State lưu thông tin sản phẩm
  const [cart, setCart] = useState([]); // khởi tạo giỏ hàng ban đầu là rỗng
  const navigate = useNavigate(); // Khởi tạo navigate
  const [quantity, setQuantity] = useState(1); // State để theo dõi số lượng
  const [currentIndex, setCurrentIndex] = useState(0); // Để hiển thị ảnh chính
  const [selectedOption, setSelectedOption] = useState(null); // Tùy chọn sản phẩm (flavor)
  const [selectedSize, setSelectedSize] = useState(null); // Tùy chọn sản phẩm (size)

  // Lấy thông tin sản phẩm từ API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/products/detail/${id}`);
        const data = await response.json();
        setProduct(data);
        if (data.sizes && data.sizes.length > 0) {
          setSelectedSize(data.sizes[0]); // Chọn size đầu tiên mặc định
          setSelectedOption(data.sizes[0].options[0]); // Chọn flavor đầu tiên mặc định
        }
      } catch (error) {
        console.error('Lỗi khi lấy chi tiết sản phẩm:', error);
      }
    };
    fetchProduct();
  }, [id]);

  // Giữ giỏ hàng khi reload trang
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const addToCart = () => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      let newCart;

      if (existingProduct) {
        newCart = prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: Number(item.quantity) + Number(quantity) } : item 
        );
      } else {
        newCart = [...prevCart, { ...product, quantity, selectedSize, selectedOption }];
      }

      localStorage.setItem('cart', JSON.stringify(newCart));
      navigate('/giohang');
      console.log(newCart);
      return newCart;
    });
  };

  // Thay đổi ảnh
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex < product.images.length - 1 ? prevIndex + 1 : 0));
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : product.images.length - 1));
  };

  // Cập nhật kích thước và tùy chọn flavor khi người dùng chọn
  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setSelectedOption(size.options[0]); // Khi chọn kích thước khác, chọn tùy chọn đầu tiên mặc định
  };

  if (!product) {
    return <h2>Sản phẩm không tồn tại!</h2>;
  }

  return (
    <div>
      <div className={styles.linkWeb}>
        <div className={styles.link}>
          <a href='/'>Trang chủ</a> -- <a href='/sanpham'>Sản phẩm</a>
        </div>
      </div>
      <div className={styles.detailProducts}>
        {/* Hình ảnh */}
        <div className={styles.images}>
          <div className={styles.imgSub}>
            <div className={styles.arrows}>
              <button onClick={previousImage}>&#9650;</button>
            </div>

            {product.images.map((image, index) => (
              <img
                key={index}
                src={`/image/${product.images[index]}`}
                alt={`Image ${index + 1}`}
                className={index === currentIndex ? styles.active : ''}
                onClick={() => setCurrentIndex(index)}
              />
            ))}

            <div className={styles.arrows}>
              <button onClick={nextImage}>&#9660;</button>
            </div>
          </div>

          {/* Hình ảnh chính */}
          <div className={styles.mainImage}>
            <img src={`/image/${product.images[0]}`} alt="Main" />
          </div>
        </div>

        {/* Chi tiết sản phẩm */}
        <div className={styles.detailProduct}>
          <div className={styles.informationDetail}>
            <h1>{product.name}</h1>
            <p className={styles.trademark}>Thương hiệu: {product.trademark} | Tình trạng: Còn hàng</p>
            <div className={styles.price}>
              <p className={styles.oldPrice}>{selectedSize?.price} VND</p>
              <p className={styles.newPrice}>{selectedSize?.discount_price || selectedSize?.price} VND</p>
            </div>

            {/* Tùy chọn kích thước */}
            <h4>CHỌN KÍCH THƯỚC:</h4>
            <div className={styles.options}>
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className={selectedSize?.id === size.id ? styles.selected : ''}
                  onClick={() => handleSizeChange(size)}
                >
                  {size.size}
                </button>
              ))}
            </div>

            {/* Tùy chọn flavor */}
            <h4>TÙY CHỌN:</h4>
            <div className={styles.options}>
              {selectedSize?.options.map((option, index) => (
                <button
                  key={index}
                  className={selectedOption?.flavor === option.flavor ? styles.selected : ''}
                  onClick={() => setSelectedOption(option)}
                >
                  {option.flavor}
                </button>
              ))}
            </div>

            {/* Số lượng */}
            <div className={styles.quantitys}>
              <label>CHỌN SỐ LƯỢNG: </label>
              <div className={styles.quantity}>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  min={1}
                  onChange={handleQuantityChange}
                />
                <button className={styles.addToCartBtn} onClick={addToCart}>THÊM VÀO GIỎ HÀNG</button>
              </div>
            </div>
          </div>
        </div>
      </div>
   
      <Describe />
      <ProductOther />
    </div>
  );
}

export default Product;
