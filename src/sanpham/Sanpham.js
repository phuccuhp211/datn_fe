import React from 'react';


import GioithieuSP from './sanpham-js/GioithieuSP';
import TimkiemSP from './sanpham-js/TimkiemSP';
import Product from './sanpham-js/Product';


function Home() {
  return (
    <div>
      {/* Gọi các component nhỏ để tạo thành trang Home hoàn chỉnh */}
    <GioithieuSP />
    <TimkiemSP/>
    <Product/>
    </div>
  );
}

export default Home;
