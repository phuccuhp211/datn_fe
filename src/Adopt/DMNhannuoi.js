import React from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./DMNhannuoi.css";

function DMAdopt(){
    const loai =[
        {"id": "1", "ten_loai": "Chó"},
        {"id": "2", "ten_loai": "Mèo"},
        {"id": "3", "ten_loai": "Chim"},
        {"id": "4", "ten_loai": "Cá"},

    ];
    return (
        <div className="dm">
            <h1> TÌM THÚ CƯNG </h1>
            <div className="dmthucung">
                {loai.map((thucung,i) =>
                <div key={i} className="namethucung">
                    <span >{thucung["ten_loai"]}</span>
                </div>
                )}
                
            </div>
            <PLthucung />
        </div>  
    )
}
                
function PLthucung() {
    return (
        <div className="pll">
            <div className="pl">
                <div className="loai_TC">
                    <div className="name_l">Giới tính</div>
                    <button href="ten_loai_TC">Tất cả</button>
                    <div className="loai_TC_content">
                        <a href="">Đực</a>
                        <a href="">Cái</a>
                    </div>
                </div>
                    <div className="loai_TC"><div className="name_l">Màu</div>
                    <button href="ten_loai_TC">Tất cả</button>
                    <div className="loai_TC_content">
                        <a href="">Cam</a>
                        <a href="">Trắng</a>
                        <a href="">Đen</a>
                        <a href="">Tam thể</a>
                    </div>
                </div>


                <div className="loai_TC">
                    <div className="name_l">Độ Tuổi</div>
                    <button href="ten_loai_TC">Tất cả</button>
                    <div className="loai_TC_content">
                        <a href=""> dưới 1 tháng</a>
                        <a href=""> trên 1 Tháng </a>
                        <a href=""> 6 Tháng </a>
                        <a href=""> 1 tuổi </a>
                        <a href=""> trên 1 Tuổi</a>
                    </div>
                </div>


                <div className="loai_TC">
                    <div className="name_l">Triệt sản</div>
                    <button href="ten_loai_TC">Tất cả</button>
                    <div className="loai_TC_content">
                        <a href="">Chưa Triệt Sản</a>
                        <a href="">Đã Triệt Sản</a>
                    </div>
                </div>

                
            </div>
            <div className="nuiTK">
                <button>Tìm kiếm</button>
            </div>
        </div>
    )
}
export default DMAdopt;
