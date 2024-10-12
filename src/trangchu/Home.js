import React from 'react';


import Gioithieu from './Gioithieu';
import Tht from './Tht';
import Dongvat from './Dongvat';
import Tintuc from './Tintuc';
import Thongke from './Thongke';
import Sanpham from './Sanpham';

import Banner from './Banner';

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
