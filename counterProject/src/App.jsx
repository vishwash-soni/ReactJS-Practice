import './App.css'
import { useState } from 'react';

function App() {
  let [counter,setCounter] = useState(0)

  const addValue = () => {
    counter = counter + 1;
    if(counter > 20){
      alert("Counter value cannot exceed 20");
      counter = 20; // Reset to 20 if it exceeds
    }
    setCounter(counter);
    console.log("Counter Value: ", counter);
  }

  const subValue = () => {
    counter = counter - 1;
    if(counter < 0){
      alert("Counter value cannot be less than 0");
      counter = 0; // Reset to 0 if it goes below
    }
    setCounter(counter);
    console.log("Counter Value: ", counter);
  }

  return (
    <>
      <h1>Vishwash Soni</h1>
      <h2>Counter Value : {counter}</h2>
      <button 
      onClick={addValue}
      >Add value : {counter}</button>
      <br /><br />
      <button 
      onClick={subValue}>Subtract value : {counter}</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
