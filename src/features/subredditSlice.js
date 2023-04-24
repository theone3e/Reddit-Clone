import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./postsSlice";

export const fetchSubreddits = createAsyncThunk(
    'subreddits/fetchSubreddits',
    async () => {
        const response = await fetch(`${API}/subreddits.json`);
        const json = await response.json();
        const newSubreddits = json.data.children.map((subreddit) => {
            const { banner, displayName, icon, public_description, title, url, subscribers} = subreddit.data;
            return { 
                bannerImg: banner,
                subreddit: displayName,
                icon: icon,
                description: public_description,
                subscribers: subscribers,
                title: title,
                url: url,
            };
        });
    newSubreddits.shift();
    return newSubreddits;
    }
);

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchSubreddits.pending]: (state) => { 
            state.status = 'loading';
        },
        [fetchSubreddits.fulfilled]: (state,action) => {
            state.status = 'success',
            state.subreddits = action.payload;
        },
        [fetchSubreddits.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    },
});


export default subredditsSlice.reducer;
export const selectAllSubreddits = (state) => state.subreddits.subreddits;
export const selectStatus = (state) => state.subreddits.status;