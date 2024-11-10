import React from 'react';


import IntrodutionProduct from './sanpham-js/IntrodutionProduct';
import SearchProduct from './sanpham-js/SearchProduct';
import Product from '../Home/home/Product';
function Products() {
  return (
    <div>
      {/* Gọi các component nhỏ để tạo thành trang Home hoàn chỉnh */}
    <IntrodutionProduct />
    <SearchProduct/>
   <Product/>
    </div>
  );
}

export default Products;
