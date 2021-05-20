import React, { Component } from "react";

class AddPhoto extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>PhotoWall</h1>
        <form className="form">
          <input placeholder="Post url" />
          <input placeholder="Caption" />
          <button>Post</button>
        </form>
      </>
    );
  }
}

export default AddPhoto;
