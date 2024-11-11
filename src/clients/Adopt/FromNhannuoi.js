import "./FromNhannuoi.css";
import React, { useState } from 'react';

const AdoptionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: '',
    phone: '',
    reason: '',
    termsAccepted: false,
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    age: '',
    address: '',
    phone: '',
    reason: '',
    termsAccepted: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Vui lòng nhập tên';
    if (!formData.age || isNaN(formData.age)) errors.age = 'Vui lòng nhập độ tuổi hợp lệ';
    if (!formData.address) errors.address = 'Vui lòng nhập địa chỉ';
    if (!formData.phone) errors.phone = 'Vui lòng nhập số điện thoại';
    if (!formData.reason) errors.reason = 'Vui lòng nhập lý do nhận nuôi';
    if (!formData.termsAccepted) errors.termsAccepted = 'Bạn cần đồng ý với điều khoản';

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Nếu không có lỗi, form hợp lệ
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Dữ liệu form:', formData);
      // Gửi dữ liệu form tới server hoặc xử lý ở đây
    }
  };

  return (
    <div className="container-form">
      <h2 className="form-name">Form Nhận Nuôi</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Họ và Tên:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
          {formErrors.name && <span style={{ color: 'red' }}>{formErrors.name}</span>}
        </div>

        <div>
          <label htmlFor="age">Tuổi:</label>
          <input type="text" id="age" name="age" value={formData.age} onChange={handleChange}/>
          {formErrors.age && <span style={{ color: 'red' }}>{formErrors.age}</span>}
        </div>

        <div>
          <label htmlFor="address">Địa chỉ:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange}/>
          {formErrors.address && <span style={{ color: 'red' }}>{formErrors.address}</span>}
        </div>

        <div>
          <label htmlFor="address">SĐT:</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange}/>
          {formErrors.address && <span style={{ color: 'red' }}>{formErrors.phone}</span>}
        </div>

        <div>
          <label htmlFor="reason">Lý do nhận nuôi:</label>
          <textarea id="reason" name="reason" value={formData.reason} onChange={handleChange}/>
          {formErrors.reason && <span style={{ color: 'red' }}>{formErrors.reason}</span>}
        </div>

        <div>
          <label>
            <input type="checkbox" name="termsAccepted"  checked={formData.termsAccepted}  onChange={handleChange}/>
            Tôi đồng ý với các điều khoản và điều kiện.
          </label>
          {formErrors.termsAccepted && <span style={{ color: 'red' }}>{formErrors.termsAccepted}</span>}
        </div>

        <button type="submit">Gửi Đơn</button>
      </form>
    </div>
  );
};

export default AdoptionForm;
