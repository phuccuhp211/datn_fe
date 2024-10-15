import styles from '../sanpham-css/TimkiemSP.module.css';


function TimkiemSP(){
return(
<div className={styles.bao}>
<div className={styles.timkiem}>
    <input className={styles.inputSP} placeholder='Nhap ten san pham'></input>
    <button className={styles.btnSP}>Tim kiem</button>
</div>
</div>
);

}
export default TimkiemSP;