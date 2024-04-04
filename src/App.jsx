import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import Exponent from "./components/Exponent";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>

      <Counter count={count} onIncrement={increment} onDecrement={decrement} />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="container">
        <Exponent count={count} exponent={2} />
        <Exponent count={count} exponent={3} />
        <Exponent count={count} exponent={4} />
        <Exponent count={count} exponent={5} />
        <Exponent count={count} exponent={6} />
      </div>
    </div>
  );
}

export default App;
