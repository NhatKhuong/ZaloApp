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
        logout: (state) => {
            return { ...initialState, is_login: false, accessToken: "" };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            userAPI.getUserInfo().fulfilled,
            (state, action) => {
                tokenService.setAccessToken(action.payload.accessToken);
                // tokenService.setRefreshToken(action.payload.accessToken);
                state.error = false;
                state.is_login = true;
                state.user = action.payload.user;
                state.rooms = action.payload.rooms;
                state.accessToken = action.payload.accessToken;  
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
        builder.addCase(
            userAPI.updateListRoomUI().fulfilled,
            (state, action) => {
                const newArray = [action.payload].concat(state.rooms);
                state.rooms = newArray;
            }
        );
        builder.addCase(userAPI.updateListRoomUI().rejected, (state) => {});

        builder.addCase(
            userAPI.updateListRequestAddFriend().fulfilled,
            (state, action) => {
                const result = {
                    _id: "",
                    user: {
                        userName: "",
                        avatar: action.payload.avatar ,
                        fullName: "",
                        email: action.payload.email ,
                        _id: action.payload._id,
                    },
                };
                state.listRequest?.push(result);
            }
        );
        builder.addCase(
            userAPI.updateListRequestAddFriend().rejected,
            (state) => {}
        );

        builder.addCase(
            userAPI.deleteRequestAddFriend().fulfilled,
            (state, action) => {
                var restult = state.listRequest?.filter(function (e) {
                    return e.user._id !== action.payload;
                });
                state.listRequest = restult;
            }
        );
        builder.addCase(
            userAPI.deleteRequestAddFriend().rejected,
            (state) => {}
        );
        builder.addCase(
            userAPI.updateRoomByIdUI().fulfilled,
            (state, action) => {
               for(var i=0;i<state.rooms.length;i++){
                if(state.rooms[i]._id === action.payload._id){
                    state.rooms[i]._id = action.payload._id;
                    state.rooms[i].name = action.payload.name;
                    state.rooms[i].avatar = action.payload.avatar;
                }
               }
            }
        );
        builder.addCase(
            userAPI.updateRoomByIdUI().rejected,
            (state) => {}
        );
    },
});
export const { logout } = userSlice.actions;