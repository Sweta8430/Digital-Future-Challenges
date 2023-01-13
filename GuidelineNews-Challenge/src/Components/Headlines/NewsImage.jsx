import PropTypes from "prop-types"
const NewsImage = ({ image,alt}) => {
    return (
        <img className = "images" src={image} alt={alt} />
    );
};
NewsImage.propType = {
    thumbnail : PropTypes.string.isRequired
}
export default NewsImage;