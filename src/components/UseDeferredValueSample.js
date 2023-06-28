import React, { useDeferredValue, useMemo, useState } from 'react'

function UseDeferredValueSample() {
  const [value, setValue] = useState('')

  const handleChange = (e) => setValue(e.target.value)

  return (
    <div>
      <h1>UseDeferredValue Hook Sample</h1>
      <input onChange={handleChange} value={value} />
      <ChildFunction input={value} />
    </div>
  )
}

function ChildFunction({ input }) {
  const LIST_SIZE = 20000
  const deferredValue = useDeferredValue(input)

  const list = useMemo(() => {
    const list = []
    for (let i = 0; i < LIST_SIZE; i += 1) {
      list.push(deferredValue)
    }
    return list
  }, [deferredValue])

  const renderList = (list) => list.map((each, index) => <div key={index}>{each}</div>)

  return <div>{renderList(list)}</div>
}

export default UseDeferredValueSample
