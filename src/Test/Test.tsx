import React, { useState, useCallback, useEffect } from 'react';
import { Button } from 'reactstrap';
import './styles.css';
import { SignatureScreen } from '../SignatureScreen';
import { NumberPad } from '../NumberPad';

const TippingUI: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [clickedCustom, setClickedCustom] = useState(false);
  const [cost, setCost] = useState('');

  const handleClick = (newCost: string) => {
    setCost(newCost); // Update state with the new cost value
    onChange(); // Trigger onChange with the new cost
  };

  const onChange = useCallback(() => {
    setClicked(!clicked);
    if (clicked) {
      alert(cost + ` was taken from your BevoBucks Account!`);
    }
  }, [setClicked, clicked]);

  const [selectedNumber, setSelectedNumber] = useState('');

  const handleNumberSelect = (number: string) => {
    setSelectedNumber(number); // Update state with the selected number
  };

  const onChangeCustom = useCallback(() => {
    setClickedCustom(!clickedCustom);
    if (clickedCustom && selectedNumber) {
      alert('$' + selectedNumber + ` was taken from your BevoBucks Account!`);
    }
  }, [setClickedCustom, clickedCustom, selectedNumber]);

  let clickedTimes = 0;
  const noTipClicked = () => {
    clickedTimes = clickedTimes + 1;
    if (clickedTimes == 3) {
      clickedTimes = 0;
      alert('MOOOOO! TIP OR GET THE HORNS!');
    }
  };

  return (
    <div className="all">
      {!clicked && !clickedCustom ? (
        <div>
          <div className="text">Leave a tip?</div>
          <br></br>
          <Button onClick={() => handleClick('$10')} className="button">
            15%
          </Button>{' '}
          <Button onClick={() => handleClick('$20')} className="button">
            20%
          </Button>{' '}
          <Button onClick={() => handleClick('$40')} className="button">
            25%
          </Button>{' '}
          <br></br>
          <br></br>
          <div>
            <Button onClick={onChangeCustom} className="custom_button">
              Custom
            </Button>{' '}
            <div>
              <br></br>
            </div>
            <Button
              onClick={() => {
                noTipClicked();
              }}
              className="custom_button2"
            >
              No Tip
            </Button>{' '}
          </div>
        </div>
      ) : null}
      {clicked ? (
        <div>
          <SignatureScreen />
          <br></br>
          <br></br>
          <Button onClick={onChange} className="done_button">
            Done
          </Button>
        </div>
      ) : null}
      {clickedCustom ? (
        <div>
          <NumberPad onNumberSelect={handleNumberSelect} />
          <div><br></br></div>
          <Button onClick={onChangeCustom} className="done_button_custom">
            Done
          </Button>
        </div>
      ) : null}
      <div className="padding"></div>
    </div>
  );
};

export default TippingUI;
