import PropTypes from "prop-types"
const Headlines = ({headline}) => {
    return (
        <h2 data-testid="testdata" className="headlines">
            {headline}
        </h2>
    );
};
Headlines.propType = {
    headline : PropTypes.string.isRequired
}
export default Headlines;