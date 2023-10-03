import React from 'react'
import useCounter from '../../hooks/useCounter'
import './Counter.css'

 const Counter = () => {
    const { increment,decrement,reset,counter}=useCounter(0)
  return (
    <div className='counter'>
        <button className='counter-button' onClick={decrement}>-</button>
        <span>{counter}</span>
        <button className='counter-button' onClick={increment}>+</button>
        <button className='counter-button  counter-button:hover' onClick={reset}>Reset</button>
    </div>
  )
}
export default Counter