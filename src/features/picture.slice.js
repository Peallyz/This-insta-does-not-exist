import { createSlice } from "@reduxjs/toolkit";

export const pictureSlice = createSlice({
    name: "pic",
    initialState: {
        img: [],
        like: [],
        comment: [],
    },
    reducers: {
        setImgData: (state, { payload }) => {
            state.img = payload;
        },
        setLikeData: (state, { payload }) => {
            state.like = payload;
        },
        setCommentData: (state, { payload }) => {
            state.comment = payload;
        },
    },
});

export const { setImgData, setLikeData, setCommentData } = pictureSlice.actions;
export default pictureSlice.reducer;
