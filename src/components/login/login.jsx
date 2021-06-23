import React, { Component } from "react";
import "./assets/css/LineIcons.2.0.css";
import "./assets/css/tiny-slider.css";
import "./assets/css/animate.css";
import "./assets/css/lindy-uikit.css";
import API from "../../services";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      level: "",
      password: "",
      loginError: "",
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleTombolSimpan = (e) => {
    e.preventDefault();

    API.postLogin(this.state).then((response) => {
      alert("Login berhasil disimpan!");
    });

    window.location.href = "/transaksi";
  };

  render() {
    const { dataLogin, postLogin } = this.state;
    return (
      <section id="contact" class="contact-section contact-style-3">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-5 col-xl-5 col-lg-7 col-md-10">
              <div class="section-title text-center mb-50">
                <h3 class="mb-15">Login</h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg">
              <div class="contact-form-wrapper">
                <form onSubmit={this.handleTombolSimpan}>
                  <div class="col-md-12">
                    <div class="single-input">
                      <input
                        type="text"
                        id="user"
                        name="user"
                        class="form-input"
                        placeholder="username"
                        onChange={(e) => {
                          this.handleChange(e);
                        }}
                      />
                      <i class="lni lni-user"></i>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="single-input">
                      <input
                        type="pasword"
                        id="password"
                        name="password"
                        class="form-input"
                        placeholder="Password"
                        onChange={(e) => {
                          this.handleChange(e);
                        }}
                      />
                      <i class="lni lni-lock"></i>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-button">
                      <button type="submit" value="Simpan" class="button">
                        <i class="lni lni-telegram-original"></i> Submit
                      </button>
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
