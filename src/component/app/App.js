import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { MyStory } from "../my-story";
import { MyCv } from "../my-cv/my-cv";
import { Portofolio } from "../portofolio/portofolio.component";
import { Youtube } from "../youtube/youtube.component";
import { FindMe } from "../find-me";
import { Home } from "../home";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/my-story">My Story</Link>
            </li>
            <li>
              <Link to="/my-cv">My CV</Link>
            </li>
            <li>
              <Link to="/portofolio">Portofolio</Link>
            </li>
            <li>
              <Link to="/youtube">Youtube</Link>
            </li>
            <li>
              <Link to="find-me">Find Me</Link>
            </li>
          </ul>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/my-story" component={MyStory} />
              <Route exact path="/my-cv" component={MyCv} />
              <Route exact path="/portofolio" component={Portofolio} />
              <Route exact path="/youtube" component={Youtube} />
              <Route exact path="/find-me" component={FindMe} />
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
};

export { App };
