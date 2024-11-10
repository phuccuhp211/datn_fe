import React, { useState } from 'react';

function SupportManagement() {
  const initialDonations = [
    { id: 1, name: 'Luong Bảo Miên', date: '16/08/2024', info: 'Email: user1@example.com - SĐT: 0348557779', amount: '100.000 VND' },
    { id: 2, name: 'Luong Bảo Miên', date: '17/08/2024', info: 'Email: user2@example.com - SĐT: 0348557779', amount: '200.000 VND' },
    { id: 3, name: 'Luong Bảo Miên', date: '18/08/2024', info: 'Email: user3@example.com - SĐT: 0348557779', amount: '300.000 VND' },
    { id: 4, name: 'Luong Bảo Miên', date: '19/08/2024', info: 'Email: user4@example.com - SĐT: 0348557779', amount: '400.000 VND' },
    { id: 5, name: 'Luong Bảo Miên', date: '20/08/2024', info: 'Email: user5@example.com - SĐT: 0348557779', amount: '500.000 VND' },
    { id: 6, name: 'Luong Bảo Miên', date: '21/08/2024', info: 'Email: user6@example.com - SĐT: 0348557779', amount: '600.000 VND' },
    { id: 7, name: 'Luong Bảo Miên', date: '22/08/2024', info: 'Email: user7@example.com - SĐT: 0348557779', amount: '700.000 VND' },
    { id: 8, name: 'Luong Bảo Miên', date: '23/08/2024', info: 'Email: user8@example.com - SĐT: 0348557779', amount: '800.000 VND' },
    { id: 9, name: 'Luong Bảo Miên', date: '24/08/2024', info: 'Email: user9@example.com - SĐT: 0348557779', amount: '900.000 VND' },
    { id: 10, name: 'Luong Bảo Miên', date: '25/08/2024', info: 'Email: user10@example.com - SĐT: 0348557779', amount: '1.000.000 VND' },
  ];

  const itemsPerPage = 5;
  const [donations, setDonations] = useState(initialDonations);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(donations.length / itemsPerPage);
  const currentData = donations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = (id) => {
    const updatedDonations = donations.filter(donation => donation.id !== id);
    setDonations(updatedDonations);

    // Điều chỉnh lại trang nếu xóa hết mục trên trang hiện tại
    if (currentData.length === 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="support-table">
      <div className="search-section">
        <input type="date" placeholder="Ngày ủng hộ" />
        <select>
          <option value="">Địa chỉ Email</option>
        </select>
        <input type="text" placeholder="Tên người ủng hộ" />
        <button className="search-button">TÌM KIẾM</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên ủng hộ</th>
            <th>Ngày ủng hộ</th>
            <th>Thông tin</th>
            <th>Số tiền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((donation, index) => (
            <tr key={donation.id}>
              <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
              <td>{donation.name}</td>
              <td>{donation.date}</td>
              <td>{donation.info}</td>
              <td>{donation.amount}</td>
              <td>
                <button className="delete-button" onClick={() => handleDelete(donation.id)}>XÓA</button>
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

export default SupportManagement;
