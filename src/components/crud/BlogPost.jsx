import React, { Component } from "react";
import API from "../../services";
import axios from "axios";
import { baseUrlApi } from "../../services/config";

function DaftarArtikel(props) {
  return (
    <div>
      <h3>{props.judul}</h3>
      <div>{props.isiArtikel}</div>
    </div>
  );
}
export default class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArtikel: [],
      postArtikel: {
        user: "coba",
        level: 2,
        password: "lagi",
      }, // untuk menampung data API
    };
  }

  ambilDataDariServerAPI = () => {
    API.getNewsBlog().then((result) => {
      this.setState({
        dataArtikel: result,
      });
    });
  };

  componentDidMount() {
    this.ambilDataDariServerAPI();

    console.log(this.state);
  }

  handleTombolSimpan = (e) => {
    e.preventDefault();

    API.postNewsBlog(this.state.postArtikel).then((response) => {
      this.ambilDataDariServerAPI(); // refresh data
      alert("Data berhasil disimpan!");
      window.location.href = `${window.origin}`;
    });
  };

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState((postArtikel) => {
      postArtikel.postArtikel[name] = value;
      return {
        postArtikel: postArtikel.postArtikel,
      };
    });
  };

  render() {
    const { dataArtikel, postArtikel } = this.state;
    return (
      <div>
        <div>
          <form onSubmit={this.handleTombolSimpan}>
            <label>
              <input
                type="text"
                name="user"
                defaultValue={postArtikel.user}
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />
            </label>
            <label>
              {/* Isi Artikel: */}
              <input
                type="password"
                name="password"
                defaultValue={postArtikel.password}
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />
            </label>
            <label>
              {/* Isi Artikel: */}
              <input
                type="text"
                name="level"
                id="level"
                defaultValue={postArtikel.level}
                onChange={this.handleOnChange}
              />
            </label>
            <input type="submit" value="Simpan" />
          </form>
        </div>
        <hr></hr>
        <h2>Daftar Artikel</h2>
        <div className="cards">
          <table class="table table-striped table-bordered dataTable">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>

            <tbody>
              {dataArtikel.map((artikel) => {
                return (
                  <tr>
                    <th scope="row">1</th>
                    <td>{artikel.user}</td>
                    <td>{artikel.level}</td>
                    <td>{artikel.level}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
