import React            from 'react';
import ReactDOM         from 'react-dom';
import { Provider }     from 'react-redux';
import { isHmrEnabled } from './utils/dev';
import store            from './app/store';

const render = () => {
	const App = require('./app/App').default;
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root'),
	);
};

render();

if (isHmrEnabled(module)) {
	module.hot.accept('./app/App', render);
}
