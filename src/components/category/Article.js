import React from 'react';
import Posts from '../../mainframe/Posts';

//to check whether searchbar can be connected.

function Article(props) {
    return (
        <article>
            <a href={'https://reddit.com' + props.article.permalink} target="_blank">
                <h3> {props.article.title} </h3>
            </a>
        </article>
    );
}

export default Article;