import styles from '../App.module.css';
import { AppHeader } from './AppHeader';
import { FieldItem } from './FieldItem';
import { ButtonNewGame } from './ButtonNewGame';
import PropTypes from 'prop-types';

export const FieldLayout = ({xIsNext, fieldItems, setXIsNext, setfieldItems, handleClick, status, restartClick}) => {

	return(
		<div className={styles.field}>
		<AppHeader status={status}/>
		<div className={styles.container}>
		 <FieldItem onFieldItemClick={() => handleClick(0)} value={fieldItems[0]} />
		 <FieldItem onFieldItemClick={() => handleClick(1)} value={fieldItems[1]} />
		 <FieldItem onFieldItemClick={() => handleClick(2)} value={fieldItems[2]} />
		 <FieldItem onFieldItemClick={() => handleClick(3)} value={fieldItems[3]} />
		 <FieldItem onFieldItemClick={() => handleClick(4)} value={fieldItems[4]} />
		 <FieldItem onFieldItemClick={() => handleClick(5)} value={fieldItems[5]} />
		 <FieldItem onFieldItemClick={() => handleClick(6)} value={fieldItems[6]} />
		 <FieldItem onFieldItemClick={() => handleClick(7)} value={fieldItems[7]} />
		 <FieldItem onFieldItemClick={() => handleClick(8)} value={fieldItems[8]} />
		 </div>
		 <ButtonNewGame onButtonNewGameClick={() => restartClick()} />
		</div>
	)

	};


	FieldLayout.propTypes = {
		xIsNext: PropTypes.bool,
		fieldItems: PropTypes.array,
		setXIsNext: PropTypes.func,
		setfieldItems: PropTypes.func,
		handleClick: PropTypes.func,
		status: PropTypes.string,
		restartClick: PropTypes.func
	}
