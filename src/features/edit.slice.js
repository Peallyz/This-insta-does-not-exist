import { createSlice } from "@reduxjs/toolkit";

export const editSlice = createSlice({
    name: "edit",
    initialState: {
        open: false,
    },
    reducers: {
        setEditOpen: (state, action) => {
            state.open = action.payload;
        },
    },
});

export const { setEditOpen } = editSlice.actions;
export default editSlice.reducer;
