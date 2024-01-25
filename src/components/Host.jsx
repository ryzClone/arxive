import React, {Component } from "react";
import "../style/Group.css";
import { Link } from "react-router-dom";
import FilterImg from "../png/section/aside/white-filter.png";
import FilterClose from "../png/section/aside/close.png";
import Select from 'react-select';
import Update from "../png/section/aside/update.png"
import Delete from "../png/section/aside/delete.png"

const TableBeck = [
  { GroupName:"Mobile" , Status:"Active" , serviceName:['mbms' , 'fre' , 'qwerty' , 'fggh' , 'hjjk']},
  {GroupName:"Mobile" , Status:"Active" , serviceName:['mbms' , 'fre' , 'qwerty' , 'fggh' , 'hjjk']},
  { GroupName:"Mobile" , Status:"Active" , serviceName:['mbms' , 'fre' , 'qwerty' , 'fggh' , 'hjjk']},
  { GroupName:"Mobile" , Status:"Active" , serviceName:['mbms' , 'fre' , 'qwerty' , 'fggh' , 'hjjk']},
  { GroupName:"Mobile" , Status:"Active" , serviceName:['mbms' , 'fre' , 'qwerty' , 'fggh' , 'hjjk']},
]

const options = [
  { value: 'All', label: 'All' },
  { value: 'Active', label: 'Active' },
  { value: 'noActive', label: 'noActive' },
];

const beckdanKeladi = [
  { value: 'qwe', label: 'qwe' },
  { value: 'asd', label: 'asd' },
  { value: 'zxc', label: 'zxc' },
];


class Host extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: 'All',
      group: '',
      sort:1,
      list:50,
      DubleList:5,
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

  handleChange = (status) => {
    this.setState({ status }, () =>
      this.state.status
    );
  };

  handleChangeBeck  = (group) => {
    this.setState({ group }, () =>
      this.state.group
    );
  };

  dubleSortMin = () => {
    if(this.state.sort >= 3){
        this.setState({sort: this.state.sort -2}) 
    }
}

sortMin = () => {
    if(this.state.sort >= 2) {
      this.setState({sort: this.state.sort - 1}) 
    }

}

sortMax = () => {
    if(this.state.sort < Math.ceil(this.state.list / this.state.DubleList)){
      this.setState({sort: this.state.sort + 1})
    }
}

dubleSortMax = () => {
  if(this.state.sort < Math.ceil(this.state.list / this.state.DubleList) - 1){
    this.setState({sort: this.state.sort + 2})
  }
} 

  render() {
    return (
     <div className="main">

        <div className="group-menu">

          <div className="group-main-text">
            Host
          </div>

          <div className="group-main-items">

            <Link to="/home/host/addhost" className="group-main-item-list1" title="Transfer"> + Add new </Link>

            <button className="group-main-item-list2 ">Download</button>

            <button className="group-main-item-list3 " onClick={this.formFiltre}>Filter</button>

          </div>

        </div>

        <form action="" className="group-body" style={{ display: this.state.formDisplay ? "flex" : "none" }} onClick={this.handleFormSubmit }>

          <div className="input-body">

            <label htmlFor="" className="group-label">Name</label>

            <input type="text" name="name" value={this.state.name} className="group-input" onChange={this.handleInputChange} />

          </div>

          <div className="input-body">

            <label  htmlFor="" className="group-label">Status</label>

            <Select value={this.state.status} onChange={this.handleChange} options={options} className="group-input-select" />

          </div>

          <div className="input-body">

            <label htmlFor="">Group Id</label>

            <div className="input-body-items">

              <Select value={this.state.group} onChange={this.handleChangeBeck} options={beckdanKeladi} className="group-input-select" />


              <button type="submit" style={{border:"none"}} onClick={this.handleFormSubmites}>
                <img src={FilterImg} alt="Submit" className="group-btn" />
              </button>

              <button type="submit" style={{border:"none"}} onClick={this.handleFormClear}>
                <img src={FilterClose} alt="Submit" className="group-close" />
              </button>

            </div>
          </div>

        </form>

        <div className="Slide">

            <div className="slide-menu">
                <div className="sortBtn cursor" onClick={this.dubleSortMin}>{'<<'}</div>

                <div className="sortBtn cursor" onClick={this.sortMin}> {'<'} </div>

                <li className="sortBasc sortBtn">{this.state.sort}</li>

                <div className="sortBtn cursor" onClick={this.sortMax}> {'>'} </div>

                <div className="sortBtn cursor" onClick={this.dubleSortMax}> {'>>'} </div>
            </div>


            <div className="sortBtnList">
                <select id="cars" onChange={event => { this.setState({DubleList: event.target.value , sort:1})}}>
                    <option value={5} className="sortBtnList">5</option>
                    <option value={10} className="sortBtnList">10</option>
                    <option value={20} className="sortBtnList">20</option>
                    <option value={25} className="sortBtnList">25</option>
                </select>
            </div>


            <div className="sortBtn colorRed">Жами: {this.state.list}</div>

        </div>

        <div className="join-group-section">
       
          <table>

            <thead>
              <tr>
                <th>Id</th>
                <th>Group Name</th>
                <th>Status</th>
                <th className="join-group-table-center">Service Name</th>
                <th className="join-group-table-center"></th>
              </tr>
            </thead>

            <tbody>
              {TableBeck.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.GroupName}</td>
                <td>{row.Status}</td>
                <td className="tbody-th-select">
                  <ul className="tbody-ul">
                    {row.serviceName.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="tbody-ul-li">{service}</li>
                    ))}
                  </ul>
                </td>
                <td className="join-group-table-tbody-btn">

                  <button className="blue">
                    <img src={Update} alt="" className="join-group-table-tbody-img"/>
                  </button>

                  <button className="red">
                    <img src={Delete} alt="" className="join-group-table-tbody-img" />
                  </button>

                </td>
              </tr>
            ))}
            </tbody>

          </table>

        </div>

     </div>
    );
  }
}

export default Host;
