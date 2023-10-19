import React from 'react'
const Counter = (props) => {
  return (
    <div>
        <h4>Value is {props.initialValue}</h4>
        <h4>{props.increase}</h4>
    </div>
  )
}
export default Counter;