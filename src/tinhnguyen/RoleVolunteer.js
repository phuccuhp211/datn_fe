import React from 'react';
import styles from './Volunteer.module.css';
import { Link } from 'react-router-dom';


const RoleVolunteer = () => {
    return (
  <div className={styles.bgrVolunteer}>
    <div className={styles.volunteer}>
        <div className={styles.columVolunteerL}>
            <div className={styles.roleVolunteerL}>
            <h1>Vai trò tình nguyện viên</h1>
            <hr></hr>
            <p>
            I - Chăm sóc động vật: Cung cấp thức ăn, nước uống, vệ sinh chuồng trại, và hỗ trợ điều trị y tế cho động vật. <br/>
II - Tái hòa nhập động vật: Giúp động vật thích nghi với môi trường mới, bao gồm huấn luyện, giao tiếp với người và động vật khác để chuẩn bị cho việc nhận nuôi.<br/>
III - Hỗ trợ bác sĩ thú y: Giúp các bác sĩ trong việc chăm sóc, theo dõi sức khỏe, và thực hiện các biện pháp y tế cơ bản cho động vật.<br/>
IV - Giải cứu động vật: Tham gia trực tiếp vào các chiến dịch giải cứu, đưa động vật khỏi những tình huống nguy hiểm hoặc không lành mạnh.<br/>
V - Tìm kiếm nhà mới cho động vật: Tình nguyện viên có thể tham gia vào quá trình quảng bá, tìm kiếm người nhận nuôi cho động vật.<br/>
VI - Tuyên truyền nâng cao nhận thức: Tổ chức hoặc tham gia vào các hoạt động tuyên truyền bảo vệ động vật, nâng cao nhận thức về trách nhiệm nuôi thú cưng.<br/>
            </p>
            </div>
            <div className={styles.imgRoleVolunteerL}>
                <img src='../image/gioithieu2.png'></img>
                <img src='../image/gioithieu2.png'></img>
                <img src='../image/gioithieu2.png'></img>
                <img src='../image/gioithieu2.png'></img>
            </div>
        </div>


        <div className={styles.columVolunteerR}>
        <div className={styles.imgRoleVolunteerR}>
                <img src='../image/gioithieu2.png'></img>
                <img src='../image/gioithieu2.png'></img>
                <img src='../image/gioithieu2.png'></img>
                <img src='../image/gioithieu2.png'></img>
            </div>
            <div className={styles.roleVolunteerR}>
            <h1>Điều kiện để trở thành tình nguyện viên </h1>
            <hr></hr>
            <p>
            I - Yêu động vật: Đây là yếu tố tiên quyết. Tình nguyện viên phải có tình yêu và sự kiên nhẫn với động vật, đặc biệt là với những con có hoàn cảnh khó khăn.<br/>
II - Thời gian linh hoạt: Phải có khả năng sắp xếp thời gian linh hoạt để tham gia vào các hoạt động cứu hộ, chăm sóc, và hỗ trợ động vật.<br/>
III - Khả năng làm việc nhóm: Công việc cứu hộ thường yêu cầu sự hợp tác với các thành viên khác, do đó kỹ năng làm việc nhóm là cần thiết.<br/>
IV - Sức khỏe tốt: Công việc này đôi khi đòi hỏi lao động thể chất, như di chuyển động vật lớn hoặc tham gia vào các tình huống nguy hiểm.<br/>
V - Kiến thức về động vật: Có kiến thức cơ bản về chăm sóc động vật, hành vi và sức khỏe của chúng sẽ là một lợi thế lớn.<br/>
VI - Khả năng học hỏi: Sẵn sàng học hỏi về chăm sóc và giải cứu động vật, cũng như các quy định và luật liên quan đến bảo vệ động vật.<br/>
            </p>
            </div>
           
        </div>

        <div><img className={styles.imgJoin} src='../image/gioithieu1xp.png'></img></div>
    <div className={styles.joinVolunteer}> 
    < div className={styles.columJoinVolunteer}>
        <div className={styles.joinVolunteerP}>
            <h1>Bạn muốn tham gia</h1>
            <p>Tham gia tình nguyện cho Hanoi Pet Adoption, bạn đang góp phần thay đổi 
                số phận của những bé chó mèo bị bỏ rơi hay bạo hành. 
                Bên cạnh đó, bạn còn có cơ hội tìm hiểu thêm...</p>
               <div className={styles.btnVolunteer}> <button><Link to={"/dangkytinhnguyen"}>THAM GIA NGAY</Link></button></div>
        </div>
         <img src='../image/tinhnguyen.png'></img>
      
    </div>
    </div>
    </div>
   
  </div>
    );
}

export default RoleVolunteer;
