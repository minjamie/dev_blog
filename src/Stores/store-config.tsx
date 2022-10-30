import { configureStore } from "@reduxjs/toolkit";
import search from "./searchSlice";
import category from "./categorySlice";
const store = configureStore({
    reducer: {
        search: search.reducer,
        category: category.reducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
