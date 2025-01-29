import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);  // Step value default is 1

  const handleIncrement = () => {
    setCount(count + step);
  };

  const handleDecrement = () => {
    setCount(count - step);
  };

  const handleStepChange = (e) => {
    setStep(Number(e.target.value));
  };

  return (
    <div className="app-container">
      <div className="counter-card">
        <h1 className="counter-value">{count}</h1>
        <div className="step-group">
          <label htmlFor="stepInput">Step Value: </label>
          <input
            type="number"
            id="stepInput"
            className="step-input"
            value={step}
            onChange={handleStepChange}
          />
        </div>
        <div className="button-group">
          <button className="counter-button" onClick={handleDecrement}>
            -
          </button>
          <button className="counter-button" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
