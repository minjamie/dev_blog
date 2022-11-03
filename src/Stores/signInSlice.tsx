import { createSlice } from "@reduxjs/toolkit";

const signIn = createSlice({
    name: "signIn",
    initialState: { active: false },
    reducers: {
        activeSign(state) {
            state.active ? (state.active = false) : (state.active = true);
        },
        openSign(state) {
            state.active = true;
        },
        closeSign(state) {
            state.active = false;
        },
    },
});
export default signIn;
export const { activeSign, openSign, closeSign } = signIn.actions;
