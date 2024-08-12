import React, { useState } from 'react';
import './Calculator.css'
function Calculator() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setInputValue('');
      setResult('');
    } else if (buttonText === '=') {
      if (inputValue === '') {
        setResult('Error');
      } else {
        try {
          const result = eval(inputValue);
          if (result === Infinity) {
            setResult('Infinity');
          } else if (isNaN(result)) {
            setResult('NaN');
          } else {
            setResult(result);
          }
          setInputValue('');
        } catch (e) {
          setResult('Error');
        }
      }
    } else {
      setInputValue(inputValue + buttonText);
    }
  };

  return (
    <>
    <div className="heading"> <h1>React Calculator</h1></div>
    
    <div className="calculator">
      <input
        type="text"
        value={inputValue}
        readOnly
        className="input-field"
      />
      <div className="result">{result}</div>
      <div className="button-grid">
        <button className="button" onClick={() => handleButtonClick('7')}>
          7
        </button>
        <button className="button" onClick={() => handleButtonClick('8')}>
          8
        </button>
        <button className="button" onClick={() => handleButtonClick('9')}>
          9
        </button>
        <button className="button" onClick={() => handleButtonClick('/')}>
          /
        </button>
        <button className="button" onClick={() => handleButtonClick('4')}>
          4
        </button>
        <button className="button" onClick={() => handleButtonClick('5')}>
          5
        </button>
        <button className="button" onClick={() => handleButtonClick('6')}>
          6
        </button>
        <button className="button" onClick={() => handleButtonClick('*')}>
          *
        </button>
        <button className="button" onClick={() => handleButtonClick('1')}>
          1
        </button>
        <button className="button" onClick={() => handleButtonClick('2')}>
          2
        </button>
        <button className="button" onClick={() => handleButtonClick('3')}>
          3
        </button>
        <button className="button" onClick={() => handleButtonClick('-')}>
          -
        </button>
        <button className="button" onClick={() => handleButtonClick('0')}>
          0
        </button>
        <button className="button" onClick={() => handleButtonClick('C')}>
          C
        </button>
        <button className="button" onClick={() => handleButtonClick('=')}>
          =
        </button>
        <button className="button" onClick={() => handleButtonClick('+')}>
          +
        </button>
      </div>
      
    </div>
    </>
  );
};

export default Calculator;