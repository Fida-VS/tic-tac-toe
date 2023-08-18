
import { useState } from 'react';
import { CalculateWinner } from '../utils/calculateWinner'
import { FieldLayout } from './FieldLayout';

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


  const restartClick = () => {
	setXIsNext(true);
	setfieldItems(Array(9).fill(null));
  }


return <FieldLayout xIsNext={xIsNext}
fieldItems={fieldItems}
setXIsNext={setXIsNext}
setfieldItems={setfieldItems}
handleClick={handleClick}
status={status}
restartClick={restartClick}/>

}
