import React, { useState } from 'react';
import "./style.css";

function App() {
  const [count , setCount] = useState(10)

  return (
    <>
     <section className="container d-flex">
     <section className="app d-flex">
      <section className='show'>
        <div className="temp">{count}°C</div>
        <section className="btn-gp d-flex">
            <button className="btn">-</button>
            <button className="btn">+</button>
        </section>
      </section>
     </section> 
     </section>
    </>
  )
}

export default App