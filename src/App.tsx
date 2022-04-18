import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";


function App() {
  return (
    <>
      <Counter initilValue={ 15 }/>
      <hr />

      <CounterBy/>

      <CounterEffect />
      <CounterEffect />
    </>
  );
}

export default App;
