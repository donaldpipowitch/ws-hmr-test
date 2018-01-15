import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

export class Counter extends Component {
  state = {
    value: 0
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState(({ value }) => ({ value: value + 1 })),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <p>Value is: {this.state.value * 1}</p>;
  }
}

export const App   = () => (
  <BrowserRouter>
    <div>
      <p>Hello world!</p>
      <Counter />
      <Link to="/foo">Go to foo</Link>
      <Route
        path="/foo"
        exact
        render={() => <p>Welcome!</p>}
      />
    </div>
  </BrowserRouter>
);