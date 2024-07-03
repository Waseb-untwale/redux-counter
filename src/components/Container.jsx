import React from 'react'

const Container = ({Children}) => {
  return (
    <div className='card' style={{width:"70%",border:"2px solid black"}}>
      <div className="card-body">{Children}</div>
    </div>
  )
}

export default Container
