import "./banner.css";
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
export default function Banner() {
  const { user, dispatch } = useContext(Context);
  return (
    <div className="banner">
      <Link className="link" to="register">
        <p className="bannerP">{!user && "Join our community now !"}</p>
      </Link>
    </div>
  );
}
