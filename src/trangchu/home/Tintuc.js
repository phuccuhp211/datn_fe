// phan tin tuc o trang chu

import styles from '../home-css/Tintuc.module.css';

import '../home-css/Tintuc.module.css';
function Tintuc(){
return(
<div className={styles.tintuc}>
<h1>TIN TUC</h1>
<div className={styles.columCards}>
<div className={styles.card}>
        <div className={styles.imageTintuc}>
            <img src='../image/gioithieu2.png'></img>
        </div>
        <div className={styles.TTTintuc}>
            <p className={styles.tieuDe}>Chu cho sinh ra voi mot mat hai mui  </p>
            <p className={styles.TT}>Khuyết tật bẩm sinh khiến chú chó gặp rất nhiều trở ngại nhưng sức sống mãnh 
                liệt đã chiến thắng tất cả.</p>
        </div>
    </div>


    <div className={styles.card}>
        <div className={styles.imageTintuc}>
            <img src='../image/gioithieu2.png'></img>
        </div>
        <div className={styles.TTTintuc}>
            <p className={styles.tieuDe}>Chu cho sinh ra voi mot mat hai mui</p>
            <p className={styles.TT}>Khuyết tật bẩm sinh khiến chú chó gặp rất nhiều trở ngại nhưng sức sống mãnh 
                liệt đã chiến thắng tất cả.</p>
        </div>
    </div>


    <div className={styles.card}>
        <div className={styles.imageTintuc}>
            <img src='../image/gioithieu2.png'></img>
        </div>
        <div className={styles.TTTintuc}>
            <p className={styles.tieuDe}>Chu cho sinh ra voi mot mat hai mui</p>
            <p className={styles.TT}>Khuyết tật bẩm sinh khiến chú chó gặp rất nhiều trở ngại nhưng sức sống mãnh 
                liệt đã chiến thắng tất cả.</p>
        </div>
    </div>
</div>
<div className={styles.btnTT}><button>Xem them</button></div>
</div>
);

}
export default Tintuc;