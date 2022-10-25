import { configureStore } from "@reduxjs/toolkit";
import search from "./searchSlice";
const store = configureStore({
    reducer: {
        search: search.reducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
