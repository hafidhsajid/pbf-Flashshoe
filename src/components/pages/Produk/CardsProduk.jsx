import React, { Component } from "react";
import "./Cards.css";
import CardItem from "./CardItem";

class CardsProduk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    fetch("https://soeclean-server.herokuapp.com/api/layanan")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }
  createList(items) {
    let count = 0;
    return items.map(
      (item) => (
        (count = count + 1),
        (
          <CardItem
            src={"images/" + item.gambar}
            text={item.nama}
            label={"Rp. " + item.harga}
            path="/"
          />
        )
      )
    );
  }
  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading ....</div>;
    } else {
      return (
        <div className="cards">
          <h1>Jasa yang kami sediakan</h1>
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">{this.createList(items)}</ul>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default CardsProduk;
