import React, { useState } from 'react';
import "./style.css";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, resetTemp } from './redux/counter'; 

function App() {
  
  const [tempValue , setTempValue] = useState(15)
  const  { count }   = useSelector( state => state.counter )
  const dispatch = useDispatch()

 const [tempColor , setTempColor] = useState('default-color')

 const tempIncrease = () =>{
  dispatch(increment())
 
    setTempColor('hot')
  

 }

 const tempDecrease = () =>{
  dispatch(decrement())
  
    setTempColor('cold')
  

 }

 const resetTemp = ()=>{
  dispatch(resetTemp())
 }

  return (
    <>
     <h1 className="name d-flex">Temperture Control</h1>
     <section className="container d-flex">
     <section className="app d-flex">
        <section className='show'>
          <div className={`temp ${tempColor}`}>{count}°C</div>
          <section className="d-flex">
              <button className="btn" onClick={tempDecrease} >-</button>
              <button className="btn" onClick={tempIncrease} >+</button>
              {/* <button className="btn" onClick={()=>{setTempValue(15) ; setTempColor('default-color') } } >Reset</button> */}
              <button className="btn" onClick={()=>{resetTemp() ; setTempColor('default-color') } } >Reset</button>
          </section>
      </section>
     </section> 
     </section>
    </>
  )
}

export default App