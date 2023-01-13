import DisplayForms from "../Home/DisplayForms";
import DisplayPeeps from "../Home/DisplayPeeps";
const HomePage = ({ peepdata, loggedIn, response, user }) => {
    return (
        <div className="container">
        <div className="row">
            <DisplayPeeps peepdata={ peepdata}/>
            <DisplayForms loggedIn={loggedIn} response={response} user={user} />
        </div>
        </div>
                );
};

export default HomePage;