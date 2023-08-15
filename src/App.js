
import styles from './App.module.css';

import { AppHeader } from './modules/AppHeader';
import { Field } from './modules/Field';



export const App = () => {

	return(
	<div className={styles.app}>
	<AppHeader />
	<Field />
	</div>
	)

};











