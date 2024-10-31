import React, { useState, useEffect } from 'react';
import './styles.css';

interface NumberPadProps {
  onNumberSelect: (number: string) => void; // Prop type for the callback function
}

const NumberPad: React.FC<NumberPadProps> = ({ onNumberSelect }) => {
  const [inputValue, setInputValue] = useState(''); // Initialize input value state

  const handleButtonClick = (value: string) => {
    setInputValue((prevValue) => prevValue + value); // Append clicked value to the inpu
  };

  useEffect(() => {
    onNumberSelect(inputValue); // Call the parent function with the updated inputValue
  }, [inputValue, onNumberSelect]);

  const handleClear = () => {
    setInputValue(''); // Clear input value
  };

  return (
    <div>
      <div className="container">
        <input
          type="text"
          value={inputValue}
          readOnly
          className="input"
          placeholder="Enter number"
        />
        <div><br></br></div>
        <div className="pad">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'Clear'].map(
            (button) => (
              <button
                key={button}
                onClick={() => {
                  button === 'Clear'
                    ? handleClear()
                    : handleButtonClick(button);
                }}
                className="numpadbutton"
              >
                {button}
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default NumberPad;
