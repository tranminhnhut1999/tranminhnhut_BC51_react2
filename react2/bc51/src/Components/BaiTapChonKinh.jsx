import React, { Component } from "react";
import data from "../data/dataGlasses.json";
export default class BaiTapChonKinh extends Component {
  state = {
<<<<<<< HEAD
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
=======
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
>>>>>>> 3e5f95b14d57d06a4aace58e8c37874a24bc2f35
              alt="..."
            />
          </div>
        </div>
      </div>
    );
  }
}
