import React, { useState, useEffect } from 'react';

function SanPham() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleClick = (product) => {
    console.log(product);
  };

  return (
    <div className="product-page">
      <h1 className="title">Sản Phẩm</h1>
      <div className="product-grid">
        {/* Sử dụng slice để giới hạn số lượng sản phẩm hiển thị */}
        {data.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="product-card"
            onClick={() => handleClick(item)}
          >
            {/* <img
              src={`${process.env.PUBLIC_URL}/assets/products/${item.img}`}
              alt={item.name}
              className="product-image"
            /> */}
            <div className="product-info">
            <img
              src={require(`../assets/products/${item.img}`)} // Đường dẫn chính xác tới thư mục assets
              alt={item.name}
            />
              <h2>{item.name}</h2>

              {/* Hiển thị giá của sản phẩm dựa trên kích thước đầu tiên */}
              {item.sizes.length > 0 ? (
                <p>Giá: {item.sizes[0].pivot.price} VND</p>
              ) : (
                <p>Giá: Không có thông tin</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="see-more">
        <button className="see-more-button">Xem Thêm</button>
      </div>
    </div>
  );
}

export default SanPham;
