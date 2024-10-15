import styles from '../detailproduct-css/Product-khac.module.css';

import { Link } from 'react-router-dom';
function Productkhac(){
     
      // Danh sách sản phẩm dữ liệu mẫu
      const products = [
        { id: 1, tenSp: 'Royal Canin Maxi Puppy - Thức Ăn Cao Cấp Dành Cho Chó', gia: '300,000', image: '../image/gioithieu2.png',loai:'chó' },
        { id: 2, tenSp: 'Thức ăn cho thú cưng B', gia: '350,000', image: '../image/gioithieu2.png',loai:'chó' },
        { id: 3, tenSp: 'Thức ăn cho thú cưng C', gia: '400,000', image: '../image/gioithieu2.png',loai:'chó' },
        { id: 4, tenSp: 'Thức ăn cho thú cưng D', gia: '450,000', image: '../image/gioithieu2.png',loai:'chó' },
        { id: 5, tenSp: 'Royal Canin Maxi Puppy - Thức Ăn Cao Cấp Dành Cho Chó', gia: '300,000', image: '../image/gioithieu2.png',loai:'chó' },
        { id: 6, tenSp: 'Thức ăn cho thú cưng B', gia: '350,000', image: '../image/gioithieu2.png' },
        { id: 7, tenSp: 'Thức ăn cho thú cưng C', gia: '400,000', image: '../image/gioithieu2.png' },
        { id: 8, tenSp: 'Thức ăn cho thú cưng D', gia: '450,000', image: '../image/gioithieu2.png' },
        { id: 9, tenSp: 'Royal Canin Maxi Puppy - Thức Ăn Cao Cấp Dành Cho Chó', gia: '300,000', image: '../image/gioithieu2.png' },
        { id: 10, tenSp: 'Thức ăn cho thú cưng B', gia: '350,000', image: '../image/gioithieu2.png' },
        { id: 11, tenSp: 'Thức ăn cho thú cưng C', gia: '400,000', image: '../image/gioithieu2.png' },
        { id: 12, tenSp: 'Thức ăn cho thú cưng D', gia: '450,000', image: '../image/gioithieu2.png' },
        { id: 13, tenSp: 'Royal Canin Maxi Puppy - Thức Ăn Cao Cấp Dành Cho Chó', gia: '300,000', image: '../image/gioithieu2.png' },
        { id: 14, tenSp: 'Thức ăn cho thú cưng B', gia: '350,000', image: '../image/gioithieu2.png' },
        { id: 15, tenSp: 'Thức ăn cho thú cưng C', gia: '400,000', image: '../image/gioithieu2.png' },
        { id: 16, tenSp: 'Thức ăn cho thú cưng D', gia: '450,000', image: '../image/gioithieu2.png' },
  
      ];
  
   
     
      
      
  
  
return(
<div className={styles.bocSP}>
<div className={styles.sanPham}>
    <h1>San pham khac </h1>
    <hr></hr>

<div className={styles.columCard}>
{products.map((product) => (
<div className={styles.card} key={product.id}>
  <div className={styles.imageSP}>
    {/* Sử dụng <Link> để dẫn đến trang chi tiết sản phẩm */}
    <Link to={`/product/${product.id}`}>
      <img src={product.image} alt={product.tenSp} />
    </Link>
  </div>
  <div className={styles.sanPhamTT}>
  <div className={styles.tenSP}>
      {/* Thêm <Link> cho tên sản phẩm */}
      <Link to={`/product/${product.id}`}  className={styles.ttSP}>{product.tenSp}</Link>
  </div>
    <hr />
    <div className={styles.muaNgay}>
      <p className={styles.gia}>{product.gia} VND</p>
      <div className={styles.overSP}>
        <button className={styles.muaHang} >Mua hàng</button>
      </div>
    </div>
  </div>
</div>
))}
</div>

  </div>
</div>
);

}
export default Productkhac;