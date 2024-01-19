import React from "react";
import { Outlet } from "react-router-dom";
import "../style/loginpage.css";
import myImg from "../img/login/background.jpg";
import EyeInvis from "../png/login-page/eyeivis.png";
import Eye from "../png/login-page/eye.png";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
    };
  }
  
  handleLoginChange = (e) => {
    this.setState({ login: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  togglePasswordVisibility = () => {
    const passwordInput = document.getElementById("inputPass");
    const eyeImage = document.getElementById("eyeClick");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeImage.src = Eye;
    } else {
      passwordInput.type = "password";
      eyeImage.src = EyeInvis;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.login === "" || this.state.password === "") {
      alert("Login and password are required!");
    } else {
      localStorage.setItem('username', 'john_doe');
      window.location.pathname = "/home";
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="wrapperOpacity"></div>

        <div className="card-item">
          <div className="card-opacity"></div>
          <form action="" className="form" onSubmit={this.handleSubmit}>
            <h1 className="title">Welcome </h1>
            <input
              type="text"
              placeholder="Login"
              className="input"
              required
              value={this.state.login}
              onChange={this.handleLoginChange}
            />
            <div className="eyeInput">
              <input
                type="password"
                placeholder="Password"
                className="input"
                id="inputPass"
                required
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <img
                src={EyeInvis}
                alt=""
                id="eyeClick"
                className="eyeImg"
                onClick={this.togglePasswordVisibility}
              />
            </div>
            <input type="submit" value="Submit" className="submit" />
          </form>
          <img src={myImg} alt="" className="Img" />
        </div>

        <Outlet />
      </div>
    );
  }
}
