import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../actions/myAppActions';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.triggerCounterIncrease = this.triggerCounterIncrease.bind(this);
    this.triggerCounterDecrease = this.triggerCounterDecrease.bind(this);
    this.triggerCounterReset = this.triggerCounterReset.bind(this);
  }

  triggerCounterIncrease() {
    this.props.dispatch(actions.increaseCounter());
  }

  triggerCounterDecrease() {
    this.props.dispatch(actions.decreaseCounter());
  }

  triggerCounterReset() {
    this.props.dispatch(actions.resetCounter());
  }

  render() {
    return (<div>
      <h1>My super react app</h1>
      <p>My Counter : <b>{this.props.counter}</b></p>
      <ul>
        <li>
          <a onClick={this.triggerCounterIncrease} href="#">Increase counter !</a>
        </li>
        <li>
          <a onClick={this.triggerCounterDecrease} href="#">Decrease counter !</a>
        </li>
        <li>
          <a onClick={this.triggerCounterReset} href="#">Reset counter !</a>
        </li>
        <li><Link to="/about">About page</Link></li>
        <li><Link to="/bad-page">404 handling example</Link></li>
      </ul>
    </div>);
  }
}

HomePage.propTypes = {
  dispatch: React.PropTypes.func,
  counter: React.PropTypes.number,
};


function mapStateToProps(state) {
  return {
    counter: state.myAppReducer.counter,
  };
}

export default connect(mapStateToProps)(HomePage);
