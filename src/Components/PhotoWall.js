import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "font-awesome/css/font-awesome.min.css";

function PhotoWall(props) {
  const posts = props.posts;
  if (posts.length === 0) return <p>No new posts available</p>;
  return (
    <>
      <Link to="/add">
        <i
          className="fa fa-plus-square fa-5x addIcon"
          aria-hidden="true"
          style={{ cursor: "pointer" }}
        />
      </Link>

      <div className="photoGrid">
        {posts.map((post) => (
          <Photo
            post={post}
            key={post.id}
            onDelete={() => props.handleDelete(post)}
          />
        ))}
      </div>
    </>
  );
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default PhotoWall;
