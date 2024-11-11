import React from 'react';

import Product from './detailproduct-js/Product';
import Mota from './detailproduct-js/Mota';

function detailproduct() {
  return (
    <div>
      {/* Gọi các component nhỏ để tạo thành trang Home hoàn chỉnh */}
        <Product/>
        <Mota/>
    </div>
  );
}

export default detailproduct;
