import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const API = 'https://www.reddit.com';

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (payload) => {
        const { subreddit } = payload;
        const response = await fetch(`${API}/r/${subreddit}.json`);
        const json = await response.json();
            const newPosts = json.data.children.map((post) => {
            const {subredditName, author, comments_num, title, id} = post.data;
            const text = post.data.selftext ? post.data.selftext : null;
            let image = post.data.url;
            if (image.includes('.jpg') || image.includes('.png') || image.includes('.jpeg')) {
            } else {
                image = null;
                }
            return{
                author: author,
                subreddit: subredditName,
                comments_num: comments_num,
                title: title,
                id: id,
                text: text,
                image: image,
            };
        });
        return newPosts;
    });

    export const fetchPostsOnSearchTerm = createAsyncThunk(
        'posts/fetchPostsOnSearchTerm',
        async (searchTerm) => { 
            const response = await fetch(`${API}/search.json?q=${searchTerm}`);
            const json = await response.json();
            const newPosts = json.data.children.map((post) => {
                const {subredditName, author, comments_num, title, id} = post.data;
                const text = post.data.selftext ? post.data.selftext : null;
                let image = post.data.url;
                if (image.includes('.jpg') || image.includes('.png') || image.includes('.jpeg')) {
                } else {
                    image = null;
                    }
                return{
                    author: author,
                    subreddit: subredditName,
                    comments_num: comments_num,
                    title: title,
                    id: id,
                    text: text,
                    image: image,
                };
            })
            return newPosts;
        }
    );

    const postsSlice = createSlice({
        name: 'posts',
        initialState:{
            posts: [],
            status:  'idle',
            error: null,
        },
        reducers: {},
        extraReducers(builder) {
            builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'success';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchPostsOnSearchTerm.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPostsOnSearchTerm.fulfilled, (state, action) => {
                state.status = 'success';
                state.posts = action.payload;
            })
            .addCase(fetchPostsOnSearchTerm.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
        },
    });

    export default postsSlice.reducer;
    export const selectAllPosts = (state) => state.posts.posts;
    export const selectStatus = (state) => state.posts.status;