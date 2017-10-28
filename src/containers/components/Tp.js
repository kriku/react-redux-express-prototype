import React, { Component } from 'react';

class Tp extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="Smth">
        <h4> place for next form </h4>
        { match.url }
      </div>
    );
  }
}

export default Tp;
