import React , {Component} from "react";

class AddGroup extends Component {

  componentDidMount = () => {
    if(localStorage.getItem('Role') === "ROLE_USER"){
      window.location.pathname = "/home"
    }
  }
  render(){

    return(

      <div>

        Add Group

      </div>

    )
  }
}



export default AddGroup
  