import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import History from "./utils/History";

import Shipping from "./routes/Shipping";
import Payment from "./routes/Payment";
import NotFound from "./routes/NotFound";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default () => (
  <>
    <Header />
    <Router history={History}>
      <Switch>
        <Route path="/shipping" component={Shipping} />
        <Route path="/payment" component={Payment} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    <Footer />
  </>
);
