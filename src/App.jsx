
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
        <input className='border border-black round-md' value ={password} id='password' type='text' />
      </div>
      <div className="flex justify center">
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Login
</button>

      </div>
      
       </form>
    </div>
  )
}

export default App