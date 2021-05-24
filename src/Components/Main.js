import React, { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { getPost } from "../Services/Posts";
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

  addPost(post) {
    const posts = this.state.posts;
    const newPost = {
      id: Number(new Date()),
      imageLink: post.imageLink,
      description: post.description,
    };
    posts.push(newPost);
    this.setState(
      (state) =>
        (state = {
          posts: posts,
        })
    );
  }

  componentDidMount() {
    this.setState({
      posts: getPost(),
    });
  }

  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path="/add"
            render={({ history }) => (
              <AddPhoto
                addPost={(post) => {
                  this.addPost(post);
                  history.push("/");
                }}
              />
            )}
          />

          <Route exact path="/">
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
