import React, {useEffect, useState } from "react";
import { createSlice } from "@reduxjs/toolkit";
import PostItem from "./PostItem";
import './Posts.css';
import Article from "../components/category/Article";
import SideMenu from "../Sidemenu/SideMenu";

export default function Posts() {

    // copied the example from sidemenu.js
    const [articles, setArticles] = useState([]);
    const [subreddit, setSubreddit] = useState();
    const searchdit = SideMenu.searchbar;

    useEffect(() => {
        // fetch("https://www.reddit.com/r/" + subreddit + ".json").then(result => {
            //need to fix the subreddit / searchdit variable to properly reflect change and be used 
            // to search and view subreddits from the searchbar
        fetch("https://www.reddit.com/r/" + 'popular' + ".json").then(result => {
            if(result.status != 200){
                alert("Error in results status");
                return;
            }
            result.json().then (data => {
                if (data != null) {
                    setArticles(data.data.children);
                }
            });
        })
    }, [subreddit]);

    const posts = [
        {
            upvotes: "369",
            image: "https://animecorner.me/wp-content/uploads/2022/10/mieruko-chan-manga-2-million.jpg", //link
            title: "mieruko-chan",
            user: "miko",
            subreddit: "manga",
            commentsNum: "125", //all fake info, to be removed later
        },
        {
            upvotes: "123",
            image: "https://animecorner.me/wp-content/uploads/2022/10/mieruko-chan-manga-2-million.jpg", //link
            title: "mieruko-chan",
            user: "miko",
            subreddit: "manga",
            commentsNum: "85",
        }
    ]

    return(

        <div className="searchResults">
                {
                    (articles !=null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''
                }
            </div>

        // <div className="posts">
        //     {posts.map(post =>(
        //         <PostItem post={post} />
        //     ))}
                  
        // </div>
        
    );
}


export const postsSlice = createSlice ({
    name: 'posts',
    initialState: {
        posts: {},
        reducers: {
            addPost: (state, action) => {
                const {id} = action.payload;
                state.posts[id] = action.payload;
            }
        }
    }

}) 

