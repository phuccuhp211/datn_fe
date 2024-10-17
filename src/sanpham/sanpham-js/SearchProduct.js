import styles from '../sanpham-css/Products.module.css';


function SearchProduct(){
return(
<div className={styles.searchProducts}>
<div className={styles.searchProduct}>
    <input className={styles.inputProduct} placeholder='Nhap ten san pham'></input>
    <button className={styles.btnSearchProduct}>Tim kiem</button>
</div>
</div>
);

}
export default SearchProduct;