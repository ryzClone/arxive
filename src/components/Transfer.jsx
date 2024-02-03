import React, { Component } from 'react';
import "../style/transfer.css";
import Select from 'react-select';

const service = [];

class Transfer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      folder: '',
      select: service,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputChangeFolder = this.handleInputChangeFolder.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleInputChangeFolder(event) {
    this.setState({ folder: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.selectedValue === 'option1') {
      document.getElementById('form-label-demo').innerHTML="Siz Select tanlamadingiz !!!";
      document.getElementById('form-label-demo').style.color="red"
    }else{

      document.getElementById('form-label-demo').innerHTML="";
      this.setState({ selectedValue: 'option1', folder: '' });
    }
  
  }

  handleStatus = (status) => {

    this.setState({ status }, () =>
      this.state.status
    );

  console.log(status);
  }
  
  componentDidMount = () => {
    if(localStorage.getItem('Role') === "ROLE_USER"){
      window.location.pathname = "/home"
    }


    fetch("http://localhost:8081/service/all/list", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.getAccessToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then((data) => {
          data.data.forEach(element => {

          const isElementExists = service.some(item => item.value === element.id || item.id === element.name);

          if (!isElementExists) {
            service.push({ value: element.id, label: element.name });
          }

        });
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
      });

  }

  getAccessToken = () => {
    return localStorage.getItem("jwtToken");
  };

  render() {
    return (
      <div className='transfer'>
        
        <form onSubmit={this.handleSubmit} className='form-body'>

          <div className='form-item'>

            <div className='form-left'>

              <h1>From Server</h1>

              <label htmlFor="" className='form-label'>
                Service
                <Select value={this.state.service} onChange={this.handleStatus} options={service} className='user-select-modal' />
              </label>

            </div>

            <div className='form-left'>

              <h1>To Server</h1>

              <label htmlFor="" className='form-label'>
                Path Folder
                <input
                  type="text"
                  name="folder"
                  className='form-input'
                  value={this.state.folder}
                  onChange={this.handleInputChangeFolder}
                  required
                />
              </label>

            </div>

          </div>

          <button type="submit" className='form-btn'>Transfer</button>
        </form>

      </div>
    );
  }
}

export default Transfer;
