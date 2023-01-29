// Page 1 component
import React from 'react';
import './App.css';

const Page2 = ({count,setCount}) => {
  

  return (
    <div>
      
      <button onClick={() => setCount(count - 1)}>Countdown</button>
      
    </div>
  );
};

export default Page2;