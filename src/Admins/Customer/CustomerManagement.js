import React, { useState, useEffect } from 'react';
import './customer.css';

function CustomerManagement() {
  const itemsPerPage = 5;
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/admin/users');
        const data = await response.json();

        if (data.status) {
          setCustomers(data.data);
        } else {
          setError('Failed to fetch users.');
        }
      } catch (err) {
        setError('An error occurred while fetching users.');
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  // Hàm định dạng ngày theo định dạng dd/mm/yyyy
  const formatDate = (dateString) => {
    if (!dateString) return ''; // Nếu không có ngày, trả về chuỗi rỗng
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const totalPages = Math.ceil(customers.length / itemsPerPage);
  const currentData = customers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = (id) => {
    const updatedCustomers = customers.filter(customer => customer.id !== id);
    setCustomers(updatedCustomers);

    // Adjust current page if deleting the last item on current page
    if (currentData.length === 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>{error}</div>; // Error state
  }

  return (
    <div className="customer-table">
      <div className="search-section">
        <input type="text" placeholder="Tên khách hàng" />
        <input type="email" placeholder="Địa chỉ Email" />
        <input type="text" placeholder="Số điện thoại" />
        <input type="text" placeholder="Địa chỉ" />
        <button className="search-button">TÌM KIẾM</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên khách hàng</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Ngày tham gia</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((customer, index) => (
            <tr key={customer.id}>
              <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.address}</td>
              <td>{formatDate(customer.email_verified_at)}</td> {/* Sử dụng formatDate */}
              <td>
                <button className="delete-button" onClick={() => handleDelete(customer.id)}>XÓA</button>
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

export default CustomerManagement;
