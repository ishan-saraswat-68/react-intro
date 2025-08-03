import { useState } from 'react'

import './App.css'

function App() {


  let [counter,setcounter]=useState(5) //[vaiable,function] = usestate(default value) used to reflect anywhere changes

  //let counter =5;
  
  const addValue=()=>{
    if(counter != 20)
    counter = counter +1;
    setcounter(counter)
    console.log("clicked : ",counter)
  }

  const removeValue=()=>{
    if(counter != 0)
    setcounter(counter-1);
  }



  return (
   <>
   <h1>Chai Aur React</h1>
   <h2>Counter Value : {counter}</h2>
   
   <button onClick={addValue}>Add Value : {counter}</button>
   <br />
   <br />
   <button onClick={removeValue}>Remove Value {counter}</button>
   <p> FOOTER : {counter}</p>
   </>
  )
}

export default App
