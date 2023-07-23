import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { signupHandler } from "../Services/loginSignup";
import "../styles/loginPage.css";
import logo from '../assets/friend-fusion.png'

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(true);

  const navigate = useNavigate();
  return (
    <div className="loginPage">
      <section className="loginDetailsSection">
        <img
          className="entryLogo signuplogo"
          src= {logo}
          alt="Friend-Fusion"
        />
        <form
          className="loginForm"
          onSubmit={(e) => {
            e.preventDefault();
            signupHandler(firstName, lastName, username, password, navigate);
          }}
        >
          <input
            required
            autoComplete="off"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="enter first name"
            type="text"
            id="input_firstName"
          />

          <input
            required
            placeholder="enter last name"
            autoComplete="off"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            id="input_lastName"
          />
          <input
            className="inputUsername"
            minLength={6}
            maxLength={12}
            pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$"
            title="username should contain at least one number and one special char. it should be of atleast 6 digits"
            required
            autoComplete="off"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="enter username"
            type="username"
            id="input_username"
          />
          <span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter password"
              type={showPass ? "password" : "text"}
              id="input_password"
            />
            <span
              className="seePassword cursorPointer"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <BiShow /> : <BiHide />}
            </span>
          </span>
          <button className="loginBtn cursorPointer" type="submit">
            Sign Up
          </button>
          <p style={{ width: "20rem", marginLeft: "2.5rem" }}>
            Already have an account?{" "}
            <span
              className="cursorPointer loginSignUPSwitch"
              style={{ fontWeight: 700 }}
              onClick={() => navigate("/login")}
            >
              {" "}
              Login here!
            </span>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Signup;
