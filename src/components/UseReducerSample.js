import React, { useReducer } from 'react'

const ACTIONS = {
  ADD_TEXT: 'add-text',
  REMOVE_TEXT: 'remove-text'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TEXT: {
      return { ...state, value: action.value }
    }
    case ACTIONS.REMOVE_TEXT: {
      return { ...state, value: '' }
    }
    default: {
      return state
    }
  }
}

function UseReducerSample() {
  const [state, dispatch] = useReducer(reducer, { value: '' })

  return (
    <div>
      <h1>UseReducerSample</h1>
      <input
        value={state.value}
        onChange={(event) => dispatch({ type: ACTIONS.ADD_TEXT, value: event.target.value })}
      />
      <button onClick={() => dispatch({ type: ACTIONS.REMOVE_TEXT })}>Clear</button>
      <h2>{state.value}</h2>
    </div>
  )
}

export default UseReducerSample
