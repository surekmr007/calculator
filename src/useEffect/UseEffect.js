import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const[count, setCount] = useState(0);
    const[msg, setMsg] = useState(0)
useEffect(() => {
    console.log('component mounted');
    console.log("msg incremented twice", msg);
    console.log('count is increased to:', count);
},[msg])

  return (
    <React.StrictMode>
        <button onClick={()=>{setCount(count+1)}}> increment</button>
        <p>the count vlaue is: {count}</p>
        {/* <button onClick={()=>{setCount(count-1)}}>decrement</button> */}
        <button onClick={()=>{setMsg(msg+2)}}> msg</button>
        <p>the count vlaue is: {msg}</p>



        </React.StrictMode>
  )
}

export default UseEffect