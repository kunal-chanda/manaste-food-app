import React, { useState } from 'react'

const Demo = () => {
    const [text, setText] = useState("Demo Text");
  return (
    <div className='m-4 p-2 w-96 h-96 border border-black'>
          <p>This is Demo Component.</p>
          <input className='mt-4 p-2 border border-black' type='text' value={text} onChange={(e) => setText(e.target.value)} />
          {console.log(text)}
          
          
    </div>
  )
}

export default Demo
