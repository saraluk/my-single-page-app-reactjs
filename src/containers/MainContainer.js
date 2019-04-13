import React, { Component } from "react";
import { blogPosts } from "../constants/blogPosts";

class MainContainer extends Component {
  state = {
    showHomePage: true
  };

  renderBlogPosts = () => {
    return (
      <div>
        {blogPosts.map(post => (
          <div key={post.id} className="summary">
            <img src={post.image} />
            <h1>{post.title}</h1>
            <p>{post.blogSummary}</p>
            <p>{post.date}</p>
          </div>
        ))}
      </div>
    );
  };

  renderIndividualBlogPost = () => {};

  render() {
    return (
      <div className="box main">
        {this.state.showHomePage
          ? this.renderBlogPosts()
          : this.renderIndividualBlogPost()}
      </div>
    );
  }
}

export default MainContainer;
