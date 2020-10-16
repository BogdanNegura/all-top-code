import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Layout } from "../layout";
import { Home } from "../container/home";
import { Story } from "../container/story";
import { Cv } from "../container/cv";
import { SignIn } from "../container/sign-in";
import { Footer } from "../footer";

const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/story" component={Story} />
          <Route exact path="/cv" component={Cv} />
          <Route exact path="/sign-in" component={SignIn} />
          <Footer/>
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
};

export { App };
