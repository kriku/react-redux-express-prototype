import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin } from '../actions/user';

class Login extends Component {
  sign_in() {
    console.log(this.props);
    this.props.dispatch(signin(this.props.user));
  }
  render() {
    const { user } = this.props;
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Login</h1>
          </header>
          <label>
            email:
            <input value={user.email}/>
          </label>
          <br/>
          <label>
            password:
            <input value={user.password}/>
          </label>
          <br/>
          <button
              onClick={this.sign_in.bind(this)}>
            signin
          </button>
        </div>
    );
  }
}

export default connect((state)=>({user: state.user}))( Login );
