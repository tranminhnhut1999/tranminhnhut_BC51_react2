import React, { Component } from "react";
import data from "../data/dataGlasses.json";

export default class BaiTapChonKinh extends Component {
  // state = {
  //   imageUrl: "./products/model.jpg",
  // };

  // handleChange = (glass) => {
  //   this.setState({
  //     imageUrl: `./products/${glass}.jpg`,
  //   });
  // };

  render() {
    return (
      <div className="row ">
        <div className="col-7">
          <img src="./products/model.jpg" alt="" />
          <img src="./products/model.jpg" alt="" />
        </div>
        <div className="card">
          <img
            width={250}
            className="card-img-top"
            src="./products/g1.jpg"
            alt="..."
          />
          <img
            width={250}
            className="card-img-top"
            src="./products/g2.jpg"
            alt="..."
          />
          <img
            width={250}
            className="card-img-top"
            src="./products/g3.jpg"
            alt="..."
          />
          <img
            width={250}
            className="card-img-top"
            src="./products/g4.jpg"
            alt="..."
          />
          <img
            width={250}
            className="card-img-top"
            src="./products/g5.jpg"
            alt="..."
          />
          <img
            width={250}
            className="card-img-top"
            src="./products/g6.jpg"
            alt="..."
          />
          <img
            width={250}
            className="card-img-top"
            src="./products/g7.jpg"
            alt="..."
          />
          <img
            width={250}
            className="card-img-top"
            src="./products/g8.jpg"
            alt="..."
          />
          <img
            width={250}
            className="card-img-top"
            src="./products/g9.jpg"
            alt="..."
          />
        </div>
      </div>
    );
  }
}
