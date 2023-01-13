
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Headlines from "./Headlines";
import NewsImage from "./NewsImage";
const NewsHeadlines = ({ newsdata }) => {
    const newsHeadlines = newsdata.map(news => {
        const headline = news.fields.headline;
        const image = news.fields.thumbnail;
        const alttext = news.fields.byline;
        const newsId = news.id.replaceAll("/","-");
        return (<NavLink to={`/${newsId}`} className="allnews" key={news.id}>
            <NewsImage image={image} alt={alttext} />
            <Headlines headline={headline} />
        </NavLink>
        )
    });

    return (
        <main>
            {newsHeadlines}
        </main>
    );
};
NewsHeadlines.propType = {
    thumbnail: PropTypes.string.isRequired,
    byline: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    newsId : PropTypes.string.isRequired
}

export default NewsHeadlines;