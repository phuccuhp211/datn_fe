import './adopt.css';
import { useContext, useEffect, useState } from "react";
import { dataContext } from "./dataContext";
import { Link } from "react-router-dom";
import DMAdopt from './DMNhannuoi';
import Statistical from './trangchu/home/Statistical';


function Adopt() {
    const arr = [
        { "id": "1", "ten_sp": "Loptop 1", "hinh": "https://cdn.tgdd.vn/Products/Images/44/302950/masstel-e116-n4020-glr-1.jpg", "gia": "1 usd" },
        { "id": "2", "ten_sp": "Loptop 2", "hinh": "https://cdn.tgdd.vn/Products/Images/44/270142/chuwi-corebook-x-i5-8259u-1-1.jpg", "gia": "2 usd" },
        { "id": "3", "ten_sp": "Loptop 3", "hinh": "https://cdn.tgdd.vn/Products/Images/44/281483/asus-vivobook-15-x1502za-i5-ej120w-1-1.jpg", "gia": "3 usd" },
        { "id": "4", "ten_sp": "Loptop 4", "hinh": "https://cdn.tgdd.vn/Products/Images/44/281483/asus-vivobook-15-x1502za-i5-ej120w-1-1.jpg", "gia": "4 usd" },
        { "id": "5", "ten_sp": "Loptop 5", "hinh": "https://cdn.tgdd.vn/Products/Images/44/302950/masstel-e116-n4020-glr-1.jpg", "gia": "5 usd" },
        { "id": "6", "ten_sp": "Loptop 6", "hinh": "https://cdn.tgdd.vn/Products/Images/44/306795/lg-gram-2023-i7-17z90rgah78a5-1.jpg", "gia": "6 usd" },
       
    ];
    // const [listsp, SetListSP] = useState([])
    const d = useContext(dataContext);
    console.log(d.tygia)
    return (
        <div className='container'>
            <div>
              <DMAdopt/>
            </div>
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
            <Statistical />
            <div className='role'>
              <article>
                <h3>Quy trình nhận nuôi</h3>
                <hr/>
                <p>Trước khi quyết định nhận nuôi bé chó hay mèo nào, bạn hãy tự hỏi bản thân rằng
                   mình đã sẵn sàng để chịu trách nhiệm cả đời cho bé chưa, cả về tài chính,
                    nơi ở cũng như tinh thần. Việc nhận nuôi cần được sự đồng thuận lớn từ 
                    bản thân bạn cũng như gia đình và những người liên quan. Xin cân nhắc kỹ 
                    trước khi liên hệ với HPA về việc nhận nuôi.</p>
                <p>Bạn đã sẵn sàng? Hãy thực hiện các bước sau đây nhé:</p>
                <p>1️⃣ Tìm hiểu về thú cưng bạn muốn nhận nuôi trên trang web của HPA.<br/>
                  2️⃣ Liên hệ với Tình nguyện viên phụ trách bé để tìm hiểu thêm về bé. <br/>
                  3️⃣ Tham gia phỏng vấn nhận nuôi. <br/>
                  4️⃣ Chuẩn bị cơ sở vật chất, ký giấy tờ nhận nuôi và đóng tiền vía để đón bé về. <br/>
                  5️⃣ Thường xuyên cập nhật về tình hình của bé, đặc biệt là khi có sự cố để được tư vấn kịp thời.</p>
                <p>❗ Lưu ý:</p>
                <p>- Chỉ inbox 01 Tình nguyện viên phỏng vấn, KHÔNG NÊN inbox tất cả danh sách. Trường hợp TNV chưa phản hồi lại trong vòng 1 ngày, vui lòng inbox cho Page.</p>
                <p>- Phần phỏng vấn có thể có nhiều câu hỏi mang tính chất riêng tư, vì vậy mong bạn hãy kiên nhẫn nhé!</p>
                <p>- Tiền vía mỗi bé sẽ khác nhau tùy thuộc vào tình trạng của bé khi cứu cũng như các dịch vụ y tế (tiêm phòng, triệt sản) đã thực hiện.</p>
                <p>- Tiền vía dùng để trả các khoản chi về y tế trước đây cho bé, cũng như để hỗ trợ chi phí chăm sóc, nuôi dưỡng các bé khác tại nhà chung.</p>
                <p>- Trường hợp không nuôi được tiếp cần trả lại cho Nhóm, không tự ý đem cho người khác.</p>
                <p>🐕‍🦺 Nếu bạn chỉ có thể chăm sóc tạm thời (foster), tham khảo thông tin tại mục Tình nguyện.</p>
                <p>🐈 Tìm hiểu thêm về chương trình Nhận nuôi Ảo ở banner cuối trang này.</p>
              </article>
              <aside>
                <div className='DK'>
                  <h5>Điều Kiện Nhận Nuôi </h5>
                  <hr/>
                  <p>-Tài chính tự do và ổn định</p>
                  <p>-Chỗ ở cố định </p>
                  <p>-Cam kết tiêm phòng mà triệt sản</p>
                </div>
             </aside>

          </div>
        </div>
    )
}

export default Adopt;
