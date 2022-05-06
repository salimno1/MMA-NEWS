import "./topBar.css";

export default function Topbar() {
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
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://media-exp1.licdn.com/dms/image/D4E03AQGKsOwpuzJ36g/profile-displayphoto-shrink_200_200/0/1643657989520?e=1655942400&v=beta&t=bx7wW-g0SxB72k286XyhwqbxNAFaABTVOtGVjTwaH7o"
          alt=""
        />
        <i className="topSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
