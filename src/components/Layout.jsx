import React, {Component } from "react";
import { Outlet, Link } from "react-router-dom";
import "../style/layout.css";
import Logo from "../img/section/logo1.png";
import Transfer from "../png/section/aside/transfer.png";
import Home from "../png/section/aside/home.png";
import AddUser from "../png/section/aside/addUser.png";
import LogOut from "../png/section/aside/logOut.png";
import Eng from "../png/section/aside/Eng.png";
import Rus from "../png/section/aside/rus.png";
import Uzb from "../png/section/aside/uzb.png";
import Group from "../png/section/aside/group.png";
import Service from "../png/section/aside/service.png";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      zipFiles: [
        "../zip/zip1.zip",
        "../zip/zip2.zip",
        "../zip/zip3.zip",
      ],
      hamburger:"flex",
      isDisplayed: false,
      language:Eng,
    };

    this.RemoteLanguage = this.RemoteLanguage.bind(this);
  }

  handleInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  Hamburger = () => {
    const DropdownAll = document.querySelectorAll('.linkText');
    const Logo = document.querySelector('.logo-item');
    const wrappers = document.querySelector('.wrappers');
    const NavBar = document.getElementById('navbar-body');
  
  
    DropdownAll.forEach((element) => {
      if (element.style.display === '') {
        element.style.display = 'none';
        Logo.style.display = 'none';
        wrappers.style.width = '60px';
        wrappers.style.minWidth = '60px';
        NavBar.style.marginLeft = "60px";

      } else {
        element.style.display = '';
        Logo.style.display = 'flex';
        wrappers.style.width = '17%';
        wrappers.style.minWidth = '15%';
        NavBar.style.marginLeft = "15%";
      }
    });
  }
  
  handleToggleDisplay = () => {
    this.setState((prevState) => ({
      isDisplayed: !prevState.isDisplayed,
    }));
  };

  RemoteLanguage(e) {
    const imgSrc = e.currentTarget.querySelector('img').src;
    this.setState({
      language: imgSrc,
      isDisplayed:false,
    });
  }

  componentDidMount(){
    if(window.localStorage.length === 0){
      window.location.pathname = '/'
    }
  }

   clearLocalstorage = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem('UserName');
    localStorage.removeItem('Role');

  };

  

  

  render() {
    const { isDisplayed } = this.state;
    

    return (
      <div className="block">

        <div className="wrappers">

            <div className="logo">

              <div className="logo-photo">
                <img
                  src={Logo}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                  }}
                />
              </div>

              <div className="logo-item">
                <div className="logo-item-title">Uztelecom</div>
                <div className="logo-item-text">версии: 16.3.18</div>
              </div>
            </div>

            <div className="dropdown">

              <Link to="/home" className="link" title="Home">

                  <img src={Home} alt="Home" style={{width:"25px" , height:"25px" , filter: "brightness(0) invert(1)"}}/>

                  <div className="linkText" >
                    Home
                  </div>

              </Link>

              <Link to="/home/readuser" className="link" title="Add-User" style={{display: localStorage.Role === "ROLE_ADMIN" ? "flex" : "none"}}>

                  <img src={AddUser} alt="" style={{width:"25px" , height:"25px" , filter: "brightness(0) invert(1)"}}/>

                  <div className="linkText">
                    User
                  </div>

              </Link>

              <Link to="/home/transfer" className="link" title="Transfer" style={{display: localStorage.Role === "ROLE_ADMIN" ? "flex" : "none"}}>
                  <img src={Transfer} alt="" style={{width:"25px" , height:"25px" , filter: "brightness(0) invert(1)"}}/>

                  <div className="linkText">
                    Transfer
                  </div>
                  
              </Link>

              <Link to="/home/group" className="link" title="Group" style={{display: localStorage.Role === "ROLE_ADMIN" ? "flex" : "none"}}>
                  <img src={Group} alt="" style={{width:"25px" , height:"25px" , filter: "brightness(0) invert(1)"}}/>

                  <div className="linkText">
                    Group
                  </div>
                  
              </Link>

              <Link to="/home/host" className="link" title="Host" style={{display: localStorage.Role === "ROLE_ADMIN" ? "flex" : "none"}}>
                  <img src={Service} alt="" style={{width:"25px" , height:"25px" , filter: "brightness(0) invert(1)"}}/>

                  <div className="linkText">
                    Host
                  </div>
                  
              </Link>

              <Link to="/home/joingroup" className="link" title="JoinGroup" style={{display: localStorage.Role === "ROLE_ADMIN" ? "flex" : "none"}}>
                  <img src={Service} alt="" style={{width:"25px" , height:"25px" , filter: "brightness(0) invert(1)"}}/>

                  <div className="linkText">
                    Join Group
                  </div>
                  
              </Link>

            </div>

        </div>

          <div className="navbar" id="navbar-body">

            <div className="nav-item">

              <div className="menuToggle" onClick={this.Hamburger}>

                  <span></span>
                  <span></span>
                  <span></span>

              </div>

              <div className="right-body">

                <div className="localStorage">

                  <div className="localStorage-username">
                    <p>Username: </p> {localStorage.getItem('UserName').toUpperCase()}
                  </div>

                  <div className="localStorage-username">
                    <p>Role: </p> {localStorage.getItem('Role') === "ROLE_ADMIN" ? "Admin" : "User"}
                  </div>

                </div>

                <div className="language">

                  <div className="language-always">
                     <img src={this.state.language} alt="" style={{width:"25px" , height:"25px"}} onClick={this.handleToggleDisplay}/>
                  </div>

                  <div className="Language-body" style={{ display: isDisplayed ? 'flex' : 'none' }}>

                        <li onClick={this.RemoteLanguage}><img src={Eng} alt="" className="Language-body-img" /><p>English</p></li>

                        <li onClick={this.RemoteLanguage}><img src={Rus} alt="" className="Language-body-img"/><p>Russian</p></li>


                        <li onClick={this.RemoteLanguage}>
                          <img src={Uzb} alt="" className="Language-body-img"/>
                          <p>Uzbek</p>
                        </li>

                  </div>

                </div>

                <Link to="/" onClick={this.clearLocalstorage} className="logout">

                  <img src={LogOut} alt="" style={{width:"25px" , height:"25px"}}/>

                </Link>

              </div>

            </div>

            <div className="nav-body">
              <Outlet />
            </div>

          </div>


      </div>
    );
  }
}

export default Layout;
