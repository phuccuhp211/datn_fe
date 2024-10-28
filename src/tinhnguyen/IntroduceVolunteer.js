import React from 'react';
import styles from './Volunteer.module.css';


const IntroduceVolunteer = () => {
    return (
   <div>
        
<div className={styles.linkWeb}>
    <div className={styles.link}>
        <a href='/'>Trang chu </a> -- <a href='/sanpham'>San pham</a>
    </div>
</div>
<div className={styles.introductionProduct}>
<h1>Gioi thieu ve tinh nguyen vien </h1>
<hr></hr>
<div className={styles.informationProduct}>
       <p>
       Tại [Tên thương hiệu], chúng tôi hiểu rằng thú cưng không chỉ là bạn đồng 
       hành mà còn là thành viên quan trọng trong gia đình. Đó là lý do vì sao chúng
        tôi mang đến dòng sản phẩm thức ăn thú cưng chất lượng cao, giúp thú cưng của bạn phát triển khỏe mạnh và tràn đầy năng lượng.
<br/><br/>
Với sứ mệnh mang lại sự an toàn và dinh dưỡng tốt nhất cho thú cưng, [Tên thương hiệu] 
giới thiệu dòng sản phẩm thức ăn được thiết kế để cung cấp tất cả các dưỡng chất thiết yếu, 
đảm bảo thú cưng của bạn luôn mạnh khỏe và hạnh phúc.
       </p>
    </div>
    <div className={styles.imgIntroduction}>
        <img src='../image/gioithieu2.png'></img>
    </div>
</div>
<div style={{clear:'both'}}></div>
   </div>
    );
}

export default IntroduceVolunteer;
