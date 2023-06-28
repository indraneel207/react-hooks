import React, { useState, useTransition } from 'react'

function UseTransitionSample() {
  const [value, setValue] = useState('')
  const [list, setList] = useState([])
  const [isPending, startTransition] = useTransition()
  const LIST_SIZE = 2000

  const renderList = (list) => list.map((each, index) => <div key={index}>{each}</div>)

  const getList = (newValue) => {
    const list = []
    for (let i = 0; i < LIST_SIZE; i += 1) {
      list.push(newValue)
    }
    return list
  }

  const handleChange = (e) => {
    setValue(e.target.value)
    startTransition(() => {
      const newList = getList(e.target.value)
      setList(newList)
    })
  }

  return (
    <div>
      <h1>UseTransition Hook Sample</h1>
      <input onChange={handleChange} value={value} />
      <div>{isPending ? 'Loading...' : renderList(list)}</div>
    </div>
  )
}

export default UseTransitionSample
