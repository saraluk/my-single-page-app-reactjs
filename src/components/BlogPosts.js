import React from "react";
import { Link } from "react-router-dom";

import { blogPosts } from "../constants/blogPosts";

function BlogPosts() {
  return (
    <div>
      {blogPosts.map(post => (
        <div key={post.id} className="postSummary">
          <img className="img" src={post.image} alt="image" />
          <Link
            style={{
              color: "black",
              fontSize: "40px",
              textDecoration: "none",
              fontWeight: "600"
            }}
            to={`/blog/${post.id}`}
          >
            {post.title}
          </Link>
          <p className="summary">{post.blogSummary}</p>
          <p className="date">{post.date}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogPosts;
