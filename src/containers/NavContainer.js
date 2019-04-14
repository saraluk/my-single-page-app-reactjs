import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavContainer extends Component {
  state = {
    picId: 0,
    url: ""
  };

  componentDidMount() {
    this.loadKittenPics(300);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.url !== this.state.url) {
      setTimeout(() => {
        const newId = this.state.picId++;
        this.loadKittenPics(this.state.picId++);
      }, 5000);
    }
  }

  loadKittenPics = async id => {
    try {
      const response = await fetch(`http://placekitten.com/g/200/${id}`);
      this.setState({ url: response.url, picId: id });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="box side-nav">
        <Link
          to="/"
          style={{
            color: "white",
            fontSize: "27px",
            textDecoration: "none",
            fontWeight: "600",
            textAlign: "center"
          }}
        >
          Homepage
        </Link>
        <br />
        <br />
        <br />
        <h3 style={{ color: "white" }}>Random Kittens' pics!</h3>
        <img src={this.state.url} />
      </div>
    );
  }
}

export default NavContainer;
