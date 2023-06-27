import React, { useContext, useState } from 'react'

const OuterContext = React.createContext()
const InnerContext = React.createContext()

export function useOuterContext() {
  return useContext(OuterContext)
}

export function useInnerContext() {
  return useContext(InnerContext)
}

function UseContextProvider({ children }) {
  const [passValue, setPassValue] = useState(1)

  const toggleValue = () => {
    setPassValue(prevValue => prevValue ? 0 : 1)
  }

  return (
    <OuterContext.Provider value={passValue}>
      <InnerContext.Provider value={toggleValue}>
        {children}
      </InnerContext.Provider>
    </OuterContext.Provider>
  )
}

export default UseContextProvider
