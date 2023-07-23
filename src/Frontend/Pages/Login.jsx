import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { loginHandler } from "../Services/loginSignup";
import { useAuthContext } from "../Context/AuthContext";
import logo from '../assets/friend-fusion.png'
import "../styles/loginPage.css";

const Login = () => {
  const navigate = useNavigate();
  const { dispatchAuthState } = useAuthContext();
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(true);

  return (
    <div className="loginPage">
      <section className="loginDetailsSection">
        <img
          className="entryLogo"
          src={logo}
          alt="Friend-Fusion"
        />
        <form
          className="loginForm"
          onSubmit={(e) => {
            e.preventDefault();
            loginHandler(username, password, navigate, dispatchAuthState);
          }}
        >
          <input
            value={username}
            autoComplete="off"
            onChange={(e) => setusername(e.target.value)}
            placeholder="Enter username"
            type="text"
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
            Login
          </button>
          <button
            onClick={(e) => {
              setusername("isha");
              setPassword("isha123");
              loginHandler(
                "isha",
                "isha123",
                navigate,
                dispatchAuthState
              );
            }}
            className="guestLoginBtn cursorPointer"
          >
            Login as guest
          </button>
          <div>
            New to Friend Fusion? 
            <span
              className="cursorPointer loginSignUPSwitch"
              style={{ fontWeight: 700, width: 100 }}
              onClick={() => navigate("/signup")}
            >
              Sign up!
            </span>
            </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
