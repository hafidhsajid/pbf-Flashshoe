import React, { Component } from "react";
// import "./assets/css/bootstrap-5.0.0-beta1.min.css";
import "./assets/css/LineIcons.2.0.css";
import "./assets/css/tiny-slider.css";
import "./assets/css/animate.css";
import "./assets/css/lindy-uikit.css";
import API from "../../services";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArtikel: [],
      postArtikel: {
        user: "",
        level: 2,
        password: "",
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
  }

  handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(this.state);
    this.setState((postArtikel) => {
      postArtikel.postArtikel[name] = value;
      return {
        postArtikel: postArtikel.postArtikel,
      };
    });
    // this.setState({ postArtikel: e.target.value });
  };

  handleTombolSimpan = (e) => {
    e.preventDefault();

    API.postNewsBlog(this.state.postArtikel).then((response) => {
      this.ambilDataDariServerAPI(); // refresh data
      alert("Data berhasil disimpan!");
      window.location.href = `${window.origin}`;
    });
  };
  render() {
    const { dataArtikel, postArtikel } = this.state;
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
                          id="user"
                          name="user"
                          class="form-input"
                          placeholder="username"
                          onChange={this.handleOnChange}
                        />
                        <i class="lni lni-user"></i>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="single-input">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          class="form-input"
                          placeholder="Password"
                          onChange={this.handleOnChange}
                        />
                        <i class="lni lni-lock"></i>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="single-input">
                        <textarea
                          name="address"
                          id="address"
                          class="form-input"
                          placeholder="address"
                          rows="6"
                          onChange={this.handleOnChange}
                        ></textarea>
                        <i class="lni lni-comments-alt"></i>
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
