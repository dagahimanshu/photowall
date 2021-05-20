import React from "react";
import PropTypes from "prop-types";

function Photo(props) {
  const post = props.post;
  return (
    <figure className="figure">
      <img
        className="photo"
        src={post.imageLink}
        key={post.id}
        alt={post.description}
      />
      <figcaption>
        <p>{post.description}</p>
      </figcaption>
      <div className="button-container">
        <button className="remove-button" onClick={() => props.onDelete(post)}>
          Remove
        </button>
      </div>
    </figure>
  );
}
Photo.prototype = {
  post: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default Photo;
