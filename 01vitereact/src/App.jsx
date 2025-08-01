
import Chai from "./Chai"  //use first letter of import variable with uppercase

function App() {
  const username = "chai aur code"

  return (
    <>
      <Chai />
      <h1>Chai Aur React with vite | ishan </h1>

      <p>Namste we are from :  {username}</p>
    </>

    // only one element can be return so you can return a <div>including multiple elements</div>
    //empty<> include multiple element </> element
  )
}

export default App
