import React, { Component } from 'react';
import "../style/transfer.css";

class Transfer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      selectedValue: 'option1',
      folder: '',
      select: false,
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

  handleChange = (event) => {
    this.setState({ selectedValue: event.target.value });
  };

  handleSelect = () => {
    this.setState((prevState) => ({ select: !prevState.select }));
  };

  addHost = () => {
    document.querySelector('.action-form-background').style.display = "flex"
    document.querySelector('.action-select').style.display = "flex"
  };
  closeSelect = () => {
    document.querySelector('.action-form-background').style.display = "none"
    document.querySelector('.action-select').style.display = "none"
  }
  addBackHost = () => {
    console.log(this.state.input1);
    console.log(this.state.input2);
    console.log(this.state.input3);
    console.log(this.state.input4);
    console.log(this.state.input5);
  }

  render() {
    return (
      <div className='transfer'>
        
        <form onSubmit={this.handleSubmit} className='form-body'>

          <div className='form-item'>

            <div className='form-left'>

              <h1>Qayerdan</h1>

              <label htmlFor="" className='form-label'>
                Select
                <select name="" id="" className='form-select' value={this.state.selectedValue} onChange={this.handleChange}>
                  <option value="option1" disabled>
                    Choose host
                  </option>
                  <option value="option2" className='form-select'>Option 2</option>
                  <option value="option3" className='form-select'>Option 3</option>
                  <option value="option4" className='form-select'>Option 4</option>
                </select>
              </label>
              <div id="form-label-demo"></div>

              <button type="button" className='form-btn' onClick={this.addHost}>Add host</button>

            </div>

            <div className='form-left'>

              <h1>Qayerga</h1>

              <label htmlFor="" className='form-label'>
                Folder
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

        <div className="action-form-background"></div>

          <form className='action-select'>

            <div className="close-action-select" onClick={this.closeSelect}>
              <span></span>
              <span></span>
            </div>

            <label htmlFor="" className='form-label'>
              Host
              <input
                type="text"
                name="input1"
                className='form-input'
                value={this.state.input1}
                onChange={this.handleInputChange}
                required
              />
            </label>

            <label htmlFor="" className='form-label'>
              Port
              <input
                type="text"
                name="input2"
                className='form-input'
                value={this.state.input2}
                onChange={this.handleInputChange}
                required
              />
            </label>

            <label htmlFor="" className='form-label'>
              Username
              <input
                type="text"
                name="input3"
                className='form-input'
                value={this.state.input3}
                onChange={this.handleInputChange}
                required
              />
            </label>

            <label htmlFor="" className='form-label'>
              Password
              <input
                type="text"
                name="input4"
                className='form-input'
                value={this.state.input4}
                onChange={this.handleInputChange}
                required
              />
            </label>

            <label htmlFor="" className='form-label'>
              Remote folder location
              <input
                type="text"
                name="input5"
                className='form-input'
                value={this.state.input5}
                onChange={this.handleInputChange}
                required
              />
            </label>

            <button className='form-btn-action' onClick={this.addBackHost}>Add host</button>

          </form>

      </div>
    );
  }
}

export default Transfer;
