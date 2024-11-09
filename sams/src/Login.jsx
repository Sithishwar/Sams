import { useState } from 'react'
import './login.css'

function Login()
{
    return (
        <>
        <div id="header">
           <h1>SAMS</h1>  
        </div>
        <div id ='mainbloc'>
        <div>
        <label htmlfor="fname">User Name:</label>
        <input id="fname" placeholder='enter name' required ></input>
        <br/><label htmlfor="pass" >Password:</label>
        <input id="pass" placeholder='enter password' required></input>
        <br/></div>
        <a href="">forget password?</a>
        <button>Login</button>
        <button>Sign Up</button>
        </div>
        
        </>
    )
}
export default Login