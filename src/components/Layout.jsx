import React, {Component } from "react";
import { Outlet, Link } from "react-router-dom";
import "../style/layout.css";
import Logo from "../img/section/logo1.png";
import faSearch from "../png/section/aside/search-black.png";
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
    const Search = document.querySelector('.search');
    const Logo = document.querySelector('.logo-item');
    const wrappers = document.querySelector('.wrappers');
  
  
    DropdownAll.forEach((element) => {
      if (element.style.display === '') {
        element.style.display = 'none';
        Search.style.display = 'none';
        Logo.style.display = 'none';
        wrappers.style.width = '60px';
      } else {
        element.style.display = '';
        Search.style.display = 'flex';
        Logo.style.display = 'flex';
        wrappers.style.width = '17%';
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

  

  

  render() {
    const { searchText } = this.state;
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

            <div className="search">
              <input
                type="text"
                placeholder="Search..."
                className="inputs"
                value={searchText}
                onChange={this.handleInputChange}
              />
              <div className="search-icon">
                <img
                  src={faSearch}
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
              </div>
            </div>

            <div className="dropdown">

              <Link to="/home" className="link" title="Home">

                  <img src={Home} alt="Home" style={{width:"25px" , height:"25px" , filter: "brightness(0) invert(1)"}}/>

                  <div className="linkText" >
                    Home
                  </div>

              </Link>

              <Link to="/home/blogs" className="link" title="Add-User">

                  <img src={AddUser} alt="" style={{width:"25px" , height:"25px" , filter: "brightness(0) invert(1)"}}/>

                  <div className="linkText">
                    Add-User
                  </div>

              </Link>

              <Link to="/home/contact" className="link" title="Transfer">
                  <img src={Transfer} alt="" style={{width:"25px" , height:"25px" , filter: "brightness(0) invert(1)"}}/>

                  <div className="linkText">
                    Transfer
                  </div>
                  
              </Link>

              <Link to="/home/group" className="link" title="Group">
                  <img src={Group} alt="" style={{width:"25px" , height:"25px" , filter: "brightness(0) invert(1)"}}/>

                  <div className="linkText">
                    Group
                  </div>
                  
              </Link>

              <Link to="/home/service" className="link" title="Service">
                  <img src={Service} alt="" style={{width:"25px" , height:"25px" , filter: "brightness(0) invert(1)"}}/>

                  <div className="linkText">
                    Service
                  </div>
                  
              </Link>

              <Link to="/home/joingroup" className="link" title="Service">
                  <img src={Service} alt="" style={{width:"25px" , height:"25px" , filter: "brightness(0) invert(1)"}}/>

                  <div className="linkText">
                    Join Group
                  </div>
                  
              </Link>

            </div>

        </div>

          <div className="navbar">

            <div className="nav-item">

              <div className="menuToggle" onClick={this.Hamburger}>

                  <span></span>
                  <span></span>
                  <span></span>

              </div>

              <div className="right-body">

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

                <Link to="/" className="logout">

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
