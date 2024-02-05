import React, { Component } from 'react';
import "../style/Adduser.css";
import Select from 'react-select';
import Success from './SucsesFull';

const TableBeck = [
  { servicename:"Mobile"},
  { servicename:"Mobile"},
  { servicename:"Mobile"},
  { servicename:"Mobile"},
  { servicename:"Mobile"},
  { servicename:"Mobile"},
  { servicename:"Mobile"},
]

const GroupName =[];

const status = [
  { value: true, label: 'Active' },
  { value: false, label: 'No active' },
];

class AddServce extends Component {
  constructor(props) {
    super(props);
    this.state = {
        serviceName: '',
        ip: '',
        port: '',
        username: '',
        groupname:"",
        status:"",

        showSuccess: false,
        Success: '',
        text:"",
        color: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    setTimeout(() => {
      this.setState({
        showSuccess: false,
      });
    }, 3000);

    const serviceName = this.state.serviceName;
    const Ip = this.state.ip;
    const Port = this.state.port;
    const userName = this.state.username;
    const groupName = this.state.groupname.name;
    const status = this.state.status.value;

    const data = {
      serviceName,
      Ip,
      Port,
      userName,
      groupName,
      status,
    };


    fetch("http://localhost:8081/auth/register", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.getAccessToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {

        this.setState({
          text: data.message,
          showSuccess:true,
          color:data.success,
        })
      
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
      });

      this.setState({
        serviceName: '',
        ip: '',
        port: '',
        username: '',
        groupName:"",
        status:"Active",
        showSuccess: '',
        Success: '',
      });

  };

   getAccessToken = () => {
    return localStorage.getItem("jwtToken");
  };


  handleInputChange = (event) => {
    const inputName = event.target.name;
    this.setState({ [inputName]: event.target.value });
  };

  renderSuccessMessage() {
    if (this.state.showSuccess) {
      return (
        <Success title={this.state.text} background={this.state.color}/>
      );
    }
    return null;
  }

  handleChange = (groupname) => {
    this.setState({ groupname }, () =>
      this.state.groupname
    );
  };

  handleStatus = (status) => {

    this.setState({ status }, () =>
      this.state.status
    );

  }

  componentDidMount = () => {
    if(localStorage.getItem('Role') === "ROLE_USER"){
      window.location.pathname = "/homes"
    }

    TableBeck.forEach((element , index) => {

      const newGroup = { value: element.servicename + index, label: element.servicename + index };
      
      if (!GroupName.some(existingGroup => existingGroup.value === newGroup.value)) {
        GroupName.push(newGroup);
      }
      
    })
  }

  render() {
    return (
      <div className='add-user' id='Add-user'>

        <form onSubmit={this.handleSubmit} className='user-form'>

          <h1 className='user-title'>Add Service</h1>

            <input
              type='text'
              name='serviceName'
              value={this.state.serviceName}
              onChange={this.handleInputChange}
              className='user-input'
              placeholder='Service name'
              required
            />

            <input
              type='text'
              name='ip'
              value={this.state.ip}
              onChange={this.handleInputChange}
              className='user-input'
              placeholder='Ip'
              required
            />

          <input
            type='number'
            name='port'
            value={this.state.port}
            onChange={this.handleInputChange}
            className='user-input'
            placeholder='Port'
            required
          />

          <input
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleInputChange}
            className='user-input'
            placeholder='User name'
            required
          />

          <Select value={this.state.groupname} onChange={this.handleChange} options={GroupName} className='user-select-modal' />

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

export default AddServce;
