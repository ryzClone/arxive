import React, { Component } from 'react';
import "../style/Adduser.css";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
        lastName: '',
        firstName: '',
        userName: '',
        password: '',
        showSuccess: false,
        showUserForm: true,
        showModal: true,
        align: false,
        Success: '',
    };

    this.ModalBtn = this.ModalBtn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    // Login va parol kiritilgan bo'lsa
    if (this.state.lastName && this.state.firstName && this.state.userName && this.state.password) {
      console.log('hello');
      this.setState({
        lastName: ' ',
        firstName: ' ',
        userName: ' ',
        password: null,
        showSuccess: true,
        showModal: true,
        align: true,
      });

      setTimeout(() => {
        this.setState({
          showSuccess: false,
        });
      }, 3000);
    }
  };
  

  componentDidMount() {
    this.grost(true);
  }

  handleInputChange = (inputName, event) => {
    this.setState({ [inputName]: event.target.value });
  };

  grost = () => {
    // Logic for populating the select options
    // ...
    const select = document.getElementById('user-select');
    select.innerHTML = '';

    const option1 = document.createElement('option');
    option1.value = "ROLE_USER";
    option1.text = "User";
    select.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = "ROLE_ADMIN";
    option2.text = "Admin";
    select.appendChild(option2);

    const option3 = document.createElement('option');
    option3.value = "ROLE_MODERATOR";
    option3.text = "Moderator";
    select.appendChild(option3);

    this.setState({
      Success: 'this User has joined',
    });
  };

  renderSuccessMessage() {
    if (this.state.showSuccess) {
      return (
        <div className='Success-Block'>
          <div className='Success-Text'>{this.state.Success}</div>
        </div>

      );
    }
    return null;
  }


  ModalBtn() {
    this.setState({
      showUserForm: true,
      showModal: true,
      align: false,
    });
  }


  render() {
    return (
      <div className="add-user" id='Add-user'>

        <form onSubmit={this.handleSubmit} className='user-form'>
          <h1 className='user-title'>Add User</h1>

          <div className="name">

              <input
                type="text"
                value={this.firstName}
                onChange={(e) => this.handleInputChange('firstName', e)}
                className='user-input'
                placeholder='firstName'
                required
              />

              <input
                type="text"
                value={this.lastName}
                onChange={(e) => this.handleInputChange('lastName', e)}
                className='user-input'
                placeholder='lastName'
                required
              />


          </div>



          <input
            type="text"
            value={this.userName}
            onChange={(e) => this.handleInputChange('userName', e)}
            className='user-input'
            placeholder='username'
            required
          />

          <input
            type="password"
            value={this.password}
            onChange={(e) => this.handleInputChange('password', e)}
            className='user-input'
            placeholder='password'
            required
          />

          <select name="" id="user-select" className='user-select'></select>

          <button type='submit' className='user-btn'>Submit</button>

        </form>


        {this.renderSuccessMessage()}
      </div>
    );
  }
}

export default AddUser;
