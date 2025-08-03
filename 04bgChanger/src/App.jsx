import { useState } from "react"

function App() {
  const [color, setColor] = useState("#706993")


   
  const colorGen = () =>{
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);
    let rgb = `rgb(${red}, ${green}, ${blue})`
    setTimeout(() => {
    setColor(rgb);
  }, 270);

  }


  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-lg bg-#6E9075 bg-#6E9075 px-3 py-2 rounded-3xl">
          <button onClick={colorGen} className="outline-none py-1 px-4 rounded-full text-black shadow-lg" style={{backgroundColor: "#70A0AF"}}>Generate Color</button>

        </div>
      </div>
    </>
  )
}

export default App



