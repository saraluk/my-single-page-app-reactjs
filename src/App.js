import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";
import NavContainer from "./containers/NavContainer";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <MainContainer />
        <NavContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
