import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Count,setCount]=useState(0);
  let increaseValue=()=>{
    if(Count<20){
    setCount(Count+1);
    } else {
      alert("Max Value Achieve : "+Count)
    }
  }
  let decreaseValue=()=>{
    if(Count>0){
    setCount(Count-1);
    } else {
      alert("Min Value Achieve : "+Count)
    }
  }
  return (
    <>
     <h1>Counter Project</h1>
     <h2>Count : {Count}</h2>
     <button onClick={increaseValue}>Increase</button>
     <br />
     <button onClick={decreaseValue}>Decrease</button>
    </>
  )
}

export default App
