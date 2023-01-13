import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddPeeps = ({ peepHandler, user }) => {
    const author = user;
    const navigate = useNavigate();
    const [title, setTitle] = useState(``);
    const [message, setMessage] = useState(``);

    const titleOnChangeHandler = e => {
        setTitle(e.target.value);
    };
    const messageOnChangeHandler = e => {
        setMessage(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        let addPeeps = {
            author,
            title,
            message
        };
        setTitle(``);
        setMessage(``);
        peepHandler(addPeeps);
        navigate("/");
       
    }

    return (
        
        <form onSubmit={handleSubmit} className="row g-3">
        <div className="container form">
            <div className="card form">
            <div className="card-header color">
            Please Enter Peeps
            </div>
            <div className="card-body">
                <label htmlFor="title" className="form-label">Title:</label>
                <input type="text" className="form-control" value={title}placeholder="Please Enter Title..." required onChange={titleOnChangeHandler}/><br></br>
                
                <label htmlFor="message" className="form-label">Message:</label>
                        <textarea className="form-control" rows="3" value={ message} placeholder="Please Enter Message..." onChange={messageOnChangeHandler} required></textarea><br></br>
                        
                <div className="peepbutton">
                    <button type="submit" className="btn btn-primary">Post Peep</button>
                </div>
            </div>
        </div>
    </div>
    </form>
    );
};

export default AddPeeps;