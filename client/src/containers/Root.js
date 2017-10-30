import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

// Containers
import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Services from './Services';
import Application from './Application';
import Applications from './Applications';
import Notifications from './Notifications';


const PrivateRoute = ({ component: Component, access, ...rest}) => (
  <Route {...rest} render={props => (
      (!access)
      ? <Redirect to={{
          pathname: '/login',
          state: {from: props.location}
        }} />
      : <Component {...props} />
    )} />
);

class Root extends Component {

  render() {
    const { signin = false } = this.props.user;

    // TODO: change divs and other layout stuff to components
    return (
    <Router>
      <div>
        <Nav/>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute access={signin} path="/profile" component={Profile}/>
        <PrivateRoute access={signin} path="/services" component={Services}/>
        <PrivateRoute access={signin} path="/application/:id" component={Application}/>
        <PrivateRoute access={signin} path="/applications" component={Applications}/>
        <PrivateRoute access={signin} path="/notifications" component={Notifications}/>
      </div>
    </Router>
    )
  }
}

const mstp = ({ user }) => ({ user });
export default connect(mstp)( Root );
