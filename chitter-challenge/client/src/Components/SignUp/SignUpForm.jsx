import { useState } from "react";
import {Navigate,Link } from 'react-router-dom';


const SignUpForm = ({ signupHandler, response }) => {
    let resstatus;
    const [fname, setFname] = useState(``);
    const [lname, setLname] = useState(``);
    const [userhandler, setUserhandler] = useState(``);
    const [email, setEmail] = useState(``);
    const [pwd, setPwd] = useState(``);

    const fnameOnChangeHandler = e => {
        setFname(e.target.value);
    };
    const lnameOnChangeHandler = e => {
        setLname(e.target.value);
    };
    const uhandlerOnChangeHandler = e => {
        setUserhandler(e.target.value);
    };
    const emailOnChangeHandler = e => {
        setEmail(e.target.value);
    };
    const pwdOnChangeHandler = e => {
        setPwd(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let addsignup = {
            fname,
            lname,
            userhandler,
            email,
            pwd
        };
        setFname(``);
        setLname(``);
        setUserhandler(``);
        setEmail(``);
        setPwd(``);
        signupHandler(addsignup);
    }
    if (response === "Registration successful") {
        resstatus = true;
    }
    if (response === "Invalid Data! Please Try Again!" || response === "User already exists!") {
        resstatus = false;
    }

    return (
    <>
            {resstatus ? <Navigate to="/" /> : <div><p className="error">{response}</p></div>}
        <form onSubmit={handleSubmit} className="row g-3">
            <div className="container form">
                <div className="card form">
                    <div className="card-header color">
                        Create New Account
                    </div>
                    <div className="card-body">
                        <p className="card-text">
                        Already have an account?&nbsp;<Link to="/login">LogIn</Link>
                        </p>
                        <hr></hr>
                        <label htmlFor="fname" className="form-label">First Name:</label>
                        <input type="text" className="form-control" placeholder="First Name..." value={fname} required onChange={fnameOnChangeHandler} /><br></br>
                    
                        <label htmlFor="lname" className="form-label">Last Name:</label>
                        <input type="text" className="form-control" placeholder="Last Name..." value={lname} required onChange={lnameOnChangeHandler} /><br></br>

                        <label htmlFor="user" className="form-label">User Name:</label>
                        <input type="text" className="form-control" placeholder="User Name..." value={userhandler} required onChange={uhandlerOnChangeHandler} /><br></br>
                        
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="text" className="form-control" value={email} placeholder="example@test.com" required onChange={emailOnChangeHandler} /><br></br>
                        
                        <label htmlFor="pwd" className="form-label">Password:</label>
                        <input type="password" className="form-control" value={pwd} placeholder="6+ Characters.." required onChange={pwdOnChangeHandler} /><br></br>
                    <div className="signupbutton">
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>
                    </div>
                    
                </div>
            </div>
            </form>
        </>
    );
};

export default SignUpForm;