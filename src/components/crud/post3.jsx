import React, { Component } from "react";
import '../../services';

export default class post3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArtikel: [],
      postArtikel: {
        username: "username",
        password: "pasword",
      },
    };
  }
  render() {
    const { dataArtikel, postArtikel } = this.state;

    return (
      <div>
        <div>
          <form onSubmit={this.handleTombolSimpan}>
            <label>
              Judul Artikel:
              <input
                type="text"
                name="title"
                defaultValue={postArtikel.title}
                onChange={this.handleOnChange}
              />
            </label>
            <label>
              Isi Artikel:
              <input
                type="text"
                name="body"
                defaultValue={postArtikel.body}
                onChange={this.handleOnChange}
              />
            </label>
            <input type="submit" value="Simpan" />
          </form>
        </div>
        <hr></hr>
        <h2>Daftar Artikel</h2>
        {dataArtikel.map((artikel) => {
          return (
          );
        })}
      </div>
    );
  }

  handleTombolSimpan = (e) => {
    e.preventDefault();

    API.postNewsBlog(this.state.postArtikel).then((response) => {
      this.ambilDataDariServerAPI(); // refresh data
      alert("Data berhasil disimpan!");
    });
  };
  handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState((prevState) => {
      prevState.postArtikel[name] = value;
      return {
        postArtikel: prevState.postArtikel,
      };
    });
  };
}
