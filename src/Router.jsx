import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import App from "./App";
import PortfolioModal from "./components/PortfolioItem/PortfolioModal/PortfolioModal";

const Routers = (props) => {
  const previousLocation = {
    pathname: "/",
    state: undefined,
  };

  const isModal =
    props.location.state &&
    props.location.state.modal &&
    previousLocation !== props.location;

  return (
    <>
      <Switch location={isModal ? previousLocation : props.location}>
        <Route exact path="/" component={App} />
        <Route exact path="/portfolio/:name">
          <PortfolioModal />
        </Route>
      </Switch>
      {isModal ? (
        <Route exact path="/portfolio/:name">
          <PortfolioModal />
        </Route>
      ) : null}
    </>
  );
};

export default withRouter(Routers);
