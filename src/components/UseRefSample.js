import React, { useRef, useState } from 'react'

function UseRefSample() {
  const [text, setText] = useState('')
  const prevText = useRef('') // To store value between renders
  
  const handleOnEdit = (event) => {
    setText(event.target.value)
    prevText.current = text
  }
  
  return (
    <div>
      <h1>UseRef Hook Sample</h1>
      <input onChange={handleOnEdit}/>
      <h2>The value is {text} and the old value is {prevText.current}</h2>
    </div>
  )
}

export default UseRefSample
