import React, { Component } from "react";
import API from "../../../services";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrlApi } from "../../../services/config";

function DaftarTransaksi(props) {
  return (
    <div>
      <h3>{props.judul}</h3>
      <div>{props.isiTransaksi}</div>
    </div>
  );
}
export default class Transaksi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTransaksi: [],
      dataLayanan: [],
      dataCustomer: [],
      postTransaksi: {
        user: "coba",
        level: 2,
        password: "lagi",
      }, // untuk menampung data API
    };
  }

  ambilDataDariServerAPI = () => {
    API.getTransaksi().then((result) => {
      this.setState({
        dataTransaksi: result,
      });
    });
    API.getUser().then((result) => {
      this.setState({
        dataCustomer: result,
      });
    });
    API.getLayanan().then((result) => {
      this.setState({
        dataLayanan: result,
      });
    });
  };

  ambilDataUserId = () => {
    API.getUser().then((result) => {
      this.setState({
        dataCustomer: result,
      });
    });
  };
  ambilDataLayanan = () => {
    API.getLayanan().then((result) => {
      this.setState({
        dataLayanan: result,
      });
    });
  };

  getByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
      if (value === searchValue) return key;
    }
  }

  componentDidMount() {
    this.ambilDataDariServerAPI();

    console.log(this.state);
  }

  handleTombolSimpan = (e) => {
    e.preventDefault();

    API.postNewsBlog(this.state.postTransaksi).then((response) => {
      this.ambilDataDariServerAPI(); // refresh data
      alert("Data berhasil disimpan!");
      window.location.href = `${window.origin}`;
    });
  };

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState((postTransaksi) => {
      postTransaksi.postTransaksi[name] = value;
      return {
        postTransaksi: postTransaksi.postTransaksi,
      };
    });
  };

  render() {
    const { dataTransaksi, dataCustomer, dataLayanan, postTransaksi } =
      this.state;
    var item = dataLayanan;
    return (
      <div>
        <div className="cards">
          <h2>Daftar Transaksi</h2>
          <table class="table table-striped table-bordered dataTable">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Time</th>
                <th scope="col">Customer</th>
                <th scope="col">Layanan</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {(item = dataLayanan.find((item) => item.id === 2))}
              {dataTransaksi.map((transaksi) => {
                return (
                  <tr>
                    <th scope="row">1</th>
                    <td>{transaksi.Time}</td>
                    <td>{transaksi.id_customer}</td>
                    <td>{transaksi.id_layanan}</td>
                    <td>{transaksi.status}</td>
                    <td>
                      <Link to="/transaksi/edit" className="icon">
                        <i class="fas fa-edit" />
                      </Link>
                      <Link to="/" className="icon">
                        <i class="fas fa-trash" />
                      </Link>
                    </td>
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
