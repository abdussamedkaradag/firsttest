// Page 1 component
import React from 'react';
import './App.css';

const Page1 = ({count,setCount}) => {
  

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Count Up</button>
      
    </div>
  );
};

export default Page1;