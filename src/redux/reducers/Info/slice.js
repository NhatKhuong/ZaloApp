import { createSlice } from "@reduxjs/toolkit";
import infoAPI from "./infoAPI";



const initialState = {
    email: "",
    avatar: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
    _id: "",
} ;

export const infoSlice = createSlice({
    name: "info",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            infoAPI.updateInfo().fulfilled,
            (state, action) => {
                state.email = action.payload.email;
                state._id = action.payload._id;
                if (action.payload.avatar) {
                    state.avatar = action.payload.avatar;
                }
            }
        );
        builder.addCase(infoAPI.updateInfo().rejected, (state) => {});
    },
});
