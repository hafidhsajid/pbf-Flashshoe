import React, { Component } from "react";

export default class post2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArtikel: [],
      postArtikel: {
        username: "postuser",
        password: "postuser",
        level: 2,
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
              Username:
              <input
                type="text"
                name="username"
                defaultValue={postArtikel.username}
                onChange={this.handleOnChange}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                defaultValue={postArtikel.password}
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
            <DaftarArtikel
              key={artikel.id}
              judul={artikel.title}
              isiArtikel={artikel.body}
            />
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
