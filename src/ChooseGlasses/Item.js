import React from "react";
import stylesItem from "./Item.module.css"


const Item = (props) => {
  // console.log(props);
  return (
    <div className={stylesItem.item}>
        <img src="./glassesImage/model.jpg" alt="img" />
        {props.children}
      </div>
  );
};

export default Item;