import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name: "page",
    initialState: {
        current: 1,
        previous: 1,
    },
    reducers: {
        setCurrentPage: (state, action) => {
            state.current = action.payload;
        },
        setPreviousPage: (state, action) => {
            state.previous = action.payload;
        },
    },
});

export const { setCurrentPage, setPreviousPage } = pageSlice.actions;
export default pageSlice.reducer;
