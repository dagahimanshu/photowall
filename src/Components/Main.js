import React, { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import getPost from "../Services/Posts";
import { Switch, Route } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  handleDelete = (deletedPost) => {
    this.setState(
      (state) =>
        (state = {
          posts: this.state.posts.filter((post) => post !== deletedPost),
        })
    );
  };

  componentDidMount() {
    this.setState({
      posts: getPost(),
    });
  }

  render() {
    return (
      <>
        <Switch>
          <Route path="/add">
            <AddPhoto />
          </Route>

          <Route path="/">
            <Title title={"PhotoWall"} />
            <PhotoWall
              posts={this.state.posts}
              handleDelete={this.handleDelete}
            />
          </Route>
        </Switch>
      </>
    );
  }
}

export default Main;
