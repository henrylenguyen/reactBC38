import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className="banner bg-dark-subtle p-5">
        <div className="container">
          <h1 className="banner-title">A Warm Welcome</h1>
          <p className="banner-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            commodi exercitationem ipsum earum quas voluptatum repellat
          </p>
          <button className="btn bg-primary text-white ">
            Call to action!
          </button>
        </div>
      </div>
    );
  }
}
