import React, {Component } from "react";
import "../style/AddService.css";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const options = [
  { value: 'Active', label: 'Active' },
  { value: 'noActive', label: 'noActive' },
];

const users = [
  { value: 'mbms', label: 'mbms' },
  { value: 'nets', label: 'nets' },
  { value: 'rack', label: 'rack' },
];

const groups = [
  { value: 'All', label: 'All' },
  { value: 'Active', label: 'Active' },
  { value: 'noActive', label: 'noActive' },
  { value: 'noActives', label: 'noActives' },
  { value: 'noActived', label: 'noActived' },
  { value: 'noActivef', label: 'noActivef' },
  { value: 'noActiveg', label: 'noActiveg' },
];


class AddUserJoin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      status: '',
      groups: [],
    };
  }

  handleStatusChangeUsers = (users) => {
    this.setState({ users }, () =>
      this.state.users
    );
  };  

  handleStatusChangeStatus = (status) => {
    this.setState({ status }, () =>
      this.state.status
    );
  };

  handleStatusChangeGroup = (groups) => {

    this.setState({ groups }, () =>
      this.state.groups
    );

  };

  handleFormSubmit = (e) => {
    e.preventDefault();
  }

  sendFromSubmit = () => {

    console.log(this.state);

    this.setState({
      status:'',
    })

  }


  render() {
    return (
      
    <div className="add-service">


        <form action="" className="add-service-form" onClick={this.handleFormSubmit }>

          <h1>Add User to Group</h1>

          <div className="add-service-status">

            <h3>Users</h3>

            <div className="add-service-input">

              <Select className="group-input-select" closeMenuOnSelect={true} components={animatedComponents} isMulti options={users} onChange={this.handleStatusChangeUsers} />

            </div>

          </div>

          <div className="add-service-status">

            <h3>Groups</h3>

            <div className="add-service-input">

              <Select className="group-input-select" closeMenuOnSelect={true} components={animatedComponents} isMulti options={groups} onChange={this.handleStatusChangeGroup} />

            </div>

          </div>

          <div className="add-service-status">

            <h3>Status</h3>

            <div className="add-service-input">

              <Select value={this.state.status} onChange={this.handleStatusChangeStatus} options={options} className="group-input-select" />

            </div>

          </div>

          <div className="add-service-btn-body">   

            <button type="submit" className="add-service-btn" onClick={this.sendFromSubmit}>
                Submit
            </button>

          </div>

        </form>
        
    </div>
    );
  }
}

export default AddUserJoin;
