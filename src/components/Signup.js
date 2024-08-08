import React from 'react'
import { useState } from 'react'
import "../styles/signup.css"


export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const collectData=async ()=>{
    let results=await fetch('http://localhost:5000/signup',{
      method:'post',
      body:JSON.stringify({name,email,password,confirmPassword}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    results=await results.json();

    // console.log(resultsgit init);


  }

  return (
   <>


   <div className="signup">
    <div className="title">
        sign up 
    </div>
    <form action=""> 
    
          <input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
          <input type="email" placeholder="Email Address" value={email} onChange={(event) => setEmail(event.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />

    </form>
    <button onClick={collectData}>Sign Up </button>
   </div>
   
   
   
   </>
  )
}
