import React, { useState } from "react";
import "./CSS/LoginSignup.css";
import axios from "axios";

export default function LoginSignup() {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const login = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        formData
      );
      console.log("login success", response.data);
      localStorage.setItem("auth-token", response.data.token);
      window.location.replace("/");
    } catch (error) {
      console.error("login error", error);
    }
  };

  const signUp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/signup",
        formData
      );
      console.log("signup success", response.data);
      localStorage.setItem("auth-token", response.data.token);
      window.location.replace("/");
    } catch (error) {
      console.error("signup error", error);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h3>{state}</h3>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signUp();
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Click to Login
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        )}

        { state === "Sign Up" ? (<div className="loginsignup-agree">
          <div className="check-box">
            <input type="checkbox" name="" id="" />
          </div>
          <div className="agree">
            <p>By signing up, you agree to our Terms of Service</p>
          </div>
        </div>) : (<></>)}
      </div>
    </div>
  );
}
