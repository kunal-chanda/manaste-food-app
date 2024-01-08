import React, { useRef, useState } from 'react'

const UseRef = () => {
    const [counter, setCounter] = useState(0);
    const refCounter = useRef(0);

    const handleClick = () => {
        setCounter(counter + 1);
        refCounter.current++;

        console.log("Counter: ", counter);
        console.log("refCounter: ", refCounter);
    }
  return (
     <div className='m-4 p-2 w-96 h-96 border border-black'>
      <button className='rounded-xl border border-black p-2 m-2 bg-green-600' onClick={()=>handleClick()}>Increment</button>
      <p>This is useRef Example Component.</p>
          <p className='mt-2'>State Variable Counter is: {counter}</p>
          <p className='mt-2'>useRef Variable refCounter is: { refCounter.current}</p>
    </div>
  )
}

export default UseRef
