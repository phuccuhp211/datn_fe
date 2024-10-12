import styles from './Footers.module.css';

import './Footers.module.css';
function Footers(){
return(
<div className={styles.footers}>
   <div className={styles.noiDung1}>
   <div className={styles.tiemPhong}>
        <div className={styles.TTTiemPhong}>
            BAN DANG MUON TIEM PHONG THU NUOI ?
        </div>
        <div className={styles.btnTiemPhong}>
            <button>DAT LICH NGAY</button>
        </div>
    </div>
   </div>


    <div className={styles.thongTinLH}>
        <div className={styles.tuongTac}>
            <div className={styles.hop}>...</div>
        </div>
       <div className={styles.baoTT}>
       <div className={styles.veChungToi}>
        <p className={styles.nD}>Về chúng tôi</p>
                <hr></hr>
                <p className={styles.tT}>Nhóm trẻ tình nguyện viên Việt Nam và quốc tế, hoạt động vì tình yêu chó mèo.</p>
                <p className={styles.nD1}>Thông tin liên hệ</p>
                <hr></hr>
                <p className={styles.tT}>(+84) 39 320 1068</p>
                <p className={styles.tT}>cuuhodongvat@gmail.com</p>
                <p className={styles.tT}>Ho Chi Minh - Viet Nam</p>
        </div>
       </div>
        <div className={styles.fanPage}>
            <div className={styles.hopFanPage}>...</div>
        </div>
        
    </div>
    <div style={{clear:'both'}}></div>
    <div className={styles.compry}>
        <hr></hr>
        <p>Copyright 2019 / Designed by BMBSoft VietNam</p>
    </div>
</div>
);

}
export default Footers;