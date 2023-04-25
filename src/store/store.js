import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/postsSlice';
import subredditReducer from '../features/subredditSlice';
import searchReducer from '../features/searchSlice';
import categoryReducer from '../features/categoriesSlice';

export default configureStore({
    reducer: {
        posts: postReducer,
        search: searchReducer,
        subreddits: subredditReducer,
        category: categoryReducer,
    },
});