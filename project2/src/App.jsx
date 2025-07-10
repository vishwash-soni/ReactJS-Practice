import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [len, setLen] = useState(8)
  const [numAllow, setNumAllow] = useState(true)
  const [charAllow, setCharAllow] = useState(true)
  const [passsword, setPassword] = useState('')

  const passRef = useRef(null);
  const buttonRef = useRef(null);


  const passwordGeneratoer = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+[]{}|"

    for (let i = 0; i < len; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex];
    }

    setPassword(pass);

  }, [len, numAllow, charAllow, setPassword]);

  const copyPassToClip = useCallback(() => {
    buttonRef.current.innerText = "Copied!";
    buttonRef.current.classList.replace('bg-blue-300', 'bg-blue-700');
    buttonRef.current.classList.remove(`hover:bg-blue-400`);

    setTimeout(() => {
      buttonRef.current.innerText = "Copy";
      buttonRef.current.classList.replace('bg-blue-700', 'bg-blue-300');
      buttonRef.current.classList.add(`hover:bg-blue-400`);
    }, 1000);

    passRef.current?.select();
    window.navigator.clipboard.writeText(passsword);

  }, [passsword]);

  useEffect(() => {
    passwordGeneratoer();
  }, [len, numAllow, charAllow, passwordGeneratoer]);

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='w-full max-w-md max-auto shadow-md rounded-lg px-4 my-8 text-white bg-gray-500 '>
        <div className='flex flex-col gap-4 rounded-lg p-4  overflow-hidden'>
          <input type="text"
            value={passsword}
            className='w-full p-2 rounded-lg bg-gray-800 text-white'
            placeholder='Generated Password'
            ref={passRef}
            readOnly
          />
          <button ref={buttonRef} onClick={copyPassToClip} className='p-2 rounded-lg outline-none bg-blue-300 text-white hover:bg-blue-400'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 pb-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={8}
              max={25}
              value={len}
              className='w-full cursor-pointer'
              onChange={(e) => setLen(e.target.value)}
            />
            <label>Length:{len}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numAllow}
              className='w-full cursor-pointer'
              onChange={() => setNumAllow(!numAllow)}
            />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllow}
              className='w-full cursor-pointer'
              onChange={() => setCharAllow(!charAllow)}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
