import "./App.css";
import React, { Component, Suspense, lazy } from "react";
import Header from "./components/Header";
import Footer from "./containers/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "./components/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import withHoc from "./components/Hoc";
import Body1 from "./components/Reference/Body1";
import About from "./components/About";
import Frontend from "./components/Layout/Frontend";

import { withRouter } from "./components/Hoc/withRouter";
import Backend from "./components/Layout/Backend";
import ThemeContext from "./context/ThemeContext";

const FaqLazy = lazy(() => import("./components/Faq"));
const Dash = withHoc(FaqLazy);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: true,
    };

    this.callRef = React.createRef();
    this.ClickHere = this.ClickHere.bind(this);
  }

  componentDidMount() {
    let dd = this;
    setTimeout(() => {
      dd.setState({ time: false });
    }, 2000);
  }

  ClickHere(e) {
    e.preventDefault();
    console.log("--------------", this.props);
    // console.log(this.callRef.current.click());
  }

  render() {
    return (
      <div className="App">
        <ThemeContext.Provider value="light">
        <Suspense fallback={<div>Loading</div>}>
          
          <Routes>
            <Route path="/" element={<Frontend></Frontend>}>
              <Route index element={<Body1 ref={this.callRef} {...this.props}/>} />
            </Route>
            <Route path="/admin" element={<Backend />}>
              <Route index element={<Dash></Dash>} />
              <Route path="about-us/:username" element={<About />}></Route>
            </Route>


            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default withRouter(App);
