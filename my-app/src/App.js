import React, { useState } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='mainApp'>
      <div >
      <div><p>Wellcome to Counter</p></div>
      <div><Page1 count={count} setCount={setCount}/></div>
      <div><Page2 count={count} setCount={setCount}/></div>
      </div>
     
      
      
      
      


    </div>
  )
}

export default App