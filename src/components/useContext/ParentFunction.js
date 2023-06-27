import React from 'react'
import UseContextProvider from './UseContextSample'
import ChildFunction from './ChildFunction'

function ParentFunction() {
  return (
    <UseContextProvider>
      <h1>Parent function</h1>
      <ChildFunction />
    </UseContextProvider>
  )
}

export default ParentFunction
