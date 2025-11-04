import { useState } from "react";


function App() {
  const [counter, setCounter] = useState(0)
  const increment = () => setCounter( counter + 1 )
  const decrement = () => setCounter( counter - 1 )
  

  return (
    <>
      {/* <span className="cross">&times;</span> */}
      {/* <button>Начать</button> */}

      <h1>Vite + React = Love</h1>

      {/* <div className="logo-container">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
        <p>+</p>
        <img src="/react.svg" className="logo" alt="React logo" />
        <p>=</p>
        <img src="/love.svg" className="logo" alt="Love logo" />
      </div> */}

      <hr />

      <div className="card">
        <p className="count-paragraph">count is {counter}</p>
        <div className="increment-buttons">
          <button onClick={() => increment()}>+1</button>
          <button onClick={() => decrement()}>-1</button>
          <button onClick={() => setCounter(0)}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
