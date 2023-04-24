import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import PostItem from "./PostItem";
import './Posts.css';

export default function Posts() {
    const posts = [
        {
            upvotes: "420", //number
            image: "https://animecorner.me/wp-content/uploads/2022/10/mieruko-chan-manga-2-million.jpg", //link
            title: "mieruko-chan",
            user: "miko",
            subreddit: "manga",
            commentsNum: "69",
        },
        {
            upvotes: "420", //number
            image: "https://animecorner.me/wp-content/uploads/2022/10/mieruko-chan-manga-2-million.jpg", //link
            title: "mieruko-chan",
            user: "miko",
            subreddit: "manga",
            commentsNum: "69",
        }
    ]

    return(
        <div className="posts">
            {posts.map(post =>(
                <PostItem post={post} />
            ))}
                  
        </div>
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

