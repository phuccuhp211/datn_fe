import React from 'react';


import Gioithieu from './home/Gioithieu';
import Tht from './home/Tht';
import Dongvat from './home/Dongvat';
import Tintuc from './home/Tintuc';
import Thongke from './home/Thongke';
import Sanpham from './home/Sanpham';
import Banner from './home/Banner';

function Home() {
  return (
    <div>
      {/* Gọi các component nhỏ để tạo thành trang Home hoàn chỉnh */}
    <Banner/>
    <Gioithieu />
    <Tht/>
    <Dongvat/>
    <Tintuc/>
    <Thongke/>
    <Sanpham/>

    </div>
  );
}

export default Home;
