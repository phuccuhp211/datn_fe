import React from 'react';
import Card from './../Cart/Card';
import './Dashboard.css';

function Dashboard() {
  const cardData = [
    { id: 1, title: "1000", subtitle: "Sản phẩm", color: "#e91e63", icon: "🛒" },
    { id: 2, title: "1000", subtitle: "Sản phẩm", color: "#f44336", icon: "👥" },
    { id: 3, title: "1000", subtitle: "Sản phẩm", color: "#2196f3", icon: "✏️" },
    { id: 4, title: "1000", subtitle: "Sản phẩm", color: "#9c27b0", icon: "📞" },
    { id: 5, title: "1000", subtitle: "Sản phẩm", color: "#e91e63", icon: "🛒" },
    { id: 6, title: "1000", subtitle: "Sản phẩm", color: "#f44336", icon: "👥" },
  ];

  return (
    <div className="dashboard">
      {cardData.map((data) => (
        <Card key={data.id} title={data.title} subtitle={data.subtitle} color={data.color} icon={data.icon} />
      ))}
    </div>
  );
}

export default Dashboard;
