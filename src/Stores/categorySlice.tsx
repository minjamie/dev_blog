import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
    name: "category",
    initialState: { active: false },
    reducers: {
        activeCategory(state) {
            state.active ? (state.active = false) : (state.active = true);
        },
        closeCategory(state) {
            state.active = false;
        },
    },
});
export default search;
export const { activeCategory, closeCategory } = search.actions;
