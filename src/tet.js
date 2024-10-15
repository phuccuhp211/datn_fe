import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

const products = [
    { id: 1, tenSp: 'Royal Canin Maxi Puppy - Thức Ăn Cao Cấp Dành Cho Chó', gia: '300,000', image: '../image/gioithieu2.png', loai: 'chó' },
    { id: 2, tenSp: 'Thức ăn cho thú cưng B', gia: '350,000', image: '../image/gioithieu2.png', loai: 'chó' },
    { id: 3, tenSp: 'Thức ăn cho thú cưng C', gia: '400,000', image: '../image/gioithieu2.png', loai: 'chó' },
    { id: 4, tenSp: 'Thức ăn cho thú cưng D', gia: '450,000', image: '../image/gioithieu2.png', loai: 'chó' },
  
];

const Cart = ({ cart }) => {
    return (
        <div>
            <h2>Giỏ Hàng</h2>
            {cart.length > 0 ? (
                cart.map(item => (
                    <div key={item.id}>
                        <p>{item.tenSp} - Số lượng: {item.quantity}</p>
                    </div>
                ))
            ) : (
                <p>Giỏ hàng trống!</p>
            )}
        </div>
    );
};

const Products = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate(); // Khởi tạo navigate

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            let newCart;

            if (existingProduct) {
                newCart = prevCart.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                newCart = [...prevCart, { ...product, quantity: 1 }];
            }

            localStorage.setItem('cart', JSON.stringify(newCart));
            navigate('/cart'); // Chuyển hướng sang trang giỏ hàng
            return newCart;
        });
    };

    return (
        <div>
            <h1>Sản Phẩm</h1>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.tenSp} />
                        <h2>{product.tenSp}</h2>
                        <p>Giá: {product.gia} VND</p>
                        <button onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Giohang = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    return (
        <Router>
            <nav>
                <Link to="/">Trang Sản Phẩm</Link>
                <Link to="/cart">Giỏ Hàng</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/cart" element={<Cart cart={cart} />} />
            </Routes>
        </Router>
    );
};

export default Giohang;
