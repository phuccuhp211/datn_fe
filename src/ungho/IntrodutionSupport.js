import styles from './Support.module.css';


function IntrodutionSupport(){
return(
<div >
  
<div className={styles.linkWeb}>
    <div className={styles.link}>
        <a href='/'>Trang chu </a> -- <a href='/sanpham'>San pham</a>
    </div>
</div>
<div className={styles.introductionProduct}>
<div className={styles.informationProduct}>
        <h1>Sản phẩm thú nuôi </h1>
        <hr></hr>
        <p>Mọi khoản tiền được ủng hộ cho ars(Animal Rescue Station) đều sẽ được sử dụng để cứu hộ, chi phí y tế, thức ăn, điện nước, thuốc men.
            Lương thực hỗ trợ các bạn tình nguyện viên, đồ dùng...  <br></br>
                        Nhóm rất cần sự giúp đỡ của các bạn để có thể duy trì nhà chung cũng như là đội cứu hộ.  <br></br> <br></br> 
                        *Lưu ý: nhóm không dùng zalo hoặc nhắn tin riêng qua facebook để cung cấp thông tin thẻ hay mã OTP ngân hàng.</p>
        <div className={styles.btnVaccin}><button>Dich vu tiem phong</button></div>
    </div>
    <div className={styles.imgIntroduction}>
        <img src='../image/gioithieu2.png'></img>
    </div>
</div>
<div style={{clear:'both'}}></div>
</div>
);

}
export default IntrodutionSupport;