import styles from '../App.module.css';

export const AppHeader = () => {

return(

	<div className={styles.header}>
		<div className={styles.headerCross}>
			<div>X</div>
		</div>
		<div className={styles.headerZero}>
		<div>0</div>
		</div>
	</div>

)

}
