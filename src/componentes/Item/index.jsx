import React from "react";

const Card = ({ title }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
    
      <img
        src="https://artpironti.com/wp-content/uploads/2016/09/Rejoj-Bronce-Dorado-Sevres.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
