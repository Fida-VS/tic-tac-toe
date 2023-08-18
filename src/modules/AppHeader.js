import styles from '../App.module.css';

export const AppHeader = ({status}) => {

return(

	<div className={styles.header}>
		<div className="status">{status}</div>
	</div>

   )

}
