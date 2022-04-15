import { useState } from "react";

interface initilValueProps {
  initilValue: number
}

export const Counter = ({ initilValue } : initilValueProps) => {

  const [ counter, setCounter ] = useState( initilValue );

  const handleClick = () => {
    setCounter( pre => pre + 1);
  }

  return (
    <>
    <h1>Counter: { counter  } </h1>

    <button onClick={ handleClick }>
      +1
    </button>
    </>
  )
}
