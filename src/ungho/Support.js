import React from 'react';

import IntrodutionSupport from './IntrodutionSupport';
import Fundraising from './Fundraising';
import Contribute from './Contribute';

const Support = () => {
    return (
       <>
        <IntrodutionSupport/>
       <Fundraising/>
       <Contribute/>
       </>
    );
}

export default Support;
