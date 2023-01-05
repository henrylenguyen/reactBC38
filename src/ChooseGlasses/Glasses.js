import React from "react";
import styleGlasses from "./Glasses.module.css";
import { Data } from "../Data";
import Button from "./Button";
const Glasses = () => {
  return (
    <div className={styleGlasses.glasses}>
      {Data.map((item) => (
       <Button key={item.id} image={item.url}></Button>
      ))}
    </div>
  );
};

export default Glasses;
