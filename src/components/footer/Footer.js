import "./footer.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://www.facebook.com/Salimchik/">
        {" "}
        <i class="topIcon fa-brands fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com/vitarplatsostberga/">
        <i class="topIcon fa-brands fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/salim-mvoungui-45b9a179/">
        <i class="topIcon fa-brands fa-linkedin"></i>
      </a>{" "}
      <a href="https://github.com/salimno1">
        <i class="topIcon fa-brands fa-github"></i>
      </a>
    </div>
  );
}
