import React, { useEffect, useState } from 'react'

const getSavedValue = (key, initialValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key))
  if (savedValue) return savedValue
  if (initialValue instanceof Function) return initialValue()
  return initialValue
}

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue))

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

function CustomHookSample() {
  const [state, setState] = useLocalStorage('name', '')

  return (
    <div>
      <h2>Custom Hook Sample</h2>
      <input value={state} onChange={(event) => setState(event.target.value)} />
    </div>
  )
}

export default CustomHookSample
