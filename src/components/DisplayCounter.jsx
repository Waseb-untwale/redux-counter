import React from 'react'
import { useSelector } from 'react-redux'
const DisplayCounter = () => {

  const counter=useSelector((store)=>store.counter)
  return (
    <div>
      <p>Counter current Value:{counter}</p>
    </div>
  )
}

export default DisplayCounter
