// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  // let myObj ={
  //   username : "ishan",
  //   age : 20
  // }


  // let newArr =[1,2,3,4,5,6,7,8]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind Test  </h1>

      <Card username="chaiaurcode" btnText="click-me"/>

      <Card username="Hitesh" btnText="vist-me"/>

    </>
  )
}

export default App
