import React, { Component } from "react";
import data from "../data/dataGlasses.json";
export default class BaiTapChonKinh extends Component {
  state = {
    imageUrl: "./glassesImage/model.jpg",
  };
  handleChangeGlass = (glass) => {
    this.setState({
      imageUrl: `./glassesImage/${glass}.jpg`,
    });
  };
  renderGlass = () => {
    return data.map((element, idx) => {
      return (
        <div key={idx} className="card">
          <img className="card-img-top" src={element.url} alt="...." />
          <div className="card-body">
            <h4 className="card-title">{element.name}</h4>
            <p className="card-text">{element.desc}</p>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="row">
        <div className="col-6">
          <img src={this.state.imageUrl} alt="..." />
          <img src="./glassesImage/model.jpg" alt="..." />
        </div>
        <div className="col-3">
          <div className="card" style={{ position: `revert` }}>
            <img
              onClick={() => this.handleChangeGlass("g1")}
              width={240}
              className="card-img-top"
              src="./glassesImage/g1.jpg"
              alt="..."
            />
            <img
              onClick={() => this.handleChangeGlass("g2")}
              width={240}
              className="card-img-top"
              src="./glassesImage/g2.jpg"
              alt="..."
            />
            <img
              onClick={() => this.handleChangeGlass("g3")}
              width={240}
              className="card-img-top"
              src="./glassesImage/g3.jpg"
              alt="..."
            />
            <img
              onClick={() => this.handleChangeGlass("g4")}
              width={240}
              className="card-img-top"
              src="./glassesImage/g4.jpg"
              alt="..."
            />
            <img
              onClick={() => this.handleChangeGlass("g5")}
              width={240}
              className="card-img-top"
              src="./glassesImage/g5.jpg"
              alt="..."
            />
            <img
              onClick={() => this.handleChangeGlass("g6")}
              width={240}
              className="card-img-top"
              src="./glassesImage/g6.jpg"
              alt="..."
            />
            <img
              onClick={() => this.handleChangeGlass("g7")}
              width={240}
              className="card-img-top"
              src="./glassesImage/g7.jpg"
              alt="..."
            />
            <img
              onClick={() => this.handleChangeGlass("g8")}
              width={240}
              className="card-img-top"
              src="./glassesImage/g8.jpg"
              alt="..."
            />
            <img
              onClick={() => this.handleChangeGlass("g9")}
              width={240}
              className="card-img-top"
              src="./glassesImage/g9.jpg"
              alt="..."
            />
          </div>
        </div>
      </div>
    );
  }
}
