import React, { Component } from "react";
import { baseUrlApi } from "./config";

const PostAPI = (path, data) => {
  console.log(data);
  const promise = new Promise((resolve, reject) => {
    fetch(`${baseUrlApi}/${path}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(
      (result) => {
        resolve(result);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

const GetAPI = (path) => {
  const promise = new Promise((resolve, reject) => {
    fetch(`${baseUrlApi}/${path}`)
      .then((response) => response.json())
      .then(
        (result) => {
          resolve(result);
        },
        (err) => {
          reject(err);
        }
      );
  });
  return promise;
};

const postNewsBlog = (dataYgDikirim) => PostAPI("api/user", dataYgDikirim);

const getNewsBlog = () => GetAPI("api/user");
const getLayanan = () => GetAPI("api/layanan");
const getLayananId = (id) => GetAPI("api/layanan?" + id);
const getUser = () => GetAPI("api/user");
const getUserId = (id) => GetAPI("api/user?" + id);
const getTransaksi = () => GetAPI("api/transaksi");

const postUser = (dataYgDikirim) => PostAPI("api/user", dataYgDikirim);
const postTransaksi = (dataYgDikirim) =>
  PostAPI("api/transaksi", dataYgDikirim);
const postLayanan = (dataYgDikirim) => PostAPI("api/layanan", dataYgDikirim);
const postLogin = (dataYgDikirim) => PostAPI("api/login", dataYgDikirim);

const API = {
  getNewsBlog,
  postNewsBlog,

  getUser,
  getUserId,
  getLayanan,
  getTransaksi,

  postUser,
  postTransaksi,
  postLayanan,

  postLogin,
};

export default API;
