import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
    name: "search",
    initialState: { active: false },
    reducers: {
        activeSearch(state) {
            state.active ? (state.active = false) : (state.active = true);
        },
        closeSearch(state) {
            state.active = false;
        },
    },
});
export default search;
export const { activeSearch, closeSearch } = search.actions;
