import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang khi pathname thay đổi
    }, [pathname]);

    return null; // Component này không cần render gì
};

export default ScrollToTop;
