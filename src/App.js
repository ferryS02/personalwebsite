import React, {Component } from 'react';
// import {Route,Redirect,Router} from "react-router-dom";
import './App.scss';
import Layout from './component/Layout/Layout.js';

//Website main page
import HomePage from './containers/HomePage/HomePage';
import AboutMe from './containers/AboutMe/AboutMe';
import Blog from './containers/Blog/Blog';
import Portofolio from './containers/Portofolio/Portofolio';
import Contact from './containers/Contact/Contact';

import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/aboutme" component={AboutMe}/>
	          <Route path="/blog" component={Blog}/>
            <Route path="/portofolio" component={Portofolio}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
