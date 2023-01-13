import PropTypes from "prop-types";
import moment from "moment";
const DisplayPeeps = ({ peepdata }) => {
    const getAllPeepsData = peepdata.slice(0).reverse().map(peeps => {
        const { _id,author,title,message,peepDate} = peeps;
        return (
            <div className="card" key={_id}>
            <div className="card-header"><p className="card-text color">@{author}</p></div>
            <div className="card-body">
                <h5 className="card-title">{ title}</h5>
                <p className="card-text">{message}</p>
            </div>
            <div className="card-footer text-muted">
                    {moment(peepDate).calendar()}
            </div>
            </div>
        )
    });

    return (
        <div className="col-8 bg-light rounded-3" >
            {getAllPeepsData}
        </div>
    );
};
DisplayPeeps.prototype = {
    _id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message:PropTypes.string.isRequired

}
export default DisplayPeeps;