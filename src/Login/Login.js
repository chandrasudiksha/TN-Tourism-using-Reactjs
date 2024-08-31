import React from "react";
import {Link,useNavigate} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import './Login.css';
function Login(){
    return (
        <>
        <Navbar/>
        <div className="body">
        <div class="wrapper">
            <div class="form-box login">
                <h2>Login</h2>
                <form action="#">
                    <div class="input-box">
                        
                        <input type="email" required/>
                        <label>Email</label>
                    
                    </div>
                    <div class="input-box">
                        
                        <input type="password" required/>
                        <label>Password</label>
                    
                    </div>
                    <div class="remember-forget">
                        <label><input type="checkbox"/>  Remember me</label>
                        <a>Forgot Password?</a>
                    </div>
                    <button type="submit" class="btn">Login</button>
                    <div class="login-register">
                        <p>Don't have an account? <Link to="/Register"><a class="register-link">Register</a></Link></p>
                    </div>
                </form>
            </div>
           </div>
        </div>
        </>
    );
}
export default Login;