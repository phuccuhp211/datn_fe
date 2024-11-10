import React from 'react';
import styles from './Vaccin.module.css';

function Vaccin() {
    return (
     <div>
     <div className={styles.linkWeb}>
    <div className={styles.link}>
        <a href='/'>Trang chu </a> -- <a href='/sanpham'>San pham</a>
    </div>
</div>
    <div className={styles.containerVaccin}>
        <div className={styles.informationVaccin}>
            <h1>TIEM PHONG, VACCIN</h1>
            <hr></hr>
            <div className={styles.introduceVaccin}>
                <p>
                Tiêm vắc xin cho chó mèo không chỉ là biện pháp cần thiết mà còn là cách bảo vệ 4
                sức khỏe tối ưu cho thú cưng của bạn. Tại 2Vet, chúng tôi cam kết mang đến dịch 
                vụ tiêm chủng an toàn, hiệu quả, giúp thú cưng tránh xa các bệnh truyền nhiễm nguy
                 hiểm, trong đó có bệnh dại – mối đe dọa lớn cho sức khỏe cộng đồng.
                </p>
                <img src='../image/gioithieu2.png'></img>
                <p>
                Tất cả các chú chó và mèo đều có nguy cơ mắc phải các bệnh truyền nhiễm nghiêm trọng, 
                có thể gây nguy hiểm đến tính mạng và sức khỏe cộng đồng. Bệnh dại, một trong những bệnh
                 truyền nhiễm đáng lo ngại nhất, có thể lây lan sang người và gây ra hậu quả khôn lường.
                  Việc tiêm phòng sớm giúp bảo vệ thú cưng khỏi những nguy cơ này, đồng thời đảm bảo an 
                  toàn cho cộng đồng.
                </p>
            </div>
            <div className={styles.catVaccin}>
                <div className={styles.imgCatVaccin}>
                <img src='../image/4benh.png'></img>
                </div>
                <div className={styles.informationCatVaccin}>
                    <h2>TIEM VACCIN CHO DONG VAT </h2>
                    <ul>
                        <li>Feline Panleukopenia: Bệnh giảm bạch cầu.</li>
                        <li>Feline Viral Rhinotracheitis: Bệnh viêm mũi khí quản truyền nhiễm </li>
                        <li>Feline Calicivirus: Bệnh hô hấp do Calicivirus</li>
                        <li>Chlamydia psittaci: Bệnh hô hấp do Chlamydia psittaci</li>
                    </ul>
                    <button className={styles.registerVaccin}>Dang ky tiem phong</button>
                </div>
            </div>
            <div className={styles.dogVaccin}>
                <div className={styles.vaccinSick}>
                <img src='../image/5benh.png'></img>
                <p>Vaccin 5 benh</p>
                <ul>
                    <li> Bệnh Carré: Canine distemper virus (CDV)</li>
                    <li> Bệnh viêm dạ dày – ruột truyền nhiễm do Parvovirus: Canine Parvovirus (CPV)</li>
                    <li> Bệnh ho cũi chó: Adenovirus type – 2 (CAV2)</li>
                    <li> Bệnh phó cúm: Parainfluenza (CPI)</li>
                    <li> Bệnh do Coronavirus: Coronavirus</li>
                </ul>
                </div>


                <div className={styles.vaccinSick}>
                <img src='../image/7benh.png'></img>
                <p>Vaccin 7 benh</p>
                <ul>
                    <li> Bệnh Carré: Canine distemper virus (CDV)</li>
                    <li> Bệnh viêm dạ dày – ruột truyền nhiễm do Parvovirus: Canine Parvovirus (CPV)</li>
                    <li> Bệnh viêm gan truyền nhiễm: Icterohaemorrhagiae Bacterin</li>
                    <li> Bệnh ho cũi chó: Adenovirus type – 2 (CAV2)</li>
                    <li> Bệnh do Coronavirus: Coronavirus</li>
                    <li> Bệnh do xoắn khuẩn Leptospira: Leptospira Canicola</li>
                    <li> Bệnh phó cúm: Parainfluenza (CPI)</li>
                    
                </ul>
                </div>
            </div>
            <div className={styles.ressonVaccin}>
            <h4>LÝ DO BẠN NÊN TIÊM VẮC XIN CHO ĐỘNG VẬT NUÔI CỦA BẠN </h4>
            <p>
            Bệnh dại là một trong những bệnh truyền nhiễm nghiêm trọng không chỉ gây hại
             cho thú cưng mà còn có thể lây lan sang người. Các bệnh khác như bệnh Carré,
              viêm dạ dày – ruột truyền nhiễm, và viêm gan cũng có thể dẫn đến những tinh
               trạng sức khỏe nghiêm trọng hoặc kéo dài, đòi hỏi điều trị phức tạp và tốn kém.
                Tiêm phòng sớm giúp giảm nguy cơ mắc bệnh, bảo vệ sức khỏe của thú cưng,
                 và góp phần làm giảm nguy cơ lây lan bệnh trong cộng đồng.<br></br>
                 <span>
                 (*) Để đảm bảo vaccine phát huy hiệu quả bảo hộ tốt nhất, bạn cần đưa mèo đi tiêm đúng
                  lịch trình được khuyến cáo. Trong trường hợp không thể tiêm đúng ngày, nếu lịch tiêm 
                  sớm hơn, không nên sớm quá 3 ngày, và nếu muộn hơn, không nên trễ quá 6 ngày.
                 </span>
            </p>
            <div><img src='../image/tiemphongmeo.png'></img></div>
            <div><img src='../image/tiemphongcho.png'></img></div>
            </div>

            <div className={styles.noteVaccin}>
            <h4>LƯU Ý TRƯỚC VÀ SAU KHI TIÊM CACCCINE CHO CHÓ - MÈO</h4> 
            <p>
            
<strong>1. Tẩy Giun Sán Trước Khi Tiêm Phòng:</strong> Trước khi tiêm vaccine, nên tiến hành tẩy giun sán cho chó mèo vì ký sinh trùng có thể ảnh 
hưởng đến hiệu quả của vaccine cũng như phản ứng miễn dịch của thú cưng. <br/>
<strong>2. Xoa Nhẹ Vị Trí Tiêm:</strong> Sau khi tiêm, nền nhẹ nhàng xoa bóp vùng tiêm để giúp thuốc lan tỏa đều.<br/>
<strong>3. Chế Độ Kiêng Khem Sau Tiêm:</strong>
        <ul>
            <li>Tránh tắm cho thú cưng trong ít nhất 7 ngày sau khi tiêm.</li>
            <li>Không cho chó mèo ăn các thực phẩm tanh, trứng, đồ mở, sửa, hoặc thức ăn lạ trong thời gian này.</li>
            <li>Đảm bảo cung cấp đủ nước uống cho thú cưng.</li>
        </ul>
<strong>4. Xử Lý Khi Có Phản Ứng Bất Thường:</strong> Nếu phát hiện chó mèo có các dấu hiệu bắt thường như sốt, mệt mỏi, nôn, khó thở, tiêu chảy, hoặc co giật, hãy liên hệ ngay với bác sĩ thú y để được tư vẫn kịp thời.<br/>
<strong>5. Hạn Chế Hoạt Động Sau Tiềm:</strong>
<ul>
    <li>Tránh cho thú cưng đi chơi xa, đặc biệt là trong thời tiết xấu như mưa, nắng gắt, hoặc gió lạnh.</li>
    <li>Hạn chế để thủ cưng tham gia các hoạt động thể thao, thi đấu hoặc hoạt động mạnh trong vòng ít nhất 14            ngày sau khi
    tiêm.</li>
</ul>
       
<strong>6. Tránh Tiếp Xúc Với Các Con Vật Khác:</strong> Khi chưa hoàn thành đủ liệu trình tiêm vaccine, hạn chế đưa chó mèo đến những nơi công cộng hoặc tiếp xúc với những con vật khác chưa được tiêm phòng đầy đủ.
            </p>
           
            </div>


            <div className={styles.dateVaccin}>
                <h1>Dat lich tiem phong</h1>
                <p>Đặt lịch tiêm phòng để có thể tiêm cho thú nuôi một cách nhanh 
                    chóng mà không cần phải chờ đợi nhé. 
                </p>
                <form className={styles.formVaccin}>
                   <div className={styles.boxVaccin}>
                   <h1>DANG KY LICH</h1>
                    <div className={styles.informationUser}>
                        <div className={styles.vaccinUser}>
                            <label>Ten cua ban:</label>
                            <input type='text' placeholder='nhap ten cua ban'></input>
                        </div>
                        <div className={styles.vaccinUser}>
                            <label>So dien thoai :</label>
                            <input type='text' placeholder='nhap so dien thoai '></input>
                        </div>
                    </div>
                        <div className={styles.formInformationVaccin}>
                            <label>Chon co so</label>
                            <select>
                                <option>thon 3 ianhin huyen chu pah tinh gia lai</option>
                                <option>thon 2 ianhin huyen chu pah tinh gia lai</option>
                            </select>
                        </div>
                        <div className={styles.formInformationVaccin}>
                            <label>Ngay tiem:</label>
                            <input type='date' placeholder='nhap ten cua ban'></input>
                        </div>
                        <div className={styles.formInformationVaccin}>
                            <label>Thoi gian:</label>
                            <select>
                                <option>thon 3 ianhin huyen chu pah tinh gia lai</option>
                                <option>thon 2 ianhin huyen chu pah tinh gia lai</option>
                            </select>
                        </div>
                        <div className={styles.formInformationVaccin}>
                            <label>Dich vu yeu cau</label>
                            <select>
                                <option>thon 3 ianhin huyen chu pah tinh gia lai</option>
                                <option>thon 2 ianhin huyen chu pah tinh gia lai</option>
                            </select>
                        </div>
                    <div className={styles.btnResiginVaccin}>
                        <button>Dat lich ngay</button>
                    </div>
                   </div>
                </form>
            </div>
        </div>
    </div>
     </div>
    );
}

export default Vaccin;
