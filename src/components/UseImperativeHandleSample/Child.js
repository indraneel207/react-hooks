import React, { useImperativeHandle, useRef } from 'react'

function Child({ ...props }, ref) {
  const input1 = useRef()
  const input2 = useRef()
  const input3 = useRef()

  useImperativeHandle(
    ref,
    () => {
      return {
        focusInput1: () => input1.current.focus(),
        focusInput2: () => input2.current.focus(),
        focusInput3: () => input3.current.focus()
      }
    },
    []
  )

  return (
    <div>
      <input ref={input1} />
      <input ref={input2} />
      <input ref={input3} />
    </div>
  )
}

export default React.forwardRef(Child)
