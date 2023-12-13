import React, { useState } from 'react'
import Button from '../../common/Button';
import InputComponent from '../../common/Input';

const SignupForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = ()=>{
        console.log("Handling Signup");
    }

  return (
    <>
        <InputComponent 
            state={fullName} 
            setState={setFullName} 
            placeholder="Full Name" 
            type="text" 
            required={true} 

        />
        <InputComponent 
            state={email} 
            setState={setEmail} 
            placeholder="Email" 
            type="email" 
            required={true} 

        />
        <InputComponent 
            state={password} 
            setState={setPassword} 
            placeholder="Password" 
            type="password" 
            required={true}                 
        />
        <InputComponent 
            state={confirmPassword} 
            setState={setConfirmPassword} 
            placeholder="Confirm Password" 
            type="password" 
            required={true} 

        />
        <Button text={"Signup"} onClick={handleSignup} />
    </>
  )
}

export default SignupForm