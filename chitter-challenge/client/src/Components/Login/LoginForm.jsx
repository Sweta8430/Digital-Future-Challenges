import { useState } from "react";
import { Navigate } from 'react-router-dom';

const LoginForm = ({loginHandler,response}) => {
    let resstatus;
    const [email, setEmail] = useState(``);
    const [pwd, setPwd] = useState(``);
    const emailOnChangeHandler = e => {
        setEmail(e.target.value);
    };
    const pwdOnChangeHandler = e => {
        setPwd(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let getlogin = {
            email,
            pwd
        };
        setEmail(``);
        setPwd(``);
        loginHandler(getlogin);
    }
    if (response === "Username or Password Wrong! Please try again!" || response === "Invalid Data! Please Try Again!") {
        resstatus = false;
    }
    if (response === "Login successful!") {
        resstatus = true;
    }
    return (
        <>
            {resstatus ? <Navigate to="/addpeep" /> : <div><p className="error">{response}</p></div>}
            <form onSubmit={handleSubmit} className="row g-3">
            <div className="container form">
                <div className="card form">
                    <div className="card-header color">
                        Login Details
                    </div>
                    <div className="card-body">
                        <label htmlFor="email" className="form-label">Email:</label>
                            <input type="text" className="form-control"
                                value={email}        placeholder="example@test.com" required onChange={emailOnChangeHandler} /><br></br>
                        
                        <label htmlFor="pwd" className="form-label">Password:</label>
                            <input type="password" className="form-control" placeholder="6+ Characters.." value={pwd} required onChange={pwdOnChangeHandler} /><br></br>

                        <div className="loginbutton">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default LoginForm;