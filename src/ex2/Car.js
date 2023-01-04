import React, { Component } from "react";
import BlackCar from "../assets/products/black-car.jpg";
import RedCar from "../assets/products/red-car.jpg";
import SilverCar from "../assets/products/silver-car.jpg";
import SteelCar from "../assets/products/steel-car.jpg";
import styles from "./Car.module.css";


export default class Car extends Component {
  state={
    carImage: BlackCar
  }
  changeColor(color) {
    let newImage;
    switch(color){
      case "red":
        newImage = RedCar;
        break;
      case "black":
        newImage = BlackCar;
        break;
      case "steel":
        newImage = SteelCar;
        break;
      case "silver":
        newImage = SilverCar;
        break;
      default:
        break;
    }
    if(!newImage) return;
    this.setState({
      carImage:newImage
    },()=>{
      console.log(this.setState.newImage);
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-7">
            <img className={styles.thumnail} src={this.state.carImage} alt="" />
          </div>
          <div className="col-5">
            <button
              onClick={() => {
                this.changeColor("black");
              }}
              className={styles.btn}
            >
              Black
            </button>
            <button
              onClick={() => {
                this.changeColor("red");
              }}
              className={styles.btn}
            >
              Red
            </button>
            <button
              onClick={() => {
                this.changeColor("silver");
              }}
              className={styles.btn}
            >
              Silver
            </button>
            <button
              onClick={() => {
                this.changeColor("steel");
              }}
              className={styles.btn}
            >
              Steel
            </button>
            <button
              onClick={() => {
                this.changeColor("silver");
              }}
              className={styles.btn}
            >
              Silver
            </button>
          </div>
        </div>
      </div>
    );
  }
}
