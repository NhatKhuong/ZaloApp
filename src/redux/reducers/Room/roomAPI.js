import { createAsyncThunk } from "@reduxjs/toolkit";
import businessService from "../../../services/business.service";

class RoomAPI {
  getListChat() {
    return createAsyncThunk(
      "room/get-list-chat",
      async (data, thunkAPI) => {
        const { accessToken, id } = data;
        const result = await businessService.getListChat(accessToken, id);
        if (result.status === 200) return result.data;
        return thunkAPI.rejectWithValue("login_fail");
      }
    );
  }
  getListFile() {
    return createAsyncThunk(
      "romm/get-list-file",
      async (data, thunkAPI) => {
        const { accessToken } = data;
        const result = await businessService.getListFile(data);
        if (result.status === 200) return result.data;
        return thunkAPI.rejectWithValue("login_fail");
      }
    );
  }
  getListPic() {
    return createAsyncThunk(
      "romm/get-list-pic",
      async (data, thunkAPI) => {
        const { accessToken } = data;
        const result = await businessService.getListPic(data);
        if (result.status === 200) return result.data;
        return thunkAPI.rejectWithValue("login_fail");
      }
    );
  }
  updateListChat() {
    return createAsyncThunk(
      "room/update-list-chat",
      async (data, thunkAPI) => {
        return data

        });
    }
    
    saveRoomId(){
        return createAsyncThunk("room/save-room-id", async (data, thunkAPI) => {
            return data;
            
        });
    }
  updateSentMessage() {
    return createAsyncThunk("room/update-send-message",async (data, thunkAPI) => {
        console.log(data);
        return data;
      }
    );
  }
}

export default new RoomAPI();
