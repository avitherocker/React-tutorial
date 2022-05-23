import React, { Component, Suspense } from "react";
import ThemeContext from "../context/ThemeContext";
import withHoc from "./Hoc";
import { getEmployee, create } from "./../services/api/employee";
import { connect } from "react-redux";
import * as action from "./../redux/actions"
const TextInput = React.forwardRef((props, ref) => (
  <input type="text" placeholder="Hello World" ref={ref} />
));

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      contact: "",
      first_name:"",
      last_name:"",
      bool: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.callRef = React.createRef();
    this.submitForm = this.submitForm.bind(this);
    this.add=this.add.bind(this);
  }

  static contextType = ThemeContext;

  submitForm(e) {
    e.preventDefault();
    const postobject = {
     
    };
    create(postobject).then((data) => {
      console.log("data", data);
      let token = data.data.token;
      localStorage.setItem("token", token);
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }


  add(e){

    e.preventDefault();

    let count =this.props.count;
    
    count ++ ;

    this.props.dispatch(action.incrementOrdecrement(count))

  }


  sub(e){


  }

  forC(e) {
    //alert("dffds");
  }

  render() {
    return (
      //Controllable Component
      <React.Fragment>

       <input type="text" value={this.props.count}></input>
       <button onClick={this.add}>plus</button>

       <button onClick={this.sub}>minus</button>



      
      </React.Fragment>
    );
  }
}

const mapStatetoProps=(state)=>{

   return {

       count:state.Auth.counter

   }

}
export default connect(mapStatetoProps)(Body);
