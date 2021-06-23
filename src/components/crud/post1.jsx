import React, { Component } from "react";

export default class post1 extends Component {
  componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: "React POST Request Example",
        password: "coba",
        level: "2",
      }),
    };
    fetch("http://localhost/server/api/user", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));
  }
  render() {
    return (
      //   <form onSubmit={handleSubmit}>
      <button>Add Blog</button>
      //   </form>
    );
  }
}
