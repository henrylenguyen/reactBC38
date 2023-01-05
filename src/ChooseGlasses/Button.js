import React, { Component } from 'react';
import styleGlasses from "./Glasses.module.css";

class Button extends Component {
  render() {
    return (
        <button className={styleGlasses.glasses__button}>
          <img src={this.props.image} alt="" className={styleGlasses.button__image} />
        </button>
 
    );
  }
}

export default Button;