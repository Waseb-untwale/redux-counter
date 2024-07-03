import React from 'react'
import {useRef} from 'react'
import {useDispatch} from 'react-redux'
const Controls = () => {

  const dispatch = useDispatch()
  const inputElement=useRef()

  const handleIncrement=()=>{
    dispatch({type:"INCREMENT"})
  }
  const handleDecrement=()=>{
    dispatch({type:"DECREMENT"})
  }
  const handlePrivacyToggle=()=>{
    dispatch({type:"PRIVACY_TOGGLE"})}
  

  const handleAdd=()=>{
   
    dispatch({
      type:"ADD",
      payload:{
        num:inputElement.current.value,
      },
    });
    inputElement.current.value=""
  }


  const handleSubstract=()=>{

    console.log(inputElement.current.value)
   dispatch({

    
    type:"SUBSTRACT",
    payload:{
      num:inputElement.current.value
    },
   });
   inputElement.current.value=""
  }

  return (
    <>
    <div className='d-grid gap-2 d-sm-flex justify-content-sm-center control-row'>
      <button type="button" class="btn btn-info"
      onClick={handleIncrement}>+1</button>
      <button type="button" class="btn btn-success" onClick={handleDecrement}>-1</button>
      <button type="button" class="btn btn-warning" onClick={handlePrivacyToggle}>Privacy Toggle</button>
    </div>
    <div className='d-grid gap-2 d-sm-flex justify-content-sm-center control-row'>
    <input type="text-control" class="form-control" 
    className="number-input" ref={inputElement}></input>
     <button type="button" class="btn btn-info" onClick={handleAdd}>Add </button>
     <button type="button" class="btn btn-success" onClick={handleSubstract}>Substract</button>
    </div>
    </>
  )
}

export default Controls
