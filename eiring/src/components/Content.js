import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
// import Portfolio from './Portfolio';
import Contact from './Contact';

const Content = () => {
  return (
    <Switch>
      <Route exact path="/eiringonzales" component={Home} />
      {/* <Route exact path="/eiringonzales/portfolio" component={Portfolio} /> */}
      <Route exact path="/eiringonzales/contact" component={Contact} />
      <Route render={() => <Redirect to="/eiringonzales" />} />
    </Switch>
  );
}

export default Content;
