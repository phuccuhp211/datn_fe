import React from "react";
import Header from "./Home/Header";
import Home from "./Home/Home";
import ThongTin from "./Home/ThongTin";
import DongVatNhanNuoi from "./Home/DongVatNhanNuoi";
import TinTuc from "./Home/TinTuc";
import SanPham from "./Home/SanPham";
import Api from "./Home/Api";
import Footer from "./Home/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />  
      <ThongTin /> 
      <DongVatNhanNuoi />
      <TinTuc />
      <SanPham /> 
      <Api /> 
      <Footer />
    </div>
  );
}

export default App;
