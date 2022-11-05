import {configureStore} from '@reduxjs/toolkit'
import {userSlice} from '../redux/reducers/user/slice';
import { roomSlice } from '../redux/reducers/Room/slice';
import { infoSlice } from './reducers/Info/slice';
import 'localstorage-polyfill'; 

export const store  = configureStore({
    reducer:{
        user: userSlice.reducer,
        room: roomSlice.reducer,
        info: infoSlice.reducer,
    }
});

