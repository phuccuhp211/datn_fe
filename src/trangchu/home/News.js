// phan tin tuc o trang chu
import styles from '../home-css/Home.module.css';
function News(){
return(
<div className={styles.news}>
<h1>TIN TUC</h1>
<div className={styles.columCardNews}>
<div className={styles.cardNews}>
        <div className={styles.imgNews}>
            <img src='../image/gioithieu2.png'></img>
        </div>
        <div className={styles.informationNews}>
            <p className={styles.titleNews}>Chu cho sinh ra voi mot mat hai mui  </p>
            <p className={styles.informationNew}>Khuyết tật bẩm sinh khiến chú chó gặp rất nhiều trở ngại nhưng sức sống mãnh 
                liệt đã chiến thắng tất cả.</p>
        </div>
    </div>


    <div className={styles.cardNews}>
        <div className={styles.imgNews}>
            <img src='../image/gioithieu2.png'></img>
        </div>
        <div className={styles.informationNews}>
            <p className={styles.titleNews}>Chu cho sinh ra voi mot mat hai mui  </p>
            <p className={styles.informationNew}>Khuyết tật bẩm sinh khiến chú chó gặp rất nhiều trở ngại nhưng sức sống mãnh 
                liệt đã chiến thắng tất cả.</p>
        </div>
    </div>


    <div className={styles.cardNews}>
        <div className={styles.imgNews}>
            <img src='../image/gioithieu2.png'></img>
        </div>
        <div className={styles.informationNews}>
            <p className={styles.titleNews}>Chu cho sinh ra voi mot mat hai mui  </p>
            <p className={styles.informationNew}>Khuyết tật bẩm sinh khiến chú chó gặp rất nhiều trở ngại nhưng sức sống mãnh 
                liệt đã chiến thắng tất cả.</p>
        </div>
    </div>
   

</div>
<div className={styles.btnNews}><button>Xem them</button></div>
</div>
);

}
export default News;