import "./sidebar.css";

export default function Sidebar() {
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
          <li className="sideBarListItem">Sports</li>
          <li className="sideBarListItem">Music</li>
          <li className="sideBarListItem">Tech</li>
          <li className="sideBarListItem">Games</li>
          <li className="sideBarListItem">Movies</li>
          <li className="sideBarListItem">Crypto</li>
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
