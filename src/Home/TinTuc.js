import React from 'react';
import dogImage from '../assets/a1.png'; // Thay thế bằng hình ảnh chó của bạn
import dogAndPersonImage from '../assets/img1.png';
import catImage from '../assets/img2.png';
const TinTuc = () => {
  const newsArticles = [
    {
      title: "Chú chó sinh ra với một mắt hai mũi...",
      description:
        "Khuyết tật bẩm sinh không thể ngăn chú chó giúp ích cho mọi người xung quanh và sống một cuộc sống mạnh mẽ.",
      image: dogImage, // Hình ảnh của chú chó
    },
    {
      title: "Chú chó sinh ra với một mắt hai mũi...",
      description:
        "Khuyết tật bẩm sinh không thể ngăn chú chó giúp ích cho mọi người xung quanh và sống một cuộc sống mạnh mẽ.",
      image: dogImage,
    },
    {
      title: "Chú chó sinh ra với một mắt hai mũi...",
      description:
        "Khuyết tật bẩm sinh không thể ngăn chú chó giúp ích cho mọi người xung quanh và sống một cuộc sống mạnh mẽ.",
      image: dogImage,
    },
  ];

  return (
    <div className="news-page">
      <h1 className="title">TIN TỨC</h1>
      <div className="news-grid">
        {newsArticles.map((article, index) => (
          <div className="news-card" key={index}>
            <img src={article.image} alt="Dog news" className="news-image" />
            <div className="news-info">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="read-more">
        <button className="read-more-button">Đọc Thêm</button>
      </div>

      <div className="statistics">
        <div className="stat-card">
          <h3>2500</h3>
          <p>Ca Cứu Hộ</p>
          <img src={dogImage} alt="Dog" className="about-image" />
        </div>
        <div className="stat-card">
          <h3>2500</h3>
          <p>Đã Có Chủ</p>
          <img src={dogAndPersonImage} alt="Dog" className="about-image" />
        </div>
        <div className="stat-card">
          <h3>2500</h3>
          <p>Chờ Tìm Chủ</p>
          <img src={catImage} alt="Dog" className="about-image" />
        </div>
        <div className="stat-card">
          <h3>2500</h3>
          <p>Chưa Sẵn Sàng Tìm Chủ</p>
          <img src={dogImage} alt="Dog" className="about-image" />
        </div>
      </div>
    </div>
  );
};

export default TinTuc;
