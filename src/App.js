import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";
import NavContainer from "./containers/NavContainer";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <MainContainer />
          <NavContainer />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
