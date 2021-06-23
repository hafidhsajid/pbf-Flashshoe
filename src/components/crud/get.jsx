import React from "react";

export default class Get extends React.Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const url = "https://www.anapioficeandfire.com/api/books?pageSize=30";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results[0]);
  }
  render() {
    return (
      <div>
        {this.state.loading ? <div> loading .. </div> : <div> orang </div>}
      </div>
    );
  }
}
