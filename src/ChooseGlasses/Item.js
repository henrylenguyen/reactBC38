import React, { Component } from "react";
import stylesItem from "./Item.module.css"
class Item extends Component {
  render() {
    return (
      <div className={stylesItem.item}>
        <img src="./glassesImage/model.jpg" alt="img" />
        {this.props.children}
      </div>
    );
  }
}

export default Item;
