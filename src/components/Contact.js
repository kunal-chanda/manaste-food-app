import React, { useState } from 'react'

const Contact = () => {

  const [name, setName] = useState('Default');
  const [email, setEmail] = useState('default');

  const handleSubmit = (e)=>{
    e.preventDefault();
    setName(e.target.name.value);
    setEmail(e.target.email.value);
  }
  return (
    <div className='text-center'>
        <p className='text-xl font-bold'>Contact US</p>
        <form onSubmit={handleSubmit} className='m-4'>
          <label className='text-xl font-bold'>Name: </label><input type='text' name='name' placeholder='Enter name..' />
          <label className='text-xl font-bold'>Email: </label><input type='email' name='email' placeholder='Enter Email..' />
          <button className='bg-teal-300 rounded-xl px-4 py-2 text-xl'>Send</button>
        </form>
        {<p className='text-xl font-bold'>Thanks {name}. We will contact to {email}.</p>} 
    </div>
  )
}

export default Contact;
