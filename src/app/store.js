import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "../features/page.slice";
import editReducer from "../features/edit.slice";
import userReducer from "../features/user.slice";
import pictureReducer from "../features/picture.slice";

export default configureStore({
    reducer: {
        page: pageReducer,
        edit: editReducer,
        user: userReducer,
        pic: pictureReducer,
    },
});
