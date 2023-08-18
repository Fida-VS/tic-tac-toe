import styles from '../App.module.css';

export const ButtonNewGame = ({onButtonNewGameClick}) => {

	return(

		<button onClick={onButtonNewGameClick} className={styles.buttonNewGame}>Start Game</button>

	)

	}
