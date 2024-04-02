import "./login.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { name, email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">DevPortFolio</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Email"
              className="loginInput"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              placeholder="Password"
              className="loginInput"
              onChange={(e) => setpassword(e.target.value)}
              required
            />
            <button className="loginButton" onClick={handleSubmit}>
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>

            <p class="join-link">
              Create a New Account
              <a href="/register" class="join-now">
                login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
