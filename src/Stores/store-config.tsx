import { configureStore } from "@reduxjs/toolkit";
import search from "./searchSlice";
import category from "./categorySlice";
import signIn from "./signInSlice";

const store = configureStore({
    reducer: {
        search: search.reducer,
        category: category.reducer,
        signIn: signIn.reducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
