import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Shipping from "./routes/Shipping";
import Payment from "./routes/Payment";
import NotFound from "./routes/NotFound";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default () => (
  <>
    <Header />
    <Router>
      <Switch>
        <Route path="/shipping" component={Shipping} />
        <Route path="/payment" component={Payment} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    <Footer />
  </>
);
