import {configureStore} from '@reduxjs/toolkit'
import {userSlice} from '../redux/reducers/user/slice';
import { roomSlice } from '../redux/reducers/Room/slice';
import 'localstorage-polyfill'; 

export const store  = configureStore({
    reducer:{
        user: userSlice.reducer,
        room: roomSlice.reducer,
    }
});


// export type RootState = ReturnType<typeof store.getState>;