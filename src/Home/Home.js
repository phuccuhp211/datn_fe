
import React, { useState } from 'react';
import productImage from '../assets/img1.png'; // Đường dẫn tới ảnh sản phẩm của bạn
import productImage2 from '../assets/img2.png';
import productImage3 from '../assets/a1.png';
const Home = () => {
const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Về Chúng Tôi",
      text: "Chúng tôi là nhóm giải vất cứu và tìm kiếm động vật. Chúng tôi sẽ kể cho bạn nghe về dự án của chúng tôi!",
      image: productImage,
      buttonText: 'Đọc thêm',
    },
    {
      title: "Tinh Thần Khỏe Mạnh",
      text: "Đối với nhiều người, đặc biệt là những người cô đơn, nuôi thú cưng có thể là một nguồn an ủi và bảo bạn quý giá.",
      image: productImage3,
    },
    {
      title: "Xã Hội Hóa Động Vật",
      text: "Đối với nhiều người cô đơn, nuôi thú cưng mang đến cho họ niềm vui và sức khỏe tinh thần.",
      image: productImage2,
    },
    {
      title: "Sự Tiện Lợi",
      text: "Bạn có thể tiết kiệm thời gian để tận hưởng thú cưng và làm bạn với chúng.",
      image: productImage3,
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slideshow-container">
      <div className="slide">
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
        <div className="slide-text">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].text}</p>
        </div>
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Home;
