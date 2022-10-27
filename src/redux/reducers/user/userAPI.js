import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../../services/auth.service";

class UserAPI {
    getUserInfo() {
        return createAsyncThunk("user/get-user-info", async (data, thunkAPI) => {
            const result = await authService.login(data);
            if(result.status === 200) {
                const userResult =  result.data;
                userResult.accessToken = data;
                return userResult;
            } 
            return thunkAPI.rejectWithValue("login_fail")
        });
    }

    updateListChatForUserNoOnScreen(){
        return createAsyncThunk("room/update-list-chat-for-userNoOnScreen", async (data, thunkAPI) => {
            return data;

        });
    }
}

export default new UserAPI();
