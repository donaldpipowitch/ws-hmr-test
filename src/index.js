
import React, { SFC } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { App } from './app';

function run(Component) {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
}

run(App);

if (module.hot) {
  module.hot.accept('./app', () => run(App));
}