import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import PostItem from "./PostItem";
import './Posts.css';

export default function Posts() {
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

