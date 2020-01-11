import React  from 'react';
import styles from './app.scss';

const App = () => {
	return (
		<React.Fragment>
			<div className={styles.app}>Hello World!!!!</div>
			<div className={styles.nice}>Nice</div>
      <div className={styles.golo}>Golo</div>
		</React.Fragment>
	);
};

export default App;
