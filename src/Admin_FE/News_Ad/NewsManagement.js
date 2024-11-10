import React, { useState, useEffect } from 'react';
import './news.css';
import NewsForm from './NewsForm';

function NewsManagement() {
  const [newsList, setNewsList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentNews, setCurrentNews] = useState(null);

  // Hàm để gọi API và lấy danh sách tin tức
  const fetchNews = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/admin/stories');
      const data = await response.json();
      if (data.status) {
        // Chuyển đổi dữ liệu theo định dạng cần thiết cho bảng
        const formattedNews = data.data.map(news => ({
          id: news.id,
          title: news.title,
          date: new Date(news.date).toLocaleDateString('vi-VN'), // Định dạng ngày tháng
          subtitle: news.catalog_id, // Nếu có trường phụ đề, có thể lấy từ catalog_id
          content: news.content,
          image: news.thumbnail // Sử dụng thumbnail làm hình ảnh
        }));
        setNewsList(formattedNews);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
    }
  };

  // Sử dụng useEffect để gọi fetchNews khi component được mount
  useEffect(() => {
    fetchNews();
  }, []);

  const handleAdd = () => {
    setCurrentNews(null);
    setIsEditing(true);
  };

  const handleEdit = (news) => {
    setCurrentNews(news);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setNewsList(newsList.filter(news => news.id !== id));
  };

  const handleFormSubmit = (newData) => {
    if (currentNews) {
      setNewsList(newsList.map(news => (news.id === currentNews.id ? newData : news)));
    } else {
      setNewsList([...newsList, { ...newData, id: newsList.length + 1 }]);
    }
    setIsEditing(false);
  };

  return (
    <div>
      <h2>Quản lý Tin tức</h2>
      {!isEditing ? (
        <div>
          <button onClick={handleAdd}>Thêm tin tức mới</button>
          <table>
            <thead>
              <tr>
                <th>Ngày đăng</th>
                <th>Tiêu đề</th>
                <th>Hình ảnh</th>
                <th>Phụ đề</th>
                <th>Nội dung</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {newsList.map(news => (
                <tr key={news.id}>
                  <td>{news.date}</td>
                  <td>{news.title}</td>
                  <td><img src={news.image} alt={news.title} /></td>
                  <td>{news.subtitle}</td>
                  <td>{news.content}</td>
                  <td>
                    <button onClick={() => handleEdit(news)}>Sửa</button>
                    <button onClick={() => handleDelete(news.id)}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <NewsForm
          news={currentNews}
          onSubmit={handleFormSubmit}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
}

export default NewsManagement;
