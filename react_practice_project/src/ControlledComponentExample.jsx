import React, { useContext, useState } from 'react';
import MyContext from './ContextAPI/MyContext';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './Redux/CounterSlice';
import { decrement } from './Redux/CounterSlice';

function ControlledComponentExample() {
  const contextValue = useContext(MyContext)

  const counterValue = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }; 

  const handleIncrement = ()=>{
    dispatch(increment())
  }
  const handleDecrement = ()=>{
    dispatch(decrement())
  }

  return (
    <div>
      <h3>controlled component example :</h3>
      {/* Input field with value set to the state variable inputValue */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      {/* Display the current value of the input field */}
      
      <h2>Input Value:<span > {inputValue}</span></h2>

      <br />
      <h2>==============================================================</h2>
        <h2>Context Api exmaple:</h2>
        <br />
      <h3>This data taken by context api through :  {contextValue}</h3>
      <br />
      <h2>==============================================================</h2>
        <h2>Redux  exmaple:</h2>
        <br />
      <h3>This data taken by Redux through :  {counterValue}</h3>
      <button onClick={handleIncrement}>Increase</button>
      <br />
      <br />
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default ControlledComponentExample;
