import React, { Component } from "react";
import Glasses from "./Glasses";
import Item from "./Item";
import styleLayout from "./Layout.module.css";
import stylesItem from "./Item.module.css";
class Layout extends Component {
  render() {
    return (
      <div className={styleLayout.main}>
        <div className={styleLayout.navbar}>
          <h1 className={styleLayout.title}>Try glasses app online</h1>
        </div>
        <div className={stylesItem.item__list}>
          <div className={stylesItem.item__container}>
            <Item>
              <div className={stylesItem.item__style}>
                <img
                  src="https://images.unsplash.com/photo-1672681149507-d7bf765e9533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                  className={stylesItem.item__style_img}
                />
              </div>
              <div className={stylesItem.item__text}>
                <h4 className={stylesItem.item__name}>FendiF</h4>
                <p className={stylesItem.item__desc}>
                  Light pink square lenses define these sunglasses, ending with
                  amother of pearl effect tip.
                </p>
              </div>
            </Item>
            <Item></Item>
          </div>
          <Glasses></Glasses>
        </div>
      </div>
    );
  }
}

export default Layout;
