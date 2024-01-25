import React, { Component } from 'react';
import "../style/Adduser.css";
import Select from 'react-select';


const role = [
  { value: 'ROLE_User', label: 'ROLE_User' },
  { value: 'ROLE_Admin', label: 'ROLE_Admin' },
  { value: 'ROLE_Moderator', label: 'ROLE_Moderator' },
];

const status = [
  { value: 'Active', label: 'Active' },
  { value: 'noActive', label: 'noActive' },
];

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
        lastName: '',
        firstName: '',
        userName: '',
        password: '',
        showSuccess: false,
        Success: '',
        status:"",
        role:"",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      lastName: '',
      firstName: '',
      userName: '',
      password: '',
      showSuccess: '',
      Success: '',
      status:"Active",
      role:"ROLE_User",
    });
    console.log(this.state);

    setTimeout(() => {
      this.setState({
        showSuccess: false,
      });
    }, 3000);
  };


  handleInputChange = (event) => {
    const inputName = event.target.name;
    this.setState({ [inputName]: event.target.value });
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

  handleChange = (role) => {
    this.setState({ role }, () =>
      this.state.role
    );
  };

  handleStatus = (status) => {
    this.setState({ status }, () =>
    this.state.status
  );
  }

  render() {
    return (
      <div className='add-user' id='Add-user'>

        <form onSubmit={this.handleSubmit} className='user-form'>

          <h1 className='user-title'>Add User</h1>

          <div className='name'>
            <input
              type='text'
              name='firstName'
              value={this.state.firstName}
              onChange={this.handleInputChange}
              className='user-input'
              placeholder='firstName'
              required
            />

            <input
              type='text'
              name='lastName'
              value={this.state.lastName}
              onChange={this.handleInputChange}
              className='user-input'
              placeholder='lastName'
              required
            />
          </div>

          <input
            type='text'
            name='userName'
            value={this.state.userName}
            onChange={this.handleInputChange}
            className='user-input'
            placeholder='username'
            required
          />

          <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleInputChange}
            className='user-input'
            placeholder='password'
            required
          />

          <Select value={this.state.role} onChange={this.handleChange} options={role} className='user-select-modal' />

          <Select value={this.state.status} onChange={this.handleStatus} options={status} className='user-select-modal' />

          <button type='submit' className='user-btn'>
            Submit
          </button>
        </form>

        {this.renderSuccessMessage()}
      </div>
    );
  }
}

export default AddUser;
