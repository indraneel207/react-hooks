import React, { useEffect, useState } from 'react'

function UseEffectSample() {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleOnResize)
    return () => {
      window.removeEventListener('resize', handleOnResize)
    }
  })

  const handleOnResize = () => {
    setWindowSize(window.innerWidth)
  }

  return (
    <div>
      <h1>UseEffect Hook Sample</h1>
      <h2>{windowSize}</h2>
    </div>
  )
}

export default UseEffectSample
