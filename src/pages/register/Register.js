import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <pan className="registerTitle">Register</pan>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Username" />
        <label>Email</label>
        <input className="registerInput" type="Email" placeholder="Email" />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Password"
        />

        <button className="registerRegButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
