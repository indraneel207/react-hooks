import React, { useState } from 'react'

function UseStateSample() {
  const [count, setCount] = useState(0)
  
  const handleOnAdd = () => {
    setCount((oldCount) => oldCount + 1)
  }

  const handleOnRemove = () => {
    setCount((oldCount) => oldCount - 1)
  }
  
  return (
    <div>
      <h1>UseState Hook Sample</h1>
      <button onClick={handleOnAdd}>+</button>
      <h2>{count}</h2>
      <button onClick={handleOnRemove}>-</button>
    </div>
  )
}

export default UseStateSample
