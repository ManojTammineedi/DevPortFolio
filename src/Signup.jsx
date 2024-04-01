import { useState } from "react";
import "./index.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
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
    <div class="container">
      <h2>
        DevPortFolio<span></span>
      </h2>
      <form>
        <div class="text">
          <h1>Sign in</h1>
          <p>Stay updated on your professional world</p>
        </div>
        <div class="your-input">
          <div class="input">
            <input
              type="name"
              name="name"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label for="name">Name</label>
          </div>
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
          <div class="input">
            <input
              type="confirmpassword"
              name="confirmpassword"
              id="confirmpassword"
              required
            />
            <label for="confirmpassword">Confirm Password</label>
          </div>
        </div>
      </form>
      <button onClick={handleSubmit}>Sign in</button>
      <p class="join-link">
        Already have an account?
        <a href="/login" class="join-now">
          login
        </a>
      </p>
    </div>
  );
}

export default Signup;
