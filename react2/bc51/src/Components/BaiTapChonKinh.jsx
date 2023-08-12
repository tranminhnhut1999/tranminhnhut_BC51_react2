import React, { Component } from "react";
import data from "../data/dataGlasses.json";

export default class BaiTapChonKinh extends Component {
  state = {
    imageUrl: "./products/model.jpg",
  };

  handleChange = (glass) => {
    this.setState({
      imageUrl: `./products/${glass}.jpg`,
    });
  };

  // render = () => {
  //   return data.map((element, index) => {
  //     <div key={index} className="col-3">
  //       <div className="card">
  //         <img className="card-img-top" src={element.url} alt="..." />
  //         <div className="card-body">
  //           <h4 className="card-title">{element.name}</h4>
  //         </div>
  //       </div>
  //     </div>;
  //   });
  // };

  render() {
    return (
      <div className="row ">
        <div className="col-7">
          <img src={this.state.imageUrl} alt="" />
          <img src="./products/model.jpg" alt="" />
          {/* </div>
        <div className="row">{this.render()}</div> */}
          <div className="card">
            <img
              width={250}
              className="card-img-top"
              src="./products/g1.jpg"
              onClick={() => {
                this.handleChange("g1");
              }}
              alt="..."
            />
            <img
              width={250}
              className="card-img-top"
              onClick={() => {
                this.handleChange("g2");
              }}
              src="./products/g2.jpg"
              alt="..."
            />
            <img
              width={250}
              className="card-img-top"
              onClick={() => {
                this.handleChange("g3");
              }}
              src="./products/g3.jpg"
              alt="..."
            />
            <img
              width={250}
              className="card-img-top"
              onClick={() => {
                this.handleChange("g4");
              }}
              src="./products/g4.jpg"
              alt="..."
            />
            <img
              width={250}
              className="card-img-top"
              onClick={() => {
                this.handleChange("g5");
              }}
              src="./products/g5.jpg"
              alt="..."
            />
            <img
              width={250}
              className="card-img-top"
              onClick={() => {
                this.handleChange("g6");
              }}
              src="./products/g6.jpg"
              alt="..."
            />
            <img
              width={250}
              className="card-img-top"
              onClick={() => {
                this.handleChange("g7");
              }}
              src="./products/g7.jpg"
              alt="..."
            />
            <img
              width={250}
              className="card-img-top"
              onClick={() => {
                this.handleChange("g8");
              }}
              src="./products/g8.jpg"
              alt="..."
            />
            <img
              width={250}
              className="card-img-top"
              onClick={() => {
                this.handleChange("g9");
              }}
              src="./products/g9.jpg"
              alt="..."
            />
          </div>
        </div>
      </div>
    );
  }
}
