import { ScrollView, Text, View } from 'react-native';
import React, { Component } from 'react';
import styles from './Body_Style';
import MessageItem from './MessageItem';
import MyMessagaItem from './MyMessagaItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import roomAPI from "../../../redux/reducers/Room/roomAPI";
function Body ({id}) {
  const roomState = useSelector(state => state.room);
  const userState = useSelector(state => state.user);
  const accessToken = userState.accessToken;
  const dispatch = useDispatch();
  const showRoom = () => {
    dispatch(roomAPI.getListChat()({ accessToken, id }));
    dispatch(roomAPI.saveRoomId()(id))
};
    return (
      <ScrollView style={styles.container}>
      </ScrollView>
    )
  }
export default Body