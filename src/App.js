import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Footer from "./containers/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Faq from "./components/Faq";
import NotFound from "./components/NotFound";

function App() {
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
        <Routes>
          <Route path="/" element={<Body />} exact />
          <Route path="/faq" element={<Faq />} exact />
          <Route  path='*'  element={<NotFound />} exact />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
