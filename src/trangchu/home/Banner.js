import React, { useState, useEffect, useRef } from 'react';

// CSS
const styles = {
  banner: {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',

    backgroundColor: '#333',
  },
  bannerItems: {
    display: 'flex',
    transition: 'transform 0.8s ease-in-out', // Sử dụng transition \
  },
  item: {
    minWidth: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Bắt đầu từ phần tử thứ 1
  const [isTransitioning, setIsTransitioning] = useState(true); // Trạng thái chuyển động
  const bannerRef = useRef(null); // Tạo ref để điều khiển element
  const intervalTime = 3000; // Thời gian chuyển slide

  // Lưu ảnh trực tiếp trong đây 
  const image1 = "../image/banner.png";
  const image2 = "../image/banner.png";
  const image3 = "../image/banner.png";

  // Thêm ảnh 3 ở đầu và ảnh 1 ở cuối chuyển trang cho mượt 
  const totalBanners = [image3, image1, image2, image3, image1];

  // Hàm tự động chạy banner sau khi intervalTime
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, intervalTime);

    return () => clearInterval(slideInterval);
  }, []);

  // Hàm để kiểm tra và reset lại vị trí nếu đang ở clone đầu hoặc cuối
  useEffect(() => {
    const bannerElement = bannerRef.current;

    if (currentIndex === totalBanners.length - 1) {
      // Đang ở clone cuối cùng (chuyển từ Image 3 sang clone đầu Image 1)
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1); // Chuyển ngay về Image 1 mà không cần animation
      }, 800); // Thời gian chờ cho animation hoàn tất
    }

    if (currentIndex === 0) {
      // Đang ở clone đầu tiên (chuyển từ Image 1 sang clone cuối Image 3)
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalBanners.length - 2); // Chuyển ngay về Image 3 mà không cần animation
      }, 800); // Thời gian chờ cho animation hoàn tất
    }
  }, [currentIndex, totalBanners.length]);

  // Hàm điều chỉnh animation cho banner khi thay đổi vị trí
  useEffect(() => {
    const bannerElement = bannerRef.current;
    if (isTransitioning) {
      bannerElement.style.transition = 'transform 0.8s ease-in-out';
    } else {
      bannerElement.style.transition = 'none'; // Tắt transition để chuyển ngay lập tức
    }
    bannerElement.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex, isTransitioning]);

  return (
    <div style={styles.banner}>
      <div style={styles.bannerItems} ref={bannerRef}>
      
        {totalBanners.map((imgSrc, index) => (
          <div style={styles.item} key={index}>
            <img src={imgSrc} alt={`Banner ${index}`} style={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
