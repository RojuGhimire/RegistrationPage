import React,{useState} from 'react'

import './App.css'

function App() {
 const [ username, setusername]= useState('')
 const [ password, setpassword]= useState('')

  return (
    
    <div className="flex flex-col justify-center mt-40 items-center ">
       <form Submit="">
        <h1 className='text-3xl'>Login</h1>
      <div className="m-4">
        <label htmlFor="userame">UserName</label>
        <input value ={username} id='username' type='text' />
      </div>
      <div className="m-4">
        <label htmlFor="userame">Password</label>
        <input value ={password} id='password' type='text' />
      </div>
      <div className="flex justify center">
        <button className="bg-red-500 text-white px-2 py-1 rounded-md">
          Login
        </button>
      </div>
       </form>
    </div>
  )
}

export default App
