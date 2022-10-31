import { createSlice } from "@reduxjs/toolkit";

const category = createSlice({
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
export default category;
export const { activeCategory, closeCategory } = category.actions;
