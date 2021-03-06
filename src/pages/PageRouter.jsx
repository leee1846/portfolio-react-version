import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./../components/nav/Nav";
import CartoonPage from "./CartoonPage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import * as Styled from "../style/Output";

function PageRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Nav />
      <Styled.Container>
        <Switch>
          <Route exact path='/' component={AboutPage} />
          <Route path='/mystory' component={CartoonPage} />
          <Route path='/projects' component={ProjectsPage} />
        </Switch>
      </Styled.Container>
    </Router>
  );
}

export default PageRouter;
