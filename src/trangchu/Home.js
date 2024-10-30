import React from 'react';

import Introduce from './home/Introduce';
import Learnmore from './home/Learnmore';
import Animal from './home/Animal';
import News from './home/News';
import Statistical from './home/Statistical';
import Product from './home/Product';
import Banner from './home/Banner';

function Home() {
  return (
    <div>
      {/* Gọi các component nhỏ để tạo thành trang Home hoàn chỉnh */}
    <Banner/>
    <Introduce />
    <Learnmore/>
    <Animal/>
    <News/>
    <Statistical/>
    <Product/>
    </div>
  );
}

export default Home;
