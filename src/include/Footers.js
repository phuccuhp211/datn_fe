import styles from './Footers.module.css';

import './Footers.module.css';
function Footers(){
return(

<div className={styles.footers}>
{<div style={{clear:'both'}}></div>}
   <div className={styles.content_one}>
   <div className={styles.vaccin}>
        <div className={styles.informationVaccin}>
            BAN DANG MUON TIEM PHONG THU NUOI ?
        </div>
        <div className={styles.btnVaccin}>
            <button>DAT LICH NGAY</button>
        </div>
    </div>
   </div>


    <div className={styles.informationContacts}>
        <div className={styles.tuongTac}>
            <div className={styles.hop}>...</div>
        </div>
       <div className={styles.informationContact}>
       <div className={styles.aboutUS}>
        <p className={styles.textAboutUS_1}>Về chúng tôi</p>
                <hr></hr>
                <p className={styles.textAboutUS_3}>Nhóm trẻ tình nguyện viên Việt Nam và quốc tế, hoạt động vì tình yêu chó mèo.</p>
                <p className={styles.textAboutUS_2}>Thông tin liên hệ</p>
                <hr></hr>
                <p className={styles.textAboutUS_3}>(+84) 39 320 1068</p>
                <p className={styles.textAboutUS_3}>cuuhodongvat@gmail.com</p>
                <p className={styles.textAboutUS_3}>Ho Chi Minh - Viet Nam</p>
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