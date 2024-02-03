import React, {Component } from "react";
import "../style/joingroup.css";
import { Link } from "react-router-dom";
import Update from "../png/section/aside/update.png"
import Delete from "../png/section/aside/delete.png"

const TableBeck = [
  { GroupName:"Mobile" , Status:"Active" , serviceName:['mbms' , 'fre' , 'qwerty' , 'fggh' , 'hjjk']},
  {GroupName:"Mobile" , Status:"Active" , serviceName:['mbms' , 'fre' , 'qwerty' , 'fggh' , 'hjjk']},
  { GroupName:"Mobile" , Status:"Active" , serviceName:['mbms' , 'fre' , 'qwerty' , 'fggh' , 'hjjk']},
  { GroupName:"Mobile" , Status:"Active" , serviceName:['mbms' , 'fre' , 'qwerty' , 'fggh' , 'hjjk']},
  { GroupName:"Mobile" , Status:"Active" , serviceName:['mbms' , 'fre' , 'qwerty' , 'fggh' , 'hjjk' , 'fre' , 'qwerty' , 'fggh' , 'hjjk', 'fre' , 'qwerty' , 'fggh' , 'hjjk' , 'mbms' , 'fre' , 'qwerty' , 'fggh' , 'hjjk' , 'fre' , 'qwerty' , 'fggh' , 'hjjk', 'fre' , 'qwerty' , 'fggh' , 'hjjk']},
]

class JoinGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort:1,
      list:50,
      DubleList:5,
    };
  }

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

componentDidMount = () => {
  if(localStorage.getItem('Role') === "ROLE_USER"){
    window.location.pathname = "/home"
  }
}

  render() {

    return (
     <div className="join-group">

      <div className="join-group-header">

        <div className="join-group-header-title">
          Join Group
        </div>


        <Link to="/home/joingroup/adduserjoin" className="join-group-header-btn" title="Transfer">  Add Service to Group </Link>

      </div>

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

export default JoinGroup;
