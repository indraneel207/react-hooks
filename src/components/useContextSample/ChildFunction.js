import React from 'react'
import { useInnerContext, useOuterContext } from './UseContextProvider'

function ChildFunction() {
  const value = useOuterContext()
  const setValue = useInnerContext()
  
  return (
    <div>
      <h2>Child function</h2>
      <h2>Value: {value}</h2>
      <button onClick={setValue}>Press Button</button>
    </div>
  )
}

export default ChildFunction
