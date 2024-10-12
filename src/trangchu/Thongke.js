import styles from './Thongke.module.css';

import './Thongke.module.css';
function Thongke(){
return(
<div className={styles.thongKe}>
<div className={styles.columCards}>
   <div className={styles.card}>
   <div className={styles.imageThongKe}>
        <img src='../image/gioithieu2.png'></img>
    </div>
    <div className={styles.thongKeTT}>
        <h2>2500</h2>
        <p>Ca cuu ho</p>
    </div>
   </div>


   <div className={styles.card}>
   <div className={styles.imageThongKe}>
        <img src='../image/gioithieu2.png'></img>
    </div>
    <div className={styles.thongKeTT}>
        <h2>2500</h2>
        <p>đã có chủ </p>
    </div>
   </div>


   <div className={styles.card}>
   <div className={styles.imageThongKe}>
        <img src='../image/gioithieu2.png'></img>
    </div>
    <div className={styles.thongKeTT}>
        <h2>2500</h2>
        <p>Chờ tìm chủ</p>
    </div>
   </div>


   <div className={styles.card}>
   <div className={styles.imageThongKe}>
        <img src='../image/gioithieu2.png'></img>
    </div>
    <div className={styles.thongKeTT}>
        <h2>2500</h2>
        <p>Chua san sang tim chu    </p>
    </div>
   </div>
</div>
</div>
);

}
export default Thongke;