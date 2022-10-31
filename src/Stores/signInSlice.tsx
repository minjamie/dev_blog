import { createSlice } from "@reduxjs/toolkit";

const signIn = createSlice({
    name: "signIn",
    initialState: { active: false },
    reducers: {
        activeSignIn(state) {
            state.active ? (state.active = false) : (state.active = true);
        },
        openSignIn(state) {
            state.active = true;
        },
        closeSignIn(state) {
            state.active = false;
        },
    },
});
export default signIn;
export const { activeSignIn, openSignIn, closeSignIn } = signIn.actions;
