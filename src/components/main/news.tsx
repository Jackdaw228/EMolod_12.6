import { NewsItem } from "../../types/new";
import './style.css';

const NewsItemComponent = (props: NewsItem) => {
  return (
    <div className="news-item">
        <div>{props.time}</div>
        <div>{props.desc}</div><a href={props.link}> Read more</a>
    </div>
  );
};

export default NewsItemComponent;