import React from "react";

const Card = ({ id, img, name, description, price, link }) => {
  return (
    <div className="card">
      <img src={img} className="cardImg" />
      <div className="cardBody">
        <div className="cardTitle">{name}</div>
        <div className="cardSubtitle">{description}</div>
      </div>
      <div className="cardActions d-flex justify-content-between">
        <span className="textPrimary">From {price}$</span>
        <a href={`./destinations/${id}`}>View Details</a>
      </div>
    </div>
  );
};

export default Card;
