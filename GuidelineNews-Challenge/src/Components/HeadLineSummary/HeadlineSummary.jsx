
import Headlines from "../Headlines/Headlines";
import NewsImage from "../Headlines/NewsImage";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

const HeadlineSummary = ({ newsdata }) => {
    const { id } = useParams();
    const newsSummary = newsdata.map(news => {
        const newsId = news.id.replaceAll("/","-");
        if (id === newsId) {
            const headline = news.fields.headline;
            const image = news.fields.thumbnail;
            const summary = news.fields.bodyText;
            const webUrl = news.webUrl;
            const alttext = news.fields.byline;

            return (
                <div key="{news.id}">
                  <div className="allnews">
                        <NewsImage image={image} alt={alttext} className="headlines"/>
                        <a href={webUrl} className = "link" target="_blank" rel="noreferrer noopener">
                        <Headlines headline={headline} className="headlines" />
                        </a>
                        <p data-testid="testdata" className="summary">{summary}</p>
                    </div>
                    <div>
                        <Link to = "/"className="goback" replace>Go Back</Link>
                   </div>
                </div>

            )
        }
        return ''
    })


    return (
        <main>
          {newsSummary } 
        </main>
    );
};
HeadlineSummary.propType = {
    thumbnail: PropTypes.string.isRequired,
    byline: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    newsId: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    webUrl:PropTypes.string.isRequired
}
export default HeadlineSummary;