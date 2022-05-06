import "./topBar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i class="topIcon fa-brands fa-facebook"></i>
        <i class="topIcon fa-brands fa-facebook"></i>
        <i class="topIcon fa-brands fa-facebook"></i>
        <i class="topIcon fa-brands fa-facebook"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://media-exp1.licdn.com/dms/image/D4E03AQGKsOwpuzJ36g/profile-displayphoto-shrink_200_200/0/1643657989520?e=1655942400&v=beta&t=bx7wW-g0SxB72k286XyhwqbxNAFaABTVOtGVjTwaH7o"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
