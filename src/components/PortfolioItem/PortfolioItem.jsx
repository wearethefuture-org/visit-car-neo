import React from "react";
import { Link } from "react-router-dom";
import "./PortfolioItem.scss";

const PortfolioItem = ({
  src,
  title,
  urlName,
}) => {
  return (
    <>
      <div className="portfolio-item__container">
        <Link
          to={{
            pathname: `/portfolio/${urlName}`,
            state: { modal: true },
          }}
          className="portfolio-item__link"
        >
          <div className="portfolio-item__img">
            <img src={src} alt={title} />
          </div>

          <h2 className="portfolio-item__title">{title}</h2>

          <button type="button" className="portfolio-item__details">
            Details
          </button>
        </Link>
      </div>
    </>
  );
};

export default PortfolioItem;
