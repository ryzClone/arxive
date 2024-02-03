import React , {Component} from "react";

class AddHost extends Component {

  componentDidMount = () => {
    if(localStorage.getItem('Role') === "ROLE_USER"){
      window.location.pathname = "/home"
    }
  }
  
  render(){

    return(

      <div>

        Add Host

      </div>

    )
  }
}



export default AddHost
  