import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const category = createSlice({
    name: "category",
    initialState: [
        { id: 0, name: "Story" },
        { id: 1, name: "Tech" },
        { id: 2, name: "Culture" },
        { id: 3, name: "Sign-Up" },
    ],
    reducers: {},
});
export default category;
export const {} = category.actions;
