import React, { Component } from "react";

class AddPhoto extends Component {
  state = {
    imageLink: "",
    description: "",
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.addPost(this.state);
  }
  render() {
    return (
      <>
        <h1>PhotoWall</h1>
        <form className="form" onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type="text"
            placeholder="Post url"
            value={this.imageLink}
            onChange={(e) => {
              this.setState({
                imageLink: e.target.value,
              });
            }}
          />
          <input
            type="text"
            placeholder="Description"
            value={this.description}
            onChange={(e) => {
              this.setState({
                description: e.target.value,
              });
            }}
          />
          <button>Post</button>
        </form>
      </>
    );
  }
}

export default AddPhoto;
