import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Đảm bảo đã cài đặt axios
import './ProductManagement.css';
import ProductForm from './ProductForm'; // Form thêm/sửa sản phẩm

function ProductManagement() {
  // States
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [priceDetails, setPriceDetails] = useState(null);
  const itemsPerPage = 5; // số sản phẩm trên mỗi trang

  // Lấy dữ liệu sản phẩm từ API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/products'); // Đường dẫn API sản phẩm
        setProducts(response.data); // Giả sử response.data là mảng sản phẩm
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const fetchPrices = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/prices'); // Đường dẫn API giá
        const prices = response.data.prices;

        // Tìm giá của sản phẩm có id = 1
        const priceItem = prices.find(price => price.id === 1);

        if (priceItem) {
          setPriceDetails({
            originalPrice: priceItem.price,
            salePrice: priceItem.sale,
            sizeName: priceItem.name, // Lấy size name
          });
        }
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchProducts();
    fetchPrices();
  }, []);

  // Xử lý tìm kiếm
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset về trang đầu tiên khi tìm kiếm
  };

  // Lọc sản phẩm
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Phân trang
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Xử lý thêm/sửa sản phẩm
  const handleAddEdit = (product = null) => {
    setCurrentProduct(product);
    setIsEditing(true);
  };

  // Xử lý xóa sản phẩm
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Xử lý gửi form thêm/sửa sản phẩm
  const handleFormSubmit = (newProduct) => {
    if (currentProduct) {
      // Chỉnh sửa sản phẩm
      setProducts(products.map((product) => (product.id === currentProduct.id ? newProduct : product)));
    } else {
      // Thêm sản phẩm mới
      setProducts([...products, { ...newProduct, id: products.length + 1, isVisible: true }]);
    }
    setIsEditing(false);
  };

  // Xử lý thay đổi trạng thái sản phẩm
  const toggleVisibility = (id) => {
    setProducts(products.map((product) => 
      product.id === id ? { ...product, isVisible: !product.isVisible } : product
    ));
  };

  return (
    <div className="product-management">
      <h2>Quản lý sản phẩm</h2>

      {/* Thanh tìm kiếm và nút thêm sản phẩm */}
      <div className="search-add-container">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button onClick={() => handleAddEdit()}>Thêm sản phẩm mới</button>
      </div>

      {/* Hiển thị giá của sản phẩm có id = 1 */}
      {priceDetails && (
        <div className="price-display">
          <h3>Thông tin giá</h3>
          <p>Kích thước: {priceDetails.sizeName}</p>
          <p>Giá gốc: {priceDetails.originalPrice} VND</p>
          <p>Giá Sale: {priceDetails.salePrice} VND</p>
        </div>
      )}

      {/* Danh sách sản phẩm */}
      {!isEditing ? (
        <>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Hình ảnh</th>
                <th>Thương hiệu</th>
                <th>Size</th>
                <th>Giá</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product, index) => (
                <tr key={product.id}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{product.name}</td>
                  <td>
                    <img src={product.image || 'placeholder.jpg'} alt={product.name} width="50" />
                  </td>
                  <td>{product.brand}</td>
                  <td>{product.size}</td>
                  <td>{product.price}</td>
                  <td>
                    <button onClick={() => toggleVisibility(product.id)}>
                      {product.isVisible ? 'Hiện' : 'Ẩn'}
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleAddEdit(product)}>Sửa</button>
                    <button onClick={() => handleDelete(product.id)}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Phân trang */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={currentPage === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      ) : (
        <ProductForm
          product={currentProduct}
          onSubmit={handleFormSubmit}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
}

export default ProductManagement; 
