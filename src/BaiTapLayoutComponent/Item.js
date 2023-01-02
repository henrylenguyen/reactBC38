import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="col-md-3 mt-5">
        <div className="card shadow-sm">
          <div className="card-header text-center">
            <span className="text-secondary">500x325</span>
          </div>
          <div className="card-body text-center">
            <h3 className="card-title">Card title</h3>
            <p className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              ullam excepturi nisi labore accusamus perspiciatis totam ab
            </p>
            <button className="btn bg-primary text-white ">
              Call to action!
            </button>
          </div>
        </div>
      </div>
    );
  }
}
