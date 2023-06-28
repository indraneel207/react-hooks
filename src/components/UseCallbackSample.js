import React, { useCallback, useEffect, useState } from 'react'

function UseCallbackSample() {
  const [count, setCount] = useState(1)
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const slowFunction = (number) => {
    console.log('ACTION')
    let value = 1
    for (let i = 1; i < 1000000000; i++) {
      value *= 1
    }
    return number * 2 * value
  }

  const getDoubleNumber = useCallback((value) => slowFunction(value + count), [count]) // Same as useMemo - only difference is it returns a function instead of value

  const getTheme = () => {
    return {
      foreground: isDarkTheme ? 'white' : 'black',
      background: isDarkTheme ? 'black' : 'white'
    }
  }

  const changeTheme = () => setIsDarkTheme((oldTheme) => !oldTheme)
  const changeCount = () => setCount((oldCount) => oldCount + 1)

  const [doubleNumber, setDoubleNumber] = useState(null)

  useEffect(() => {
    setDoubleNumber(getDoubleNumber(2))
  }, [getDoubleNumber])

  return (
    <div>
      <h1>UseCallback Hook Sample</h1>
      <button onClick={changeCount}>Change Count</button>
      <h2>{count}</h2>
      <h2>{doubleNumber}</h2>
      <button onClick={changeTheme}>Change Theme</button>
      <h2>
        Theme value: {getTheme().foreground}, {getTheme().background}
      </h2>
    </div>
  )
}

export default UseCallbackSample
