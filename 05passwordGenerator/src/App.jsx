import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [charaters, setCharaters] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  //useRef hook
  const passwordRef = useRef(null)

  // const cachedFn = useCallback(fn, dependencies)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbers) str += "0123456789"
    if (charaters) str += "!@#$%^&*-_+={}~`"

    for (let i = 1; i <= length; i++) {
      const idx = Math.floor(Math.random() * str.length + 1) //index
      pass += str.charAt(idx)
    }

    setPassword(pass)

  }, [length, numbers, charaters, setPassword])

  // to came back to original position of copy button
  useEffect(() => {
    setCopied(false);
  }, [length, numbers, charaters, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    // password ref is used in this give the better user experience 
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 25)
    setCopied(true)
    window.navigator.clipboard.writeText(password)
  }, [password])

  //useEffect(setup,dependencies)
  useEffect(() => {
    passwordGenerator()
  }, [length, numbers, charaters, passwordGenerator])

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10"
      style={{
        background: 'linear-gradient(135deg, #F3D9B1, #17C3B2, #AF3E4D, #CFBCDF)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 20s ease infinite',
      }}
    >
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl shadow-xl rounded-2xl px-5 py-6 sm:px-6 sm:py-8 bg-[#CFBCDF] text-gray-800 font-sans">
        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-center text-purple-700 mb-6'>
          Password generator
        </h1>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center shadow-md rounded-lg overflow-hidden mb-6 border border-gray-300">
          <input
            type="text"
            value={password}
            className="flex-1 px-4 py-2 text-base sm:text-lg bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none"
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className={`px-4 py-2 text-sm sm:text-base font-semibold transition-all duration-300 ${copied ? 'bg-purple-600 text-white' : 'bg-white text-purple-700'}`}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <div className='flex flex-col gap-4 text-sm'>
          <div className='flex items-center justify-between'>
            <label className="font-medium text-gray-700 text-sm sm:text-base">
              Length: {length}
            </label>
            <input
              type="range"
              min={7}
              max={100}
              value={length}
              className='w-2/3 accent-purple-500 cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="checkbox"
                checked={numbers}
                id="numberInput"
                onChange={() => {
                  setNumbers((prev) => !prev);
                }}
                className="accent-purple-600"
              />
              Numbers
            </label>

            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="checkbox"
                checked={charaters}
                id="characterInput"
                onChange={() => {
                  setCharaters((prev) => !prev) // we want to change the last value   
                }}
                className="accent-purple-600"
              />
              Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
