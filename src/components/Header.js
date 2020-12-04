import React from "react";
import Navbar from "./Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-section">
        <h1>Uzman Klinik Psikolog & Adli Psikolog</h1>
        <h1>Ecem Nadir</h1>
      </div>

      <Navbar />
    </div>
  );
};

export default Header;
