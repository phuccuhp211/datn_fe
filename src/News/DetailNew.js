import React from 'react';
import styles from './New.module.css';


const DetailNew = () => {
    return (
  <div>
    <div className={styles.linkWeb}>
    <div className={styles.link}>
        <a href='/'>Trang chu </a> -- <a href='/sanpham'>San pham</a>
    </div>
</div>
        <div className={styles.boxNewDetail}>
        <div className={styles.spaceNewDetail}>
       <div className={styles.categoryDetail}>
            <h3>Chuyen muc</h3>
            <div className={styles.btnCategoryDetail}>
                <button><p>Goc yeu thuong</p></button>
                <button><p>Hoat dong tinh nguyen</p></button>
                <button><p>Qua trinh cuu ho</p></button>
                <button><p>Tin tuc va su kien</p></button>
            </div>
        </div>
        <div className={styles.newsDetail}>
            <h3>Bai viet moi nhat</h3>
            <hr></hr>
            <div className={styles.postNews}>
                <div className={styles.imgPostNews}><img src='../image/gioithieu2.png'></img></div>
                <div>
                <p>CHU CHO SHIBA NOI TIENG KHAP NOI THE GIOI...</p>
                </div>
            </div>

            <div className={styles.postNews}>
                <div className={styles.imgPostNews}><img src='../image/gioithieu2.png'></img></div>
                <div>
                <p>CHU CHO SHIBA NOI TIENG KHAP NOI THE GIOI...</p>
                </div>
            </div>

            <div className={styles.postNews}>
                <div className={styles.imgPostNews}><img src='../image/gioithieu2.png'></img></div>
                <div>
                <p>CHU CHO SHIBA NOI TIENG KHAP NOI THE GIOI...</p>
                </div>
            </div>

            <div className={styles.postNews}>
                <div className={styles.imgPostNews}><img src='../image/gioithieu2.png'></img></div>
                <div>
                <p>CHU CHO SHIBA NOI TIENG KHAP NOI THE GIOI...</p>
                </div>
            </div>
          

           
        </div>
       </div>
        <div className={styles.formNewDetail}>
       <div className={styles.informationNew}>
        <h1>
        Chú chó Corgi sinh ra với 1 mắt và 2 mũi sống sót kỳ diệu
        </h1>
        <li>23/09/2020 bởi Hanoi Pet Adoption (English only)</li>
        <hr></hr>
        <p>
        Dị tật bẩm sinh di truyền đã khiến chú chó Corgi này sinh ra với ngoại hình khác biệt.
         Ngoài những đặc điểm trên mặt như chỉ có 1 mắt hay 2 mũi thì chú chó còn có 2 đốt sống
          hợp nhất. Do đó, bác sĩ thú y đã đề xuất sẽ an tử để kết thúc cuộc đời không như mong muốn cho nó.
        Tuy nhiên, lúc đó Jarmo Korhonen, đến từ Phần Lan, đã rất yêu quý chú chó Corgi đặc biệt này
         nên anh đã mua nó và mang về chăm sóc cùng các chú Corgi khác của mình. Anh đặt tên chú 
         chó là Nekku bên cạnh các anh em là Niisku-Neiti và Karkki.
        </p>
        <div className={styles.imgInformation}>
            <img src='../image/gioithieu2.png'></img>
        </div>
        <p>
        Nekku đến nay đã 8 tuổi và vẫn đang tận hưởng cuộc sống hạnh phúc.
Jarmo là một nhà nghiên cứu 38 tuổi, anh chia sẻ rằng có nhiều người gọi Nekku là Beretta (tên một loại súng) vì chiếc mũi của nó trông giống như một khẩu súng ngắn hai nòng.
Nếu tôi đưa Nekku đi dạo trong thành phố thì không thể thoải mái đi được. Tôi thỉnh thoảng phải dừng lại để trả lời các câu hỏi và nhận xét về mũi, mắt và bộ lông mượt của Nekku. Mọi người đều yêu vẻ ngoài độc đáo của chú chó.
Khi Nekku còn nhỏ, tôi thường thấy Niisku-Neiti nhìn chằm chằm vào khuôn mặt em, có lẽ nó cũng tò mò về ngoại hình của người bạn mới.
        </p>
        <div className={styles.imgInformation}>
            <img src='../image/gioithieu2.png'></img>
        </div>
        <p>
        Bố và mẹ của Nekku đều có giống rất tốt, chúng được chọn lựa để tham gia các buổi biểu diễn và được lên kế hoạch để sinh ra những chú chó con mạnh khoẻ, nhưng có điều gì đó không đúng với Nekku.
Lông dài, xù là một lỗi di truyền của chó Corgi, thậm chí Nekku còn có 2 mũi và 1 mắt, cùng với đốt sống hợp nhất trên lưng. Nhà lai tạo và bác sĩ thú y đều khẳng định nó không sống được bao lâu và sẽ gặp nhiều khó khăn trong tương lai.
Vì vậy họ đề xuất phương án an tử nhưng tôi không muốn Nekku kết thúc cuộc đời như vậy.
Jarmo kể lại.
        </p>


       <div>
       <span>Nguon bai: Luong Bao Minh</span>
       </div>
      <hr></hr>

     <div>
     <div className={styles.comment}>
                <div className={styles.numberComment}><p>0 bình luận</p></div>
                <div className={styles.filterComment}><select>
                    <option>Moi nhat</option>
                    <option>Cu nhat</option>
                    </select></div>      
        </div>
       <div className={styles.hrComment}> <hr ></hr></div>
      <div className={styles.formComment}>
      <div className={styles.imgComment}>
        <img src='../image/gioithieu2.png'></img>
       </div>
       <div className={styles.inputComment}>
        <input type='text' placeholder='Viet binh luan'></input>
       </div>
        </div>
         </div>
            </div>
          
             </div>
                 </div>
                     </div>
    );
}

export default DetailNew;
