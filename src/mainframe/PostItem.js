import { React } from "react";
import './PostItem.css';

export default function PostItem(props) {
    const { title, upvotes, image, user, subreddit, commentsNum } = props.post;
    return (
        <div className="post">
            <div className="post-likes">
                <i className="fas fa-caret-up"></i>
                    <span> {upvotes} </span>
                <i className="fas fa-caret-down"></i>
            </div>
            <div className="post-whole">
            <div className="post-media">
                <img src={image} />
            </div>
            <div className="post-info">
                <div className="post-title">
                <a href={`${subreddit}/${title}`}> {title} </a>
                </div>
                <span className="post-userDetails">
                    submitted by <a href={`/u/${user}`}>{user} </a>
                    to the <a href={`/r/${subreddit}`}>{subreddit}</a> subreddit
                </span>
                <p className="post-info">
                    {commentsNum} comments | share | save | hide | report
                </p>
            </div>
            </div>
        </div>
    )
}