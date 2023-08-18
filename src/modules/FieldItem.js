import styles from '../App.module.css';


export const FieldItem = ({value, onFieldItemClick}) => {

	return(

		<div onClick={onFieldItemClick} className={styles.fieldItem}>{value}</div>

	)

	}
