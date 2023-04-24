import React, { useEffect } from "react";
import './SideMenu.css';
import { useDispatch, useSelector } from "react-redux";


export default function SideMenu() {
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
                <input type="text" name="searchbar" placeholder="Search subreddits" />
                <i className="fas fa-search"> </i> 
            </div>
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