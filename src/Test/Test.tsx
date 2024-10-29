import React from 'react';
import { Button } from 'reactstrap';
import './styles.css';

const Test: React.FC = () => {
  return (
    <div className="all">
      <div className="text">Leave a tip?</div>
      <br></br>
      <Button className="button">15%</Button>{' '}
      <Button className="button">20%</Button>{' '}
      <Button className="button">25%</Button> <br></br>
      <br></br>
      <Button className="custom_button">Custom</Button>{' '}
      <div className="padding"></div>
    </div>
  );
};

export default Test;
