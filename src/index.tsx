import React    from 'react';
import ReactDOM from 'react-dom';
import { App }  from './app/App';

ReactDOM.render(<App/>, document.getElementById('root'));

// HMR configuration
declare const module: { hot: any };

if (module.hot) {
  module.hot.accept('./app/App', () => {
    const { App: NewApp } = require('./app/App');
    ReactDOM.render(<NewApp/>, document.getElementById('root'));
  });
}
