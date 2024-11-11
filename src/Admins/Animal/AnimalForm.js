import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AnimalForm({ animal, onSubmit, onCancel }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [color, setColor] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('Đực');
  const [type, setType] = useState('');
  const [genitive, setGenitive] = useState('');
  const [healthInfo, setHealthInfo] = useState('');
  const [language, setLanguage] = useState('vi');
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState([]); // Khởi tạo là một mảng rỗng

  // Lấy danh sách loại thú cưng từ API khi component được mount
  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/admin/animal_catalogs');
        if (response.data.status && Array.isArray(response.data.data)) {
          setTypes(response.data.data); // Cập nhật state với dữ liệu từ API
        } else {
          console.error("Dữ liệu không phải là mảng:", response.data);
          setTypes([]); // Đặt lại thành mảng rỗng nếu dữ liệu không đúng
        }
      } catch (error) {
        console.error("Có lỗi khi lấy danh sách loại thú cưng", error);
      }
    };

    fetchTypes();
  }, []);

  // Đổ dữ liệu khi chỉnh sửa
  useEffect(() => {
    if (animal) {
      setName(animal.name || '');
      setAge(animal.age || '');
      setWeight(animal.weight || '');
      setColor(animal.colors || '');
      setStatus(animal.status || '');
      setGender(animal.gender || 'Đực');
      setType(animal.type || '');
      setGenitive(animal.genitive || '');
      setHealthInfo(animal.health_info || '');
      setLanguage(animal.language || 'vi');
      setPreviewImage(animal.image || null);
    }
  }, [animal]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('weight', weight);
    formData.append('colors', color);
    formData.append('status', status);
    formData.append('gender', gender);
    formData.append('type', type);
    formData.append('genitive', genitive);
    formData.append('health_info', healthInfo);
    formData.append('language', language);
    if (image) formData.append('image', image);

    try {
      if (animal) {
        // Cập nhật thú cưng
        await axios.put(`http://localhost:8000/api/admin/animals/put/${animal.id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        // Tạo mới thú cưng
        await axios.post('http://localhost:8000/api/admin/animals/post', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }
      onSubmit(); // Gọi hành động sau khi thành công
    } catch (error) {
      console.error("Có lỗi khi gửi form", error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ flex: '1', marginRight: '20px' }}>
        {previewImage && (
          <img
            src={previewImage}
            alt="Preview"
            style={{ width: '100%', height: 'auto', padding: previewImage ? '50px' : '0' }}
          />
        )}
      </div>
      <div style={{ flex: '2' }}>
        <h2>{animal ? 'Sửa Thú cưng' : 'Thêm Thú cưng mới'}</h2>
        <form onSubmit={handleSubmit}>
          <label>Tên thú cưng:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />

          <label>Tuổi:</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />

          <label>Cân nặng:</label>
          <input value={weight} onChange={(e) => setWeight(e.target.value)} required />

          <label>Màu sắc:</label>
          <input value={color} onChange={(e) => setColor(e.target.value)} required />

          <label>Tình trạng:</label>
          <input value={status} onChange={(e) => setStatus(e.target.value)} required />

          <label>Giống:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="Đực">Đực</option>
            <option value="Cái">Cái</option>
          </select>

          <label>Loại thú cưng:</label>
          <select value={type} onChange={(e) => setType(e.target.value)} required>
            {types.length > 0 ? (
              types.map((t) => (
                <option key={t.id} value={t.name}>{t.name}</option>
              ))
            ) : (
              <option value="">Không có loại thú cưng nào</option>
            )}
          </select>

          <label>Thông tin sức khỏe:</label>
          <textarea value={healthInfo} onChange={(e) => setHealthInfo(e.target.value)} required />

          <label>Ngôn ngữ:</label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)} required>
            <option value="vi">Tiếng Việt</option>
            <option value="eng">Tiếng Anh</option>
          </select>

          <label>Hình ảnh:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} required />

          <button type="submit" disabled={loading}>{loading ? 'Đang lưu...' : 'Lưu'}</button>
          <button type="button" onClick={onCancel}>Hủy</button>
        </form>
      </div>
    </div>
  );
}

export default AnimalForm;
