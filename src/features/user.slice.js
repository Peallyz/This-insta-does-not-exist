import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        data: null,
        dataOnline: null,
    },
    reducers: {
        setInitData: (state, action) => {
            state.data = action.payload;
        },
        setDataUpdate: (state, { payload }) => {
            state.dataOnline = payload;
        },
    },
});

export const { setInitData, setDataUpdate } = userSlice.actions;
export default userSlice.reducer;
