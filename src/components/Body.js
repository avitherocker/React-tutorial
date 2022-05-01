import React, { Component, Suspense } from "react";
import ThemeContext from "../context/ThemeContext";
import withHoc from "./Hoc";
import { getEmployee, create } from "./../services/api/employee";
const TextInput = React.forwardRef((props, ref) => (
  <input type="text" placeholder="Hello World" ref={ref} />
));

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "test",
      salary: "123",
      age: "23",
      class: "",
      bool: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.callRef = React.createRef();
    this.submitForm = this.submitForm.bind(this);
  }

  static contextType = ThemeContext;

  componentDidMount() {
    getEmployee()
      .then((data) => {
        console.log("checking", data);
      })
      .catch((err) => {});

    console.log("props contexrt................", this.props, this.context);
  }

  submitForm(e) {
    e.preventDefault();
    const postobject = {
      email: "p@gmail.com",
      password: "12345678",
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

  forC(e) {
    //alert("dffds");
  }

  render() {
    return (
      //Controllable Component
      <React.Fragment>
        {this.state.bool ? <label>{this.state.name}</label> : ""}

        <form onSubmit={this.submitForm}>
          <Suspense fallback={<div>Loading...</div>}>
            <input
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </Suspense>
          <input
            name="class"
            value={this.state.class}
            onClick={this.forC}
            onChange={this.handleChange}
          ></input>
          <TextInput ref={this.callRef}></TextInput>
          <button type="submit" ref={this.props.innerRef}>
            submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Body;
