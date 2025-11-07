import { useState } from "react";


function App() {
  // counter state
  const [counter, setCounter] = useState(0)
  //app state
  const [isOpen, setIsOpen] = useState(false)
  //icons state
  const [activeItem, setActiveItem] = useState(null)

  //open or close app
  const stateApp = (initCounter, isOpen) => {
    setCounter(initCounter)
    setIsOpen(isOpen)
  }

  //change counter functions
  const increment = () => setCounter((counter) => counter + 1 )
  const decrement = () => setCounter((counter) => counter - 1 )

  const handleMouseEnter = (item) => setActiveItem(item)
  const handleMouseLeave = () => setActiveItem(null)

  return (
    <>
      {
        !isOpen ? (
          <button onClick={() => stateApp(0, true)}>Начать</button>
        ) : (
          null
        )
      }
      

      {
        isOpen ? (
          <>
            <span className="cross" onClick={() => stateApp(0, false)}>&times;</span>
            <h1>Vite + React = {counter >=3 ? 'Love' : ''}</h1>

            <div className="logo-container">
              <img 
                src="/vite.svg" 
                onMouseEnter={() => handleMouseEnter('vite')}
                onMouseLeave={() => handleMouseLeave()}
                className={`logo ${counter >= 1 || activeItem === 'vite' ? 'active' : ''}`} 
                alt="Vite logo" 
              />
              <p>+</p>
              <img 
                src="/react.svg"
                onMouseEnter={() => handleMouseEnter('react')}
                onMouseLeave={() => handleMouseLeave()} 
                className={`logo ${counter >= 2 || activeItem === 'react' ? 'active' : ''}`} 
                alt="React logo" 
              />
              <p>=</p>
              <img 
                src="/love.svg" 
                onMouseEnter={() => handleMouseEnter('love')}
                onMouseLeave={() => handleMouseLeave()}
                className={`logo ${counter >= 3 || activeItem === 'love' ? 'active' : ''}`} 
                alt="Love logo" 
              />
            </div>

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
        ) : (
          null
        )
      }
      
    </>
  );
}

export default App;
