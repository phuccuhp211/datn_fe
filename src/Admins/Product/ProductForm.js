import React, { useState, useEffect } from 'react';

function ProductForm({ product, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    size: '',
    price: '',
    image: ''
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div style={{ flex: '1', marginRight: '20px', textAlign: 'center' }}>
        {formData.image ? (
          <img src={formData.image} alt="Product Preview" style={{ width: '100%', height: 'auto' }} />
        ) : (
          <p>Chưa có hình ảnh</p>
        )}
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          style={{ marginTop: '10px' }}
        />
      </div>
      
      <div style={{ flex: '2' }}>
        <h3>{product ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm mới'}</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>Tên sản phẩm:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Thương hiệu:</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Size:</label>
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Giá:</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <button type="submit" style={{ marginRight: '10px' }}>Lưu</button>
          <button type="button" onClick={onCancel}>Hủy</button>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
