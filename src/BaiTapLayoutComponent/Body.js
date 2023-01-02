import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";
export default class Body extends Component {
  render() {
    return (
      <div>
        <Banner></Banner>
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </div>

        </div>
      </div>
    );
  }
}
