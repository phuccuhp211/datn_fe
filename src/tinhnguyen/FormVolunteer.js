import React from 'react';
import styles from './Volunteer.module.css';

function FormVolunteer() {
    return (
        <div className={styles.formVolunteer}>
            <h1>Đăng Ký Tình Nguyện Viên</h1>

            <form action="#" method="POST">
                {/* Thông tin cá nhân */}
                <h3>1 : Thông tin cá nhân</h3>
                <div className={styles.columVolunteer}>
                    <div className={styles.formgroupVolunteer}>
                        <label htmlFor="name">Họ và tên:</label>
                        <input type="text" id="name" name="name" placeholder="Nhập họ và tên" required />
                    </div>
                    <div className={styles.formgroupVolunteer}>
                        <label htmlFor="dob">Ngày sinh:</label>
                        <input type="date" id="dob" name="dob" required />
                    </div>
                    <div className={styles.formgroupVolunteer}>
                        <label>Giới tính:</label>
                        <select name="gender" id="gender">
                            <option value="Nam">Nam</option>
                            <option value="Nu">Nữ</option>
                        </select>
                    </div>
                    <div className={styles.formgroupVolunteer}>
                        <label htmlFor="phone">Số điện thoại:</label>
                        <input type="text" id="phone" name="phone" placeholder="Nhập số điện thoại" required />
                    </div>
                    <div className={styles.formgroupVolunteer}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Nhập email" required />
                    </div>
                    <div className={styles.formgroupVolunteer}>
                        <label htmlFor="address">Địa chỉ:</label>
                        <input type="text" id="address" name="address" placeholder="Nhập địa chỉ" required />
                    </div>
                </div>

                {/* Kinh nghiệm và kỹ năng */}
                <div className={styles.formSectionVolunteer}>
                    <h3>2 : Thông tin về kinh nghiệm và kỹ năng</h3>
                    <div className={styles.formgroupVolunteers}>
                        <label>Bạn đã có kinh nghiệm chăm sóc động vật chưa?</label>
                        <label><input type="radio" name="experience" value="Có" required /> Có</label>
                        <label><input type="radio" name="experience" value="Không" required /> Không</label>
                    </div>
                    <div className={styles.formgroupVolunteer}>
                        <label>Loại động vật bạn đã từng chăm sóc:</label>
                        <div className={styles.animalTakecare}>
                            <label><input type="checkbox" name="animal_experience" value="Chó" /> Chó</label>
                            <label><input type="checkbox" name="animal_experience" value="Mèo" /> Mèo</label>
                            <label><input type="checkbox" name="animal_experience" value="Chim" /> Chim</label>
                            <label><input type="checkbox" name="animal_experience" value="Khác" /> Động vật khác</label>
                        </div>
                    </div>

                    <div className={styles.formgroupVolunteer}>
                        <label>Kỹ năng liên quan (cho ăn, tắm rửa, chải lông, chăm sóc thú y cơ bản)</label>
                        <div className={styles.animalTakecare}>
                            <label><input type="checkbox" name="skills" value="Chó" /> Chó</label>
                            <label><input type="checkbox" name="skills" value="Mèo" /> Mèo</label>
                            <label><input type="checkbox" name="skills" value="Chim" /> Chim</label>
                            <label><input type="checkbox" name="skills" value="Khác" /> Động vật khác</label>
                        </div>
                    </div>
                </div>

                {/* Thời gian và cam kết */}
                <div className={styles.formSectionVolunteer}>
                    <h3>3 : Thời gian và cam kết</h3>
                    <div className={styles.formgroupVolunteer}>
                        <label htmlFor="available_time">Thời gian rảnh để tham gia:</label>
                        <input type="date" id="available_time" name="available_time" placeholder="Nhập thời gian rảnh" required />
                    </div>
                    <div className={styles.formgroupVolunteers}>
                        <label>Tham gia cam kết trong bao lâu?</label>
                        <label><input type="radio" name="commitment_duration" value="Ngắn hạn" required /> Ngắn hạn</label>
                        <label><input type="radio" name="commitment_duration" value="Dài ngày" required /> Dài ngày</label>
                    </div>
                    <div className={styles.formgroupVolunteers}>
                        <label>Khả năng làm việc vào cuối tuần hoặc ngày lễ?</label>
                        <label><input type="radio" name="weekend_availability" value="Có" required /> Có</label>
                        <label><input type="radio" name="weekend_availability" value="Không" required /> Không</label>
                    </div>
                </div>

                {/* Điều kiện sức khỏe */}
                <div className={styles.formSectionVolunteer}>
                    <h3>4 : Điều kiện sức khỏe</h3>
                    <div className={styles.formgroupVolunteer}>
                        <label htmlFor="health_condition">Tình trạng sức khỏe hiện tại:</label>
                        <input type="text" id="health_condition" name="health_condition" placeholder="Nhập tình trạng sức khỏe" required />
                    </div>
                    <div className={styles.formgroupVolunteers}>
                        <label>Có dị ứng với động vật nào không?</label>
                        <label><input type="radio" name="allergy" value="Có" required /> Có</label>
                        <label><input type="radio" name="allergy" value="Không" required /> Không</label>
                    </div>
                    <div className={styles.formgroupVolunteer}>
                        <div className={styles.allergy}>
                            <label htmlFor="allergy_details">Ghi rõ động vật nếu có </label>
                            <input type="text" id="allergy_details" name="allergy_details" placeholder="Động vật bị dị ứng" required />
                        </div>
                    </div>
                </div>

                {/* Lý do đăng ký */}
                <div className={styles.formSectionVolunteer}>
                    <h3>5 : Lý do đăng ký</h3>
                    <div className={styles.formgroupVolunteer}>
                        <label htmlFor="reason">Tại sao bạn muốn tham gia chăm sóc động vật?</label>
                        <input type="text" id="reason" name="reason" placeholder="Nhập lý do" required />
                    </div>
                </div>

                {/* Submit button */}
                <button type="submit" className={styles.btnFormVolunteer}>Đăng ký</button>
            </form>
        </div>
    );
}

export default FormVolunteer;
