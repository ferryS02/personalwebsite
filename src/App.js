import React, {Component } from 'react';
// import {Route,Redirect,Router} from "react-router-dom";
import './App.scss';
import Layout from './component/Layout/Layout.js';
import HomePage from './containers/HomePage/HomePage';
import AboutMe from './containers/AboutMe/AboutMe';
import Blog from './containers/Blog/Blog';
import Portofolio from './containers/Portofolio/Portofolio';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/aboutme" component={AboutMe}/>
	          <Route path="/blog" exact component={Blog}/>
            <Route path="/portofolio" exact component={Portofolio}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
