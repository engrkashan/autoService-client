import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Booking() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  function updateUsername(event) {
    setUsername(event.target.value);
  }

  function updatePassword(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: username, password: password }),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const responseData = await response.json();
      const token = responseData.token;

      // Store the token in localStorage
      localStorage.setItem("token", token);

      navigate("/AvailableTimeForm");
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Login failed. Please try again.",
      });
    }
  }

  return (
    <div className="page-container">
      <main className="login">
        <form className="login__form" onSubmit={handleSubmit}>
          <h1 className="login__title">Log in</h1>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={updateUsername}
            className="username loginInput"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={updatePassword}
            className="password loginInput"
          />
          <input className="loginButton" type="submit" value="Login" />
        </form>
      </main>

      <footer>
        <h4>
          AUTO<span className="red-text">SERVISAS 222E</span>
        </h4>
        <p className="p-footer">
          Mus rasite adresu: Staniūnų g. 67a, Panevėžys
        </p>
        <p className="p-footer">Susisiekite su mumis: +37063222439</p>
      </footer>
    </div>
  );
}
