import React, { useState } from 'react';
import './Volunteer.css';

function VolunteerManagement() {
  const initialVolunteers = [
    { id: 1, name: 'Nguyễn Văn A', email: 'email1@example.com', phone: '0348557771', address: 'Hà Nội', date: '01/09/2024' },
    { id: 2, name: 'Nguyễn Văn B', email: 'email2@example.com', phone: '0348557772', address: 'Hồ Chí Minh', date: '02/09/2024' },
    { id: 3, name: 'Nguyễn Văn C', email: 'email3@example.com', phone: '0348557773', address: 'Đà Nẵng', date: '03/09/2024' },
    { id: 4, name: 'Nguyễn Văn D', email: 'email4@example.com', phone: '0348557774', address: 'Cần Thơ', date: '04/09/2024' },
    { id: 5, name: 'Nguyễn Văn E', email: 'email5@example.com', phone: '0348557775', address: 'Nha Trang', date: '05/09/2024' },
    { id: 6, name: 'Nguyễn Văn F', email: 'email6@example.com', phone: '0348557776', address: 'Huế', date: '06/09/2024' },
    { id: 7, name: 'Nguyễn Văn G', email: 'email7@example.com', phone: '0348557777', address: 'Vũng Tàu', date: '07/09/2024' },
    { id: 8, name: 'Nguyễn Văn H', email: 'email8@example.com', phone: '0348557778', address: 'Phan Thiết', date: '08/09/2024' },
    { id: 9, name: 'Nguyễn Văn I', email: 'email9@example.com', phone: '0348557779', address: 'Hải Phòng', date: '09/09/2024' },
    { id: 10, name: 'Nguyễn Văn J', email: 'email10@example.com', phone: '0348557780', address: 'Bến Tre', date: '10/09/2024' },
  ];

  const itemsPerPage = 5; // Số lượng tình nguyện viên hiển thị trên một trang
  const [volunteers, setVolunteers] = useState(initialVolunteers);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(volunteers.length / itemsPerPage); // Tính tổng số trang
  const currentData = volunteers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = (id) => {
    const updatedVolunteers = volunteers.filter(volunteer => volunteer.id !== id);
    setVolunteers(updatedVolunteers);

    // Điều chỉnh lại trang nếu xóa hết mục trên trang hiện tại
    if (currentData.length === 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="volunteer-table">
      <div className="search-section">
        <input type="text" placeholder="Tên tình nguyện viên" />
        <input type="email" placeholder="Địa chỉ Email" />
        <input type="text" placeholder="Số điện thoại" />
        <input type="text" placeholder="Địa chỉ" />
        <button className="search-button">TÌM KIẾM</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên tình nguyện viên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Ngày tham gia</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((volunteer, index) => (
            <tr key={volunteer.id}>
              <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
              <td>{volunteer.name}</td>
              <td>{volunteer.email}</td>
              <td>{volunteer.phone}</td>
              <td>{volunteer.address}</td>
              <td>{volunteer.date}</td>
              <td>
                <button className="delete-button" onClick={() => handleDelete(volunteer.id)}>XÓA</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default VolunteerManagement;
