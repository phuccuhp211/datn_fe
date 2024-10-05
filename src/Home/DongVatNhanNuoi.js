import React from 'react';
import dogImage from '../assets/a1.png';
import dogAndPersonImage from '../assets/img1.png';
import catImage from '../assets/img2.png';
import dogAndDoorImage from '../assets/a1.png';
import dogSupportImage from '../assets/img2.png';

const DongVatNhanNuoi = () => {
  const animals = [
    {
      name: "Bow",
      breed: "Đốm đen",
      gender: "Đực",
      age: "3 tuổi",
      health: "Thường xuyên",
      vaccination: "Đã tiêm phòng",
      image: dogImage, // Assigning an image to the animal
    },
    {
      name: "Bông",
      breed: "Đốm đen",
      gender: "Cái",
      age: "3 tuổi",
      health: "Thường xuyên",
      vaccination: "Đã tiêm phòng",
      image: catImage, // Assigning a different image
    },
    // Add more animals and assign appropriate images
  ];

  return (
    <div className="adoption-page">
      <h1 className="title">Động Vật Nhận Nuôi</h1>
      <div className="animal-grid">
        {animals.map((animal, index) => (
          <div className="animal-card" key={index}>
            <img
              src={animal.image} // Use the image assigned to each animal
              alt={animal.name}
              className="animal-image"
            />
            <div className="animal-info">
              <h2>{animal.name}</h2>
              <p>Giống: {animal.breed}</p>
              <p>Giới tính: {animal.gender}</p>
              <p>Tuổi: {animal.age}</p>
              <p>Sức khỏe: {animal.health}</p>
              <p>Tiêm phòng: {animal.vaccination}</p>
            </div>
            
          </div>
          
        ))}
         {animals.map((animal, index) => (
          <div className="animal-card" key={index}>
            <img
              src={animal.image} // Use the image assigned to each animal
              alt={animal.name}
              className="animal-image"
            />
            <div className="animal-info">
              <h2>{animal.name}</h2>
              <p>Giống: {animal.breed}</p>
              <p>Giới tính: {animal.gender}</p>
              <p>Tuổi: {animal.age}</p>
              <p>Sức khỏe: {animal.health}</p>
              <p>Tiêm phòng: {animal.vaccination}</p>
            </div>
            
          </div>
          
        ))}
         {animals.map((animal, index) => (
          <div className="animal-card" key={index}>
            <img
              src={animal.image} // Use the image assigned to each animal
              alt={animal.name}
              className="animal-image"
            />
            <div className="animal-info">
              <h2>{animal.name}</h2>
              <p>Giống: {animal.breed}</p>
              <p>Giới tính: {animal.gender}</p>
              <p>Tuổi: {animal.age}</p>
              <p>Sức khỏe: {animal.health}</p>
              <p>Tiêm phòng: {animal.vaccination}</p>
            </div>
            
          </div>
          
        ))}
      </div>

      <div className="see-more">
        <button className="see-more-button">Xem Thêm</button>
      </div>
    </div>
  );
};

export default DongVatNhanNuoi;
