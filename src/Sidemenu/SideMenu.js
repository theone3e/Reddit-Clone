import React, { useState, useEffect } from "react";
import './SideMenu.css';
import { useDispatch, useSelector } from "react-redux";
import PostItem from "../mainframe/PostItem";
import Article from "../components/category/Article";
import Posts from "../mainframe/Posts";

export default function SideMenu() {
    // const [articles, setArticles] = useState([]);
    // const [subreddit, setSubreddit] = useState();

    // useEffect(() => {
    //     fetch("https://www.reddit.com/r/webdev.json").then(result => {
    //         if(result.status != 200){
    //             alert("Error in results status");
    //             return;
    //         }
    //         result.json().then (data => {
    //             if (data != null) {
    //                 setArticles(data.data.children);
    //             }
    //         });
    //     })
    // }, [subreddit]);



    const menu = [
        {to: '/r/popular', text: "Popular"},
        {to: '/r/all', text: "All"},
        {to: '/r/random', text: "Random"},
    ]
    const subreddits = [
        "askreddit",
        "worldnews",
        "videos",
        "funny",
        "todayilearned",
        "pics",
        "gaming",
        "movies",
        "news",
        "gifs",
        "aww",
        "mildlyinteresting",
        "showerthoughts",
        "television",
        "jokes",
        "science",
        "soccer",
        "internetisbeautiful",
        "dataisbeautiful",        
    ]
    return (
        <div className="sidemenu">
            <div className="sidemenu-logo">
                <img src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png" />    
            </div>
            <div className="sidemenu-searchbar">
                {/* value={subreddit} 
                    onChange={e=> setArticles(e.target.value)}
                in the <input>*/}
                <input type="text" name="searchbar"  className="searchbar"  placeholder="Search subreddits" />
                <i className="fas fa-search"> </i> 
            </div>

            {/* not sure, need to check */}
            {/* <div className="searchResults">
                {
                    (articles !=null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''
                }
            </div> */}

            <div className="sidemenu-links">
                
                <ul className="sidemenu-menu">
                    {menu.map(menu => (
                        <li> <a href={menu.to}>{menu.text}</a> </li>
                    ))}
                </ul>
                <hr />
                <h2> Popular subreddits </h2>
                <ul className="sidemenu-subreddits">
                    {subreddits.map(subreddit => (
                        <li> <a href={`/r/${subreddit}`}> {subreddit} </a></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}