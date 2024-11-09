import { useState } from 'react'
import './login.css'

function Login()
{
    return (
        <>
        <div id="header">
           <h1>STUDENT ATTENDENCE MANAGEMENT SYSTEM</h1>  
        </div>
        <div id ='mainbloc'>
        <div>
        <table>
            
            <tr>
                <td>
                    <label htmlfor="fname">User Name</label>
                </td>
                <td>:</td>
                <td>
                    <input id="fname" placeholder='enter name' required ></input>
                </td>
            </tr>
            <tr>
                <td><label htmlfor="pass" >Password</label></td>
                <td>:</td>
                <td>
                    <input id="pass" placeholder='enter password' required></input>
                </td>
            </tr>
        </table>
        </div>
        <a href="">forget password?</a>
        <button>Login</button>
        <button>Sign Up</button>
        </div>
        
        </>
    )
}
export default Login