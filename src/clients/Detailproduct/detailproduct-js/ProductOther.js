import styles from '../detailproduct-css/detailProduct.module.css';

import { Link } from 'react-router-dom';
function ProductOther(){
     
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
<div className={styles.otherProducts}>
<div className={styles.otherProduct}>
    <h1>San pham khac </h1>
    <hr></hr>

<div className={styles.columCardOtherProduct}>
{products.map((product) => (
<div className={styles.cardOtherProduct} key={product.id}>
  <div className={styles.imgOtherProduct}>
    {/* Sử dụng <Link> để dẫn đến trang chi tiết sản phẩm */}
    <Link to={`/product/${product.id}`}>
      <img src={product.image} alt={product.tenSp} />
    </Link>
  </div>
  <div className={styles.informationOtherProducts}>
  <div className={styles.nameOtherProduct}>
      {/* Thêm <Link> cho tên sản phẩm */}
      <Link to={`/product/${product.id}`}  className={styles.informationOtherProduct}>{product.tenSp}</Link>
  </div>
    <hr />
    <div className={styles.buyNowOtherProduct}>
      <p className={styles.priceOtherProduct}>{product.gia} VND</p>
      <div className={styles.overOtherProduct}>
        <button className={styles.buyOtherProduct} >Mua hàng</button>
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
export default ProductOther;