import { useState } from "react";
import "./index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
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
    <div class="container">
      <h2>
        DevPortFolio<span></span>
      </h2>
      <div class="text">
        <h1>Login</h1>
        <p>Stay updated on your professional world</p>
      </div>
      <div class="your-input">
        <div class="input">
          <input
            type="text"
            name="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="email">Email</label>
        </div>
        <div class="input">
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={(e) => setpassword(e.target.value)}
          />
          <label for="password">Password</label>
        </div>
      </div>
      <a href="#" class="forgot-password-link">
        Forgot Password?
      </a>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
