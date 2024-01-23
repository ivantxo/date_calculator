import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const calcDate = new Date();
  calcDate.setDate(calcDate.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        &nbsp;Step&nbsp;{step}&nbsp;
        <br />
        <button onClick={() => setCount(() => count - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount(() => count + step)}>+</button>
        <br />
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}{" "}
        {calcDate.toDateString()}
      </div>
      {(count !== 0 || step !== 1) && (
        <div>
          <button onClick={() => handleReset()}>Reset</button>
        </div>
      )}
    </>
  );
}

export default App;
