import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
    name: "search",
    initialState: { active: false },
    reducers: {
        activeSearch(state) {
            console.log(state.active);
            state.active ? (state.active = false) : (state.active = true);
        },
    },
});
export default search;
export const { activeSearch } = search.actions;
