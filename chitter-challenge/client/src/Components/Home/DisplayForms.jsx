import { Link } from "react-router-dom";

const DisplayForms = ({ loggedIn, response, user }) => {
    if (response === "Registration successful") {
        loggedIn = true;
    }
    if (response === "Peep Insertion Successful!") {
        loggedIn = true;
    }
    return ( 
        <div className="col-4 bg-light rounded-3">
            <div className="card text-center">
            {(() => {
                    if (response === "Login successful!" && loggedIn) {
                        return (
                            <>
                                <div className="card-header">
                                    <h5 className="card-text color">Welcome:{user}</h5>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Login Successful</p>
                                    <a href="/" className="btn btn-primary">Logout</a>&nbsp;&nbsp;&nbsp;
                                    <a href="/addpeep" className="btn btn-primary">Post Peep</a>
                                </div>
                            </>
                        )
                    } else if (response === "Registration successful" && loggedIn) {
                        return (
                            <>
                                <div className="card-header">
                                    <h5 className="card-text color">Welcome</h5>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Registration Successful</p>
                                    <a href="/login" className="btn btn-primary">Login</a>
                                </div>
                            </>
                        )
                    } else if (response === "Peep Insertion Successful!" && loggedIn) {
                        return (
                            <>
                                <div className="card-header">
                                    {user.length>0?<h5 className="card-text color">Welcome :{user}</h5>:<h5 className="card-text color">Welcome User</h5>}
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Fancy Another Peep?</p>
                                    <a href="/" className="btn btn-primary">Logout</a>&nbsp;&nbsp;&nbsp;
                                    <Link to="/addpeep" className="btn btn-primary">Post Peep</Link>
                                </div>
                            </>
                        )
                    } else {
                    return (
                    <>
                        <div className="card-header">
                            <h5 className="card-text color">New to Chitter?</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Signup /Login now to get your own personalized timeline!</p>
                            <a href="/signup" className="btn btn-primary">Sign Up</a>&nbsp;&nbsp;&nbsp;
                            <a href="/login" className="btn btn-primary">Login</a>
                        </div>
                    </>
              )
            }
        })()}  
            </div> 
            </div>      
    );
};

export default DisplayForms;