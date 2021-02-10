import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

import "./NotFound.scss";

const NotFound = () => (
  <>
    <div className='not-found'>
      <header className={"not-found__navigation"}>
        <Link className="not-found__navigation__logo" to="/">
          <img src={"/assets/svgs/logos/footer-logo.svg"} alt="Logo" />
        </Link>
      </header>
      <main className="not-found__main">
        <div>
          <h1 className="not-found__main__title">404</h1>
          <h2>Page not found</h2>
          <p className="not-found__main__info">
            The page you want to go, was not found. Perhaps an incorrect address
            was entered or the page was deleted.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  </>
);

export default NotFound;
