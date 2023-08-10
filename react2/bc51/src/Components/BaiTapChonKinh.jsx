import React, { Component } from "react";

export default class BaiTapChonKinh extends Component {
  state = {
    imageUrl: "./products/model.jpg",
  };

  handleChange = (glass) => {
    this.setState({
      imageUrl: `./products/${glass}.jpg`,
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-8">
          <img className="img-fluid" src={this.state.imageUrl} />
        </div>
        <div className="col-4">
          <div className="p-2">
            <img src="./products/g1.jpg" />
          </div>
          <div className="p-2">
            <img src="./products/g2.jpg" />
          </div>
          <div className="p-2">
            <img src="./products/g3.jpg" />
          </div>
          <div className="p-2">
            <img src="./products/g4.jpg" />
          </div>
        </div>
      </div>
    );
  }
}
