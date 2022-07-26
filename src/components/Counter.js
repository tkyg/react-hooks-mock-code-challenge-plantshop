import React, { useState } from "react"

function Counter(){
  const [count, setCount] = useState(0)

  function increment(){
    setCount(count + 1)
  }
  return(
    <>
    <button onClick={increment}>Likes</button>
    <h1>{count}</h1>
    </>
  )
}

export default Counter