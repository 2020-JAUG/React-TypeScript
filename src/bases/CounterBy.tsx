import { useState } from "react";

interface Props {
  initilValue?: number
}

interface CounterState {
  counter: number,
  clicks: number
}

export const CounterBy = ({ initilValue = 5 } : Props) => {

  //Desectructuración del counterState { }
  const [ { clicks, counter }, setCounterState ] = useState<CounterState>({
    counter: initilValue,
    clicks: 0
  });

  //Desectructuración del counterState
  // const { counter, clicks } = counterState;

  const handleClick = (value: number): void => {
    setCounterState(( { clicks, counter }) => ({
      counter: counter + value,
      clicks: clicks + 1
    }));
  }

  return (
    <>
    <h1>CounterBy: { counter  } </h1>
    <h1>CounterBy: { clicks  } </h1>

    <button onClick={ () => handleClick(1) }>
      +1
    </button>
    
    <button onClick={ () => handleClick(5) }>
      +5
    </button>
    </>
  )
}
