import React, { useState } from 'react'
import Button from '../../common/Button';
import InputComponent from '../../common/Input';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");

    const handleLogin = ()=>{
        console.log("Handling Login");
    }

  return (
    <>
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
        {/* <InputComponent 
            state={confirmPassword} 
            setState={setConfirmPassword} 
            placeholder="Confirm Password" 
            type="password" 
            required={true} 

        /> */}
        <Button text={"Login"} onClick={handleLogin} />
    </>
  )
}

export default LoginForm