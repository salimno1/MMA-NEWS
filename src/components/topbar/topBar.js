import "./topBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Topbar() {
  const PF = "http://localhost:5000/images/";
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <Link to="/">
          <img
            className="img"
            src="https://www.mmaglobal.com/files/upload/eg-mma-black-on-white-bg-20210629.png"
            alt=""
          />
        </Link>
      </div>
      <div className="topCenter">
        {" "}
        <ul className="topList">
          <li className="topListItem1">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>

          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <ul className="topList">
          <li className="topListItem2" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
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
      </div>
    </div>
  );
}
