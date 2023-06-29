import React, { useRef } from 'react'
import Child from './Child'

function UseImperativeHandleSample() {
  const childRef = useRef()

  return (
    <div>
      <h1>UseImperativeHandle Hook Sample</h1>
      <div>
        <button onClick={() => childRef.current.focusInput1()}>Focus Input 1</button>
        <button onClick={() => childRef.current.focusInput2()}>Focus Input 2</button>
        <button onClick={() => childRef.current.focusInput3()}>Focus Input 3</button>
      </div>
      <Child ref={childRef} />
    </div>
  )
}

export default UseImperativeHandleSample
