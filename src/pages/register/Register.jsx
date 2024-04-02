import "./register.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with Devs and the world around you on DevPortFolio.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Username"
              className="loginInput"
              onChange={(e) => setName(e.target.value)}
              required
            />
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
            <input placeholder="Password Again" className="loginInput" />
            <button onClick={handleSubmit} className="loginButton">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
            <p class="join-link">
              Already have an account?
              <a href="/login" class="join-now">
                login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
