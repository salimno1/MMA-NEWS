import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <pan className="loginTitle">Login</pan>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter yout email"
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter yout password"
        />
        <button className="loginButton">Login</button>
        <button className="registerButton">Register</button>
      </form>
    </div>
  );
}