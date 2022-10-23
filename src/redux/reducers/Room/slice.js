import { createSlice } from "@reduxjs/toolkit";
import roomAPI from "./roomAPI";

const initialState = {
    lstChat: [],
    lstFile: [],
    lstPic: [],
    _id: "",
    messageSent:"",
} ;

export const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(
            roomAPI.getListChat().fulfilled,
            (state, action) => {
                state.lstChat = action.payload;
            }
        );
        builder.addCase(roomAPI.getListChat().rejected, (state) => {});

        builder.addCase(
            roomAPI.getListFile().fulfilled,
            (state, action) => {
                state.lstFile = action.payload;
            }
        );
        builder.addCase(roomAPI.getListFile().rejected, (state) => {});

        builder.addCase(
            roomAPI.getListPic().fulfilled,
            (state, action) => {
                state.lstPic = action.payload;
            }
        );
        builder.addCase(roomAPI.getListPic().rejected, (state) => {});

        builder.addCase(
            roomAPI.updateListChat().fulfilled,
            (state, action) => {
                console.log(action.payload);
                
                state.lstChat?.push(action.payload.message)
            }
        );
        builder.addCase(roomAPI.updateListChat().rejected, (state) => {});

        builder.addCase(
            roomAPI.saveRoomId().fulfilled,
            (state, action) => {
                state._id = action.payload
                console.log(action.payload);
                
                
            }
        );
        builder.addCase(roomAPI.saveRoomId().rejected, (state) => {});

        builder.addCase(
            roomAPI.updateSentMessage().fulfilled,
            (state, action) => {
                state.messageSent = action.payload
            }
        );
        builder.addCase(roomAPI.updateSentMessage().rejected, (state) => {});
    }
});
