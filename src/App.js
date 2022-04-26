import "./App.css";
import React, { Component } from 'react'
import Header from "./components/Header";
import Footer from "./containers/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Faq from "./components/Faq";
import NotFound from "./components/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import withHoc from "./components/Hoc";
import Body1 from "./components/Reference/Body1";
const Dash = withHoc(Faq)





export default class App extends Component {

     constructor(props){
       super(props);

       this.callRef=React.createRef();
       this.ClickHere=this.ClickHere.bind(this);
     }


     
     ClickHere(e){
          e.preventDefault();
          console.log("--------------")
       console.log(this.callRef.current.click());

     }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header
            keys={[
              { name: "Home", url: "/" },
              { name: "FAQ", url: "/faq" },
              { name: "About", url: "/about-us" },
              { name: "Contact", url: "/contact" },
            ]}
          />

           <button onClick={this.ClickHere}>CLick me</button>

          <Routes>
            <Route path="/" element={<Body1  ref={this.callRef}/>} exact />
            <Route path="/faq" element={<Dash></Dash>} exact />
            <Route  path='*'  element={<NotFound />} exact />
  
          </Routes>
        </BrowserRouter>
        <Footer title="Footer"/>
      </div>
    );
  }
}




