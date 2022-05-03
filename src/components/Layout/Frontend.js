import React, { Component } from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../../containers/Footer";

export default class Frontend extends Component {
  render() {
    return (
      <div>
        <Header />

        <Outlet />
       
      </div>
    );
  }
}
