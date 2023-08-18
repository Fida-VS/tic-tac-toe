import styles from '../App.module.css';
import { useState } from 'react';
import { FieldItem } from './FieldItem';
import { AppHeader } from './AppHeader';
import { CalculateWinner } from '../utils/calculateWinner'

export const Field = () => {

	const [xIsNext, setXIsNext] = useState(true);
	const [fieldItems, setfieldItems] = useState(Array(9).fill(null));

	function handleClick(i) {
		if (fieldItems[i] || CalculateWinner(fieldItems)) {
			return;
		}
		const newFieldItems = fieldItems.slice();
		if (xIsNext) {
			newFieldItems[i] = 'X';
		  } else {
			newFieldItems[i] = 'O';
		  }
		  setfieldItems(newFieldItems);
		  setXIsNext(!xIsNext);
	  }


	  const winner = CalculateWinner(fieldItems);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }


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
	</div>

)

}
