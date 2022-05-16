import axios from "axios";
import { useEffect, useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img
          className="sideBarImg"
          src="https://images.news18.com/ibnlive/uploads/2022/01/bitcoin.png"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          animi dolorum accusamus voluptatum! Voluptatem magnam, ipsum quod
          nostrum laborum officiis sequi eligendi sint recusandae quisquam,
          illum, numquam repellat inventore a!
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              {" "}
              <li className="sideBarListItem">{c.name}</li>{" "}
            </Link>
          ))}
        </ul>
      </div>
      <div className="sideBarItem"></div>
      <span className="sideBarTitle">FOLLOW US</span>
      <div className="sideBarSocials">
        <i class="topIcon fa-brands fa-facebook"></i>
        <i class="topIcon fa-brands fa-facebook"></i>
        <i class="topIcon fa-brands fa-facebook"></i>
        <i class="topIcon fa-brands fa-facebook"></i>
      </div>
    </div>
  );
}
