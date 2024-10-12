import React from 'react';


import GioithieuSP from './GioithieuSP';
import TimkiemSP from './TimkiemSP';
import Product from './Product';


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
