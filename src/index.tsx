import React    from 'react';
import ReactDOM from 'react-dom';
import { App }  from './App';

ReactDOM.render(<App/>, document.getElementById('root'));

// HMR configuration
declare const module: { hot: any };

if (module.hot) {
  module.hot.accept('./App', () => {
    const { App: NewApp } = require('./App');
    ReactDOM.render(<NewApp/>, document.getElementById('root'));
  });
}
