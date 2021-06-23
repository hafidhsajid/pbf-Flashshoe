import React, { Component } from "react";
import API from "../../../services";

export default class AddTransaksi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTransaksi: [],
      dataLayanan: [],
      dataCustomer: [],
      postTransaksi: {
        id_customer: "",
        id_layanan: "",
        status: "Belum Dilayani",
      }, // untuk menampung data API
    };
  }
  componentDidMount() {
    this.ambilDataDariServerAPI();
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

  handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(this.state.postTransaksi);
    this.setState((postTransaksi) => {
      postTransaksi.postTransaksi[name] = value;
      return {
        postTransaksi: postTransaksi.postTransaksi,
      };
    });
    // this.setState({ postArtikel: e.target.value });
  };

  handleTombolSimpan = (e) => {
    e.preventDefault();
    console.log(this.setState.postArtikel);

    API.postTransaksi(this.state.postTransaksi).then((response) => {
      this.ambilDataDariServerAPI(); // refresh data
      alert("Data berhasil disimpan!");
      window.location.href = `${window.origin}`;
    });
  };
  render() {
    const { dataTransaksi, dataCustomer, dataLayanan, postTransaksi } =
      this.state;
    return (
      <section id="contact" class="contact-section contact-style-3">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-5 col-xl-5 col-lg-7 col-md-10">
              <div class="section-title text-center mb-50">
                <h3 class="mb-15">Get in touch</h3>
                <p>
                  Stop wasting time and money designing and managing a website
                  that doesn’t get results. Happiness guaranteed!
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg">
              <div class="contact-form-wrapper">
                <form onSubmit={this.handleTombolSimpan}>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="single-input">
                        <input
                          type="text"
                          id="id_customer"
                          name="id_customer"
                          class="form-input"
                          placeholder="nama customer"
                          onChange={this.handleOnChange}
                        />
                        <i class="lni lni-user"></i>
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div class="single-input">
                        <input
                          type="text"
                          id="id_layanan"
                          name="id_layanan"
                          class="form-input"
                          placeholder="layanan"
                          onChange={this.handleOnChange}
                        />
                        <i class="lni lni-user"></i>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-button">
                        <button type="submit" value="Simpan" class="button">
                          <i class="lni lni-telegram-original"></i> Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="left-wrapper">
                <div class="row">
                  <div class="col-lg-12 col-md-6">
                    <div class="single-item">
                      <div class="icon">
                        <i class="lni lni-phone"></i>
                      </div>
                      <div class="text">
                        <p>0045939863784</p>
                        <p>+004389478327</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-6">
                    <div class="single-item">
                      <div class="icon">
                        <i class="lni lni-envelope"></i>
                      </div>
                      <div class="text">
                        <p>yourmail@gmail.com</p>
                        <p>admin@yourwebsite.com</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-6">
                    <div class="single-item">
                      <div class="icon">
                        <i class="lni lni-map-marker"></i>
                      </div>
                      <div class="text">
                        <p>
                          John's House, 13/5 Road, Sidny United State Of America
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
