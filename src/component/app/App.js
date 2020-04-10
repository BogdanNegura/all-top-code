import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { MyStory } from "../my-story";
import { MyCv } from "../my-cv/my-cv";
import { Portofolio } from "../portofolio/portofolio.component";
import { Youtube } from "../youtube/youtube.component";
import { FindMe } from "../find-me";
import { Home } from "../home";
import { StyledMenuWrapper, StyledMenuItem } from "./app.style";

import "../../index.css";
import { SignUp } from "../sign-up/sign-up.component";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <StyledMenuWrapper>
            <StyledMenuItem>
              <Link to="/">Home</Link>
            </StyledMenuItem>
            <StyledMenuItem>
              <Link to="/my-story">My Story</Link>
            </StyledMenuItem>
            <StyledMenuItem>
              <Link to="/my-cv">My CV</Link>
            </StyledMenuItem>
            <StyledMenuItem>
              <Link to="/portofolio">Portofolio</Link>
            </StyledMenuItem>
            <StyledMenuItem>
              <Link to="/youtube">Youtube</Link>
            </StyledMenuItem>
            <StyledMenuItem>
              <Link to="find-me">Find Me</Link>
            </StyledMenuItem>
            <StyledMenuItem>
              <Link to="sign-up">Sign Up</Link>
            </StyledMenuItem>
          </StyledMenuWrapper>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/my-story" component={MyStory} />
              <Route exact path="/my-cv" component={MyCv} />
              <Route exact path="/portofolio" component={Portofolio} />
              <Route exact path="/youtube" component={Youtube} />
              <Route exact path="/find-me" component={FindMe} />
              <Route exact path="/sign-up" component={SignUp} />
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
};

export { App };
