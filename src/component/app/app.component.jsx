import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Layout } from "../layout";
import { Home } from "../container/home";
import { Story } from "../container/story";
import { Cv } from "../container/cv";
import { SignIn } from "../container/sign-in";
import { Footer } from "../footer";
import { CssTricks } from "../container/css-tricks";

const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/story" component={Story} />
          <Route exact path="/cv" component={Cv} />
          <Route exact path="/css-tricks" component={CssTricks} />
          <Route exact path="/sign-in" component={SignIn} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
};

export { App };
