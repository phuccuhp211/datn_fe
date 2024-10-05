import React from 'react';


// Importing images (replace with your actual image paths)
import dogImage from '../assets/ta2.png';
import dogAndPersonImage from '../assets/img2.png';
import catImage from '../assets/img1.png';
import dogAndDoorImage from '../assets/a1.png';

function ThongTin() {
  return (
    <div className="info-page">
      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          {/* First Item */}
          <div className="about-item">
            <img src={dogImage} alt="Dog" className="about-image" />
            <div className="about-text">
              <h2>Về Chúng Tôi</h2>
              <p>
                Chúng tôi là nhóm giải vất cứu và tìm kiếm động vật, chúng tôi sẽ kể cho bạn nghe về dự án của chúng tôi.
              </p>
            </div>
          </div>

          {/* Second Item */}
          <div className="about-item">
            <div className="about-text">
              <h2>Tinh Thần Khỏe Mạnh</h2>
              <p>
                Đối với nhiều người, đặc biệt là những người cô đơn, nuôi thú cưng có thể là một nguồn an ủi và bầu bạn quý giá và đó là cách tốt trong việc...
              </p>
            </div>
            <img src={dogAndPersonImage} alt="Dog and Person" className="about-image" />
          </div>

          {/* Third Item */}
          <div className="about-item">
            <img src={catImage} alt="Cat" className="about-image" />
            <div className="about-text">
              <h2>Xã Hội Hóa Động Vật</h2>
              <p>
                Đối với nhiều người, đặc biệt là những người cô đơn, nuôi thú cưng có thể là một nguồn an ủi và bầu bạn quý giá...
              </p>
            </div>
          </div>

          {/* Fourth Item */}
          <div className="about-item">
            
            <div className="about-text">
              <h2>Sự Tiện Lợi</h2>
              <p>
                Bạn có thể tiết kiệm thời gian để rất rời, thuận tiện cho bạn,
                 rất nhiều tiện ích giúp bạn dẽ dàng hơn trong việc chăm sóc thú cưng của bạn cách  tốt nhất...
              </p>
            </div>
            <img src={dogAndDoorImage} alt="Dog and Door" className="about-image" />
          </div>

          {/* Call to Action Button */}
          <div className="cta-button">
            <button>Về Chúng Tôi</button>
          </div>
        </div>
      </section>
      <section className="support-section">
        <h2 className="support-title">Ủng Hộ</h2>
        <div className="support-cards">
          {/* Support Card 1 */}
          <div className="support-card">
            <div className="support-card-image">
              <img src={dogAndPersonImage} alt="Dog Support" />
            </div>
            <div className="support-card-content">
              <h3>Ủng Hộ</h3>
              <p>Giúp dự án PHA qua hình thức chuyển giao dịch hoặc nhu yếu phẩm.</p>
              <button className="support-card-button">Tìm hiểu thêm</button>
            </div>
          </div>

          {/* Support Card 2 */}
          <div className="support-card">
            <div className="support-card-image">
              <img src={dogAndPersonImage} alt="Dog Support" />
            </div>
            <div className="support-card-content">
              <h3>Ủng Hộ</h3>
              <p>Giúp dự án PHA qua hình thức chuyển giao dịch hoặc nhu yếu phẩm.</p>
              <button className="support-card-button">Tìm hiểu thêm</button>
            </div>
          </div>

          {/* Support Card 3 */}
          <div className="support-card">
            <div className="support-card-image">
              <img src={dogAndPersonImage} alt="Dog Support" />
            </div>
            <div className="support-card-content">
              <h3>Ủng Hộ</h3>
              <p>Giúp dự án PHA qua hình thức chuyển giao dịch hoặc nhu yếu phẩm.</p>
              <button className="support-card-button">Tìm hiểu thêm</button>
            </div>
          </div>

          {/* Support Card 4 */}
          <div className="support-card">
            <div className="support-card-image">
              <img src={dogAndPersonImage} alt="Dog Support" />
            </div>
            <div className="support-card-content">
              <h3>Ủng Hộ</h3>
              <p>Giúp dự án PHA qua hình thức chuyển giao dịch hoặc nhu yếu phẩm.</p>
              <button className="support-card-button">Tìm hiểu thêm</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ThongTin;
