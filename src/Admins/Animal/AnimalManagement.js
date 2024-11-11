import React, { useState, useEffect } from 'react';
import './Animal.css';
import AnimalForm from './AnimalForm';

function AnimalManagement() {
  const [animalList, setAnimalList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAnimal, setCurrentAnimal] = useState(null);

  // Lấy dữ liệu từ API
  useEffect(() => {
    fetch('http://localhost:8000/api/admin/animals')
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setAnimalList(data.data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAdd = () => {
    setCurrentAnimal(null);
    setIsEditing(true);
  };

  const handleEdit = (animal) => {
    setCurrentAnimal(animal);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setAnimalList(animalList.filter(animal => animal.id !== id));
  };

  const handleFormSubmit = (newData) => {
    if (currentAnimal) {
      setAnimalList(animalList.map(animal => (animal.id === currentAnimal.id ? newData : animal)));
    } else {
      setAnimalList([...animalList, { ...newData, id: animalList.length + 1 }]);
    }
    setIsEditing(false);
  };

  return (
    <div className="animal-management">
      <h2>Quản lý Thú cưng</h2>
      {!isEditing ? (
        <div>
          <button className="add-button" onClick={handleAdd}>Thêm thú cưng mới</button>
          <table className="animal-table">
            <thead>
              <tr>
                <th>Tên thú cưng</th>
                <th>Hình ảnh</th>
                <th>Thông tin</th>
                <th>Tình trạng</th>
                <th>Giống</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {animalList.map(animal => (
                <tr key={animal.id}>
                  <td>{animal.name}</td>
                  <td><img src={`../image/${animal.images[0].url}`} alt={animal.name} className="animal-image" /></td>
                  <td>
                    <div>Tuổi: {animal.age}</div>
                    <div>Màu sắc: {animal.colors}</div>
                  </td>
                  <td>{animal.health_info ? JSON.parse(animal.health_info).health_status : 'Không rõ'}</td>
                  <td>{animal.genitive}</td>
                  <td>
                    <button onClick={() => handleEdit(animal)}>Sửa</button>
                    <button onClick={() => handleDelete(animal.id)}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <AnimalForm
          initialData={currentAnimal}
          onSubmit={handleFormSubmit}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
}

export default AnimalManagement;
