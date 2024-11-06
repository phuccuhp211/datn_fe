import "./DetailAdopt.css";
import { Link } from "react-router-dom";
import React from "react";
// import "./adopt.css "

function DetailAdopt(){
    const arr = [
        { "id": "1", "ten_tc": "Bull","loai":"cho","ttsuckhoe":"manh khoe", "hinh": "https://cdn.tgdd.vn/Products/Images/44/302950/masstel-e116-n4020-glr-1.jpg", "gioitinh": "đực", "mau":" 2thang", "tuoi":"Vàng", "Cannang": "2,5kg" }
       
    ];
    return(
        <div className="container-DA">
            <div className="home-DA">
                {arr.map((tc,i) =>(
                    <div key={i} className="card-DA">
                        <img src={tc.hinh} alt={tc.ten_tc} className="img-card-DA"/>
                        <div className="content-card-DA">
                            <h3>{tc.ten_tc}</h3>
                            <div className="mini-DA">
                                <p>Loại: {tc.loai}</p><hr/>
                                <p>TT sực khoe: {tc.ttsuckhoe}</p>
                            </div>
                             <div className="mini-DA2"><p>Giới tính: {tc.gioitinh}</p><hr/></div>
                             <div className="mini-DA2"><p>Màu: {tc.mau}</p><hr/></div>
                             <div className="mini-DA2"><p>Tuổi: {tc.tuoi}</p><hr/></div>
                             <div className="mini-DA2"><p>Cân nặng: {tc.Cannang}kg</p><hr/></div>
                            <button><Link to={`/nhannuoi/dangky`}>Nhận nuôi</Link></button>
                            <button><Link to={`/taitro`}>Trợ giúp</Link></button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="luuy">
                <p className="doc"><b>lưu ý</b></p>
                <h2>ĐIỀU KIỆN NHẬN NUÔI<hr/></h2>

                <p className="doc2">Chúng tớ chỉ cho trực tiếp nhận nuôi chứ không cho xin giúp
                     người khác nên bạn vui lòng cùng trao đổi hết các câu hỏi sau:</p>
                <div className="luuy-loai">
                    <div className="luuy-loai-DT">Phỏng Vấn Về Mèo</div>
                    <div className="luuy-loai-DT">Phỏng Vấn Về Mèo</div>
                </div>
                <div className="luuy-loai-mota">
                <p><b>1. </b>Bạn đã đi làm hay còn đi học?</p>
                <p><b>2. </b>Bạn đã được gia đình / chủ trọ / bạn cùng phòng đồng ý cho nhận nuôi bé chưa?</p>
                <p><b>3. </b>Khi bạn về quê / đi chơi dài ngày thì sẽ mang bé theo hay gởi ai chăm sóc?</p>
                <p><b>3. </b>Khi bạn về quê / đi chơi dài ngày thì sẽ mang bé theo hay gởi ai chăm sóc?</p>
                <p><b>4. </b>Bạn có đang nuôi bé chó nào không? Các bé chó thường thích đi rông nên khu vực nhà bạn có an toàn cho chó không?</p>
                <p><b>5. </b>Nếu nhà có sân vườn thì cần rào cẩn thận, hạn chế mở toang cửa. Hoặc là phòng trọ thì cần kín đáo. Nên luôn tiện bạn chụp ảnh/quay một vài clip nơi ở của bạn cho chúng tớ xem với nhé.</p>
                <p><b>6. </b>Nếu nhận bé chó về bạn định nuôi xích hay cho đi quanh trong nhà/sân vườn kín đáo?</p>
                <p><b>7. </b>Nhận nuôi chó/mèo từ Hội phải cam kết NUÔI KÍN - TRIỆT SẢN - VACCINE. Nếu bạn vi phạm cam kết rất tiếc chúng tớ sẽ tới nhận lại bé và công khai trường hợp của bạn lên Page.</p>   

                </div>

            </div>
            <div className="goiy">
                <h2>Động vật khác 
                    <hr/>
                </h2>
                <Adopt/>
            </div>
        </div>
    );
};
function Adopt() {
    const arr = [
        { "id": "1", "ten_sp": "Loptop 1", "hinh": "https://cdn.tgdd.vn/Products/Images/44/302950/masstel-e116-n4020-glr-1.jpg", "gia": "1 usd" },
        { "id": "2", "ten_sp": "Loptop 2", "hinh": "https://cdn.tgdd.vn/Products/Images/44/270142/chuwi-corebook-x-i5-8259u-1-1.jpg", "gia": "2 usd" },
        { "id": "3", "ten_sp": "Loptop 3", "hinh": "https://cdn.tgdd.vn/Products/Images/44/281483/asus-vivobook-15-x1502za-i5-ej120w-1-1.jpg", "gia": "3 usd" },
       
    ];
    // const [listsp, SetListSP] = useState([])
   
    return (
        <div className='container'>
            
             <div className="home">
                
              {arr
                .map((sp, i) => (
                  <div className="nhannuoi" key={i}>
                    {/* <div className="nhannuoi_img"> */}
                      {/* <Link to={"/sp/" + sp.id}> */}
                        <img 
                          className="img"
                          src={sp["hinh"]}
                          alt={sp["ten_sp"]}
                        ></img>
                      {/* </Link> */}
                    {/* </div> */}
                      <div className="nhannuoi_chitiet">
                        <h2>{sp["ten_sp"]}</h2>
                        <p><span>Giới tính:</span> {sp["ten_sp"]}</p>
                        <p><span>Độ tuổi:</span> {sp["ten_sp"]}</p>
                        <p><span>Tiêm phòng:</span> {sp["ten_sp"]}</p>
                      </div>
                    {/* <div className="sp-info">
                      <h4>
                        <Link to={"/sp/" + sp.id}>
                          {sp["ten_sp"]}
                        </Link>
                      </h4>
                      <p>
                        <b>
                          {sp["gia"].split(' ')[0]*d.tygia} {sp["gia"].split(' ')[1]}
                        </b>     
                      </p>
                    </div>              */}
                  </div>
                ))}
            </div>
        </div>
    );
};
export default DetailAdopt;