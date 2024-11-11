import React, { useState, useEffect } from 'react';

function NewsForm({ news, onSubmit, onCancel }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null); // Thay đổi về null

  useEffect(() => {
    if (news) {
      setTitle(news.title);
      setDate(news.date);
      setSubtitle(news.subtitle);
      setContent(news.content);
      setImage(news.image);
    }
  }, [news]);

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Lấy file đầu tiên từ input
    if (file) {
      setImage(URL.createObjectURL(file)); // Tạo URL tạm thời cho hình ảnh
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: news ? news.id : Date.now(),
      title,
      date,
      subtitle,
      content,
      image // Hình ảnh là URL tạm thời
    };
    onSubmit(newData);
  };

  return (
    <div>
      <h2>{news ? 'Sửa Tin tức' : 'Thêm Tin tức mới'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Tiêu đề:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        
        <label>Ngày đăng:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        
        <label>Phụ đề:</label>
        <input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} required />
        
        <label>Nội dung:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
        
        <label>Hình ảnh:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        
        {/* Hiển thị hình ảnh đã chọn */}
        {image && <img src={image} alt="Preview" style={{ width: '100%', marginTop: '10px' }} />}
        
        <button type="submit">Lưu</button>
        <button type="button" onClick={onCancel}>Hủy</button>
      </form>
    </div>
  );
}

export default NewsForm;
