import Sidebar from "../../components/siderbar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdate">Uppdate your accoount</span>
          <span className="settingsDelete">delete account</span>
        </div>
        <form className="settingsForm">
          <label>profile picture</label>
          <div className="settingPP">
            <img
              src="https://dynamicmedia.livenationinternational.com/Media/y/c/p/165dd24c-d94b-4b4a-b880-b2a60b867608.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPItem fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Salim" />
          <label>Username</label>
          <input type="email" placeholder="Salim@gmail.com" />
          <label>Username</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>{" "}
      <Sidebar />
    </div>
  );
}
