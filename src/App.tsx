import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";


function App() {
  return (
    <>
      <Counter initilValue={ 15 }/>
      <hr />

      <CounterBy/>
    </>
  );
}

export default App;
