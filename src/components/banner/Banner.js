import "./banner.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="banner">
      <Link className="link" to="register">
        <p className="bannerP">Join our community now !</p>
      </Link>
    </div>
  );
}
