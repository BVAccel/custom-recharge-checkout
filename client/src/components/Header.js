import React from "react";

import logo from "../img/logo.png";
import "../css/Header.css";

export default () => (
  <section className="banner">
    <div className="container">
      <img className="banner__logo" src={logo} alt="Skylar Body perfumes" />
    </div>
  </section>
);
