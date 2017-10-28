import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

// Containers
import Login from './Login';
import Profile from './Profile';
import Services from './Services';
import Application from './Application';
import Applications from './Applications';

// Components
import App from './components/App';
import Nav from './components/Nav';

const PrivateRoute = ({ component: Component, isLogined, ...rest}) => (
  <Route {...rest} render={props => (
    isLogined ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }}/>
    )
  )}/>
);

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
          <PrivateRoute path="/profile" isLogined={signin} component={Profile}/>
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
