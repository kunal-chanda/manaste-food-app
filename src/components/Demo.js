import React, { useMemo, useState } from 'react'
import { findNthPrime } from '../utils/resource';
import UseRef from './UseRef';

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  const primeNo = useMemo(()=> findNthPrime(text),[text]);
  console.log(primeNo);
  return (
    <div className='flex'>
      <div className={'m-4 p-2 w-96 h-96 border border-black ' + (isDarkTheme && 'bg-slate-950 text-white')}>
        <button className='rounded-xl border border-black p-2 m-2 bg-green-600' onClick={()=>setIsDarkTheme(!isDarkTheme)}>Toggle Theme</button>
        <p>This is Demo Component.</p>
        <input className={'mt-4 p-2 border border-black ' + (isDarkTheme && 'text-black')} type='number' value={text} onChange={(e) => setText(e.target.value)} />
        <p className='mt-2'> The {text}th Prime Number is: { primeNo}</p>
      </div>
      <UseRef/>
    </div>
  )
}

export default Demo
