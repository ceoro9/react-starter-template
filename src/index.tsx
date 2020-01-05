import React            from 'react';
import ReactDOM         from 'react-dom';
import { App }          from './app/App';
import { isHmrEnabled } from './utils/dev';


ReactDOM.render(<App/>, document.getElementById('root'));

if (isHmrEnabled(module)) {
  module.hot.accept('./app/App', () => {
    const { App: NewApp } = require('./app/App');
    ReactDOM.render(<NewApp/>, document.getElementById('root'));
  });
}
