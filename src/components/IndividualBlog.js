import React from "react";
import { blogPosts } from "../constants/blogPosts";

export default function IndividualBlog({ match }) {
  return blogPosts.map(post => {
    if (post.id === parseInt(match.params.id)) {
      return (
        <div>
          <div key={post.id} className="fullContent">
            <img className="img-blog" src={`.${post.image}`} alt="image" />
            <h1>{post.title}</h1>
            <p>{post.paragraph}</p>
            <p>{post.date}</p>
          </div>
        </div>
      );
    }
  });
}
