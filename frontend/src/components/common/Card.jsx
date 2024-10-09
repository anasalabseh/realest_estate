import React from "react";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../../utils/index";

const Card = ({
  title,
  address,
  city,
  state,
  price,
  sale_type,
  home_type,
  bedrooms,
  bathrooms,
  sqft,
  photo_main,
  slug,
}) => {
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <div className="card__header">
        <img src={photo_main} alt="House" className="card__header__photo" />
      </div>
      <p className="card__location">
        {address}, {city}, {state}
      </p>
      <div className="row">
        <div className="col-2-of-3">
          <p className="card__info">Price: ${numberWithCommas(price)}</p>
          <p className="card__info">Bedrooms: {bedrooms}</p>
          <p className="card__info">Barhrooms: {bathrooms}</p>
        </div>
        <div className="col-1-of-3">
          <p className="card__saletype">{sale_type}</p>
          <p className="card__hometype">{home_type}</p>
          <p className="card__sqft">{sqft}</p>
        </div>
      </div>
      <Link className="card__link" to={`/litings/${slug}`}>
        View Listing
      </Link>
    </div>
  );
};

export default Card;
