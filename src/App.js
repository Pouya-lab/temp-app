import React, { useState } from 'react';
import "./style.css";

function App() {
  
  const [tempValue , setTempValue] = useState(15)
 const [tempColor , setTempColor] = useState('default-color')

 const tempIncrease = () =>{
  setTempValue(tempValue + 1)
  if(tempValue >= 15){
    setTempColor('hot')
  }

 }

 const tempDecrease = () =>{
  setTempValue(tempValue - 1)
  if (tempValue <= 16) {
    setTempColor('cold')
  }

 }

  return (
    <>
     <h1 className="name d-flex">Temperture Control</h1>
     <section className="container d-flex">
     <section className="app d-flex">
      <section className='show'>
        <div className={`temp ${tempColor}`}>{tempValue}°C</div>
        <section className="btn-gp d-flex">
            <button className="btn" onClick={tempDecrease} >-</button>
            <button className="btn" onClick={tempIncrease} >+</button>
            <button className="btn" onClick={()=>{setTempValue(15) ; setTempColor('default-color') } } >Reset</button>
        </section>
      </section>
     </section> 
     </section>
    </>
  )
}

export default App