import React, {Component } from "react";
import "../style/Group.css";
import FilterImg from "../png/section/aside/white-filter.png";
import FilterClose from "../png/section/aside/close.png";


class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: 'All',
      group: '',
      table: ''
    };
    this.display = {
      formDisplay: false,
    }

    this.formFiltre = this.formFiltre.bind(this);

  }

  formFiltre = () => {
    this.setState((prevState) => ({
      formDisplay: !prevState.formDisplay
    }))
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
  }

  handleFormSubmites = () => {

    console.log(this.state);
  }

  handleFormClear  = () => {

    this.setState({
      name:'',
      group:'',
      table:'',
      status:'All',
    })

  }

  handleStatusChange = (e) => {
    this.setState({ status: e.target.value });
  };

  render() {

    return (
     <div className="main">

        <div className="group-menu">

          <div className="group-main-text">
            Group
          </div>

          <div className="group-main-items">

            <button className="group-main-item-list1">+ Add new</button>

            <button className="group-main-item-list2">Download</button>

            <button className="group-main-item-list3" onClick={this.formFiltre}>Filter</button>

          </div>

        </div>

        <form action="" className="group-body" style={{ display: this.state.formDisplay ? "flex" : "none" }} onClick={this.handleFormSubmit }>

          <div className="input-body">
            <label htmlFor="" className="group-label">Name</label>
            <input type="text" name="name" value={this.state.name} className="group-input" onChange={this.handleInputChange} />
          </div>

          <div className="input-body">

            <label htmlFor="">Status</label>

          <select name="status" id="" className="group-input" onChange={this.handleStatusChange} value={this.state.status} >

            <option value="">All</option>
            <option value="active">Active</option>
            <option value="noActive">No Active</option>

          </select>

          </div>

          <div className="input-body">
            <label htmlFor="">Group</label>
            <input type="text" name="group" value={this.state.group} className="group-input" onChange={this.handleInputChange} />
          </div>

          <div className="input-body">
            <label htmlFor="">Table</label>
            <div className="input-body-items">
              <input type="text" name="table" value={this.state.table} className="group-input" onChange={this.handleInputChange} />

              <button type="submit" style={{border:"none"}} onClick={this.handleFormSubmites}>
                <img src={FilterImg} alt="Submit" className="group-btn" />
              </button>

              <button type="submit" style={{border:"none"}} onClick={this.handleFormClear}>
                <img src={FilterClose} alt="Submit" className="group-close" />
              </button>

            </div>
          </div>

        </form>

        <div className="group-section">
          Section
        </div>

     </div>
    );
  }
}

export default Layout;
