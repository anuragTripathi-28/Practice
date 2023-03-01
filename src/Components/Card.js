import React from "react";
import "../Components/Card.css";

const Card = (props) => {
  return (
    <>
      <div className="ct1">
        <p className="cds">{props.title}</p>
        <img src={props.image} alt="" />
      </div>
    </>
  );
};

export default Card;
