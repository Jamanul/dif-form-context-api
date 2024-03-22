import React, { useState } from 'react';

const StatefulForm = () => {
    const handleSubmit = e =>{
        e.preventDefault();
         if(password.length<6){
            setError('hello')
        }
        else{
            setError('')
            console.log(email,name,password)
        }
    }
    const [email,setEmail]=useState('')
    const [name,setName]=useState('hello')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const handleEmail=(e)=>{
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handleName=(e)=>{
        console.log(e.target.value)
        setName(e.target.value)
    }
    const handlePassword=(e)=>{
        console.log(e.target.value)
        setPassword(e.target.value)
       
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleName} type="text" name="name" />
        <br />
        <input onChange={handleEmail} type="email" name="email" />
        <br />
        <input onChange={handlePassword} required type="password" name="password" />
        <br />
        <input type="submit" value="submit" />
        {
            error &&  <p>{error}</p>
        }
      </form>
        </div>
    );
};

export default StatefulForm;