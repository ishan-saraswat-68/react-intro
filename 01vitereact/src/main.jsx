import React from 'react'
import { Children } from 'react'
import ReactDOM  from 'react-dom/client'
import App from "./App"



function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click Me To visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser =".ram bharose"

const reactElement =React.createElement(
  'a',
  {href : "https://google.com",target:'_blank'},
  'Click Me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)