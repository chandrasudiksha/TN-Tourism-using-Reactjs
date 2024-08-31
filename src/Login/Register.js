import React from "react";
import {Link,useNavigate} from "react-router-dom";
import './Login.css';
import Navbar from "../Navbar/Navbar";
function Register(){
    return (
        <>
        <Navbar/>
        <div className="body">
        
        <div class="wrapper-reg">
            <div class="form-box">
                <h2>Register</h2>
                <form action="#">
                    <div class="input-box">
                            <input type="text" required/>
                            <label>Username</label>
                        </div>
                    <div class="input-box">
                        <input type="email" required/>
                        <label>Email</label>
                    
                    </div>
                    
                    <div class="input-box">
                        
                        <input type="password" required/>
                        <label>Password</label>
                    
                    </div>
                    <div class="remember-forget">
                        <label><input type="checkbox"/> I agree to the terms and condition</label>
                        
                    </div>
                    <button type="submit" class="btn">Register</button>
                    <div class="login-register">
                        <p>Already have an account? <Link to="/Login"><a class="register-link">Login</a></Link></p>
                    </div>
                </form>
            </div>
           </div>
        </div>
        </>
    );
}
export default Register;