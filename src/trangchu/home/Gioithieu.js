// phan gioi thieu VE CHUNG TOI cua trang chu

import styles from '../home-css/Gioithieu.module.css';

import '../home-css/Gioithieu.module.css';
function Gioithieu(){
return(
<div>
  <div className={styles.bao}>
<div className={styles.baoGioiThieu}>

  <div className={styles.gioiThieu1}>
  <div className={styles.anhGioiThieu1}>
<img src='../image/gioithieu1xp.png' ></img>
  </div>
  <div className={styles.noiDung1}>
  <h2>VỀ CHÚNG TÔI </h2>
   <p>Chúng tôi là nhóm giải vất cứu và tìm kiếm động vật , chúng tôi 
     sẽ kể cho bạn nghe về dự án của cxhúng tôi!</p></div>
  </div>
  <div style={{clear:'both'}}></div>


  <div className={styles.gioiThieu2}>
    <div className={styles.anhGioiThieu2}>
      <img src='../image/gioithieu2.png'>
      </img>
    </div>
   <div className={styles.noiDung2}>
   <h2>TINH THẦN KHỎE MẠNH  </h2>
   <p>Đối với nhiều người, đặc biệt là những người cô đơn, nuôi thú 
     cưng có thể là một nguồn an ủi và bầu bạn quý giá. Mua thú cưng
      mang đến cho những người cô đơn cơ hội tận hưởng sự hiện diện và tình yêu của thú
       cưng, điều này có thể cải thiện đáng kể tâm trạng và sức khỏe của họ vào thời điểm khó khăn như vậy.</p>
   </div>
  </div>
  
  
  <div className={styles.gioiThieu3}>
  <div className={styles.anhGioiThieu3}>
      <img src='../image/gioithieu2.png'>
      </img>
    </div>
   <div className={styles.noiDung3}>
   <h2>XÃ HỘI HÓA ĐỘNG VẬT  </h2>
   <p>Đối với nhiều người, đặc biệt là những người cô đơn, nuôi thú cưng có thể
      là một nguồn an ủi và bầu bạn quý giá. Mua thú cưng mang đến cho những người
       cô đơn cơ hội tận hưởng sự hiện diện và tình yêu của thú cưng, điều này có thể
        cải thiện đáng kể tâm trạng và sức khỏe của họ vào thời điểm khó khăn như vậy.</p>
   </div>
  </div>
  
  
  <div className={styles.gioiThieu4}>
  <div className={styles.anhGioiThieu4}>
      <img src='../image/gioithieu2.png'>
      </img>
    </div>
  <div className={styles.noiDung4}>
  <h2>SỰ TIỆN LỢI  </h2>
   <p>Bạn có thể tiết kiệm thời gian để rải tờ rơi , thuận tiện cho bạn.
      Tất cả những gì bạn cần là liên hệ với chúng tôi và cung cấp thông tintin. </p>
  </div>
  </div>
  <div className={styles.btnGioiThieu}>  <button >TIM HIEU THEM</button></div>
    </div>


</div>

</div>
);

}
export default Gioithieu;