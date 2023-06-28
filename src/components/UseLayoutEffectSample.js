import React, { useLayoutEffect, useRef, useState } from 'react'

function UseLayoutEffectSample() {
  const [isShowPopup, setIsShowPopup] = useState(false)
  const popupRef = useRef()
  const buttonRef = useRef()

  const handleOnClick = () => setIsShowPopup((prev) => !prev)

  useLayoutEffect(() => {
    if (popupRef.current && buttonRef.current) {
      const { bottom } = buttonRef.current.getBoundingClientRect()
      popupRef.current.style.top = `${bottom + 25}px`
      popupRef.current.style.position = 'absolute'
    }
  }, [isShowPopup])

  return (
    <div>
      <h1>UseLayoutEffect Hook Sample</h1>
      <button ref={buttonRef} onClick={handleOnClick}>
        Click me
      </button>
      {isShowPopup && <div ref={popupRef}>This is the popup!</div>}
    </div>
  )
}

export default UseLayoutEffectSample
