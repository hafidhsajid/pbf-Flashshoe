import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Get from "./components/crud/get1";
import Tabel from "./components/crud/tabel";
import Register from "./components/login/Register";
import Login from "./components/login/login";
import Login1 from "./components/crud/login1";
import BlogPost from "./components/crud/BlogPost";
import AddTransaksi from "./components/pages/Transaksi/AddTransaksi";
import EditTransaksi from "./components/pages/Transaksi/EditTransaksi";
import Transaksi from "./components/pages/Transaksi/Transaksi";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/transaksi/add" exact component={AddTransaksi} />
          <Route path="/transaksi/edit" exact component={AddTransaksi} />
          <Route path="/table" exact component={Tabel} />
          <Route path="/services" exact component={Products} />
          <Route path="/transaksi" exact component={Transaksi} />
          <Route path="/post" exact component={BlogPost} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
