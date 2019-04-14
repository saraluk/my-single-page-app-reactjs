import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { blogPosts } from "../constants/blogPosts";
import IndividualBlog from "../components/IndividualBlog";
import BlogPosts from "../components/BlogPosts";

class MainContainer extends Component {
  render() {
    return (
      <div className="box main">
        <Switch>
          <Route exact path="/" component={BlogPosts} />
          <Route path="/blog/:id" component={IndividualBlog} />
        </Switch>
      </div>
    );
  }
}

export default MainContainer;
