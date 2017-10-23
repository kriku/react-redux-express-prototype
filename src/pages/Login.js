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
        <div className="App center">
          <header>
            <table style={{marginTop: '10%'}}>
              <tbody>
                <tr>
                  <td>Почта</td>
                  <td>
                    <input value={user.email}/>
                  </td>
                </tr>
                <tr>
                  <td>Пароль</td>
                  <td>
                    <input value={user.password}/>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2">
                    <button
                        onClick={this.sign_in.bind(this)}>
                      Войти
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </header>
        </div>
    );
  }
}

export default connect((state)=>({user: state.user}))( Login );
