import { createSlice } from "@reduxjs/toolkit";
import userAPI from "./userAPI";
import tokenService from "../../../services/token.service";
import 'localstorage-polyfill'; 

const initialState = {
    user: {
        userName: "",
        avatar: "",
        fullName: "",
        email: "",
        _id: "",
    },
    rooms: [],
    error: false,
    is_login: tokenService.getAccessToken() !== null,
    accessToken: tokenService.getAccessToken() || "",
} ;

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //
    },
    extraReducers: (builder) => {
        builder.addCase(
            userAPI.getUserInfo().fulfilled,
            (state, action) => {
                console.log(state);  
                tokenService.setAccessToken(action.payload.accessToken);
                // tokenService.setRefreshToken(action.payload.accessToken);
                state.error = false;
                state.is_login = true;
                state.user = action.payload.user;
                state.rooms = action.payload.rooms;
                state.accessToken = action.payload.accessToken;  
                console.log(state);           
            }
        );
        builder.addCase(userAPI.getUserInfo().rejected, (state) => {
            state.error = true;
            state.is_login = false;
        });

        builder.addCase(
            userAPI.updateListChatForUserNoOnScreen().fulfilled,
            (state, action) => {
                console.log(action.payload);
                console.log(state.rooms[0].messages[0].content);
                console.log(action.payload.data.message.content);
                console.log(action.payload.rooms);
                for (var i = 0; i <action.payload.rooms.length; i++) {
                    console.log(action.payload.rooms[i]._id);
                    console.log(action.payload.roomId);
                    console.log("4");
                    
                    
                    
                    if (action.payload.rooms[i]._id == action.payload.data.roomId) {
                        console.log(state.rooms[i].messages[0].content);
                        console.log(action.payload.data.message.content);
                        
                        state.rooms[i].messages[0].content =
                            action.payload.data.message.content;
                    }
                }
            }
        );
        builder.addCase(
            userAPI.updateListChatForUserNoOnScreen().rejected,
            (state) => {}
        );
    },
});
