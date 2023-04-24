import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: 'category',
    initialState: {
        defaultCategory: 'hot',
    },
    reducers: {
        changeCategory: (state, action) => {
            const { categoryName } = action.payload;
            state.defaultCategory = categoryName;
        },
    },
});

export const { changeCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
export const selectCategory = (state) => state.filter.selectCategory;