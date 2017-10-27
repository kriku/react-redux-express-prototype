import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import App from '../components/App';
import Login from './/Login';
import Services from '../components/Services';
import { connect } from 'react-redux';
import Application from './Application';
import Applications from './Applications';
import Nav from '../components/Nav';
import {PrivateRoute} from "../components/PrivateRoute";

class Home extends Component {

  render() {

    const { signin = false } = this.props.user;

    return (
    <Router>
      <div className="content">
        <main className="wrapper">
          <Nav/>
          <Route exact path="/" component={App}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/services" isLogined={signin} component={Services}/>
          <PrivateRoute path="/applications" isLogined={signin} component={Applications}/>
          <PrivateRoute path="/application/:id" isLogined={signin} component={Application}/>
        </main>
      </div>
    </Router>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)( Home );