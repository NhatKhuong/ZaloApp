import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react'
import styles from './Footter_Chat_Style'
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import io, { Socket } from "socket.io-client";
import { useDispatch } from 'react-redux';
import roomAPI from "../../../redux/reducers/Room/roomAPI";
import { useSelector } from 'react-redux';
function Footter_Chat (){
  const dispatch = useDispatch();
  const [heightKey,setHeightKey] = useState("6%");
  const [text,setText] = useState("");
  const roomState = useSelector(state => state.room);
  const userState = useSelector(state => state.user)
  const hanldPress= ()=>{
      setHeightKey("36%")
  }
  const hanldPressOut  = ()=>{
    setHeightKey("6%")
  }
  const newSocket = io("https://frozen-caverns-53350.herokuapp.com", {
        query: {
            // token: useState.accessToken,
        },
    });
  const sendMessageSocket = () => {
      console.log("sendMessage");

      newSocket.emit("client-send-message", {
          token: userState.accessToken,
          roomId: roomState._id,
          content: text,
          type: "text",
      });
  };
    return (
      <KeyboardAvoidingView style={[styles.container,{height:heightKey}]}>
        <View style={styles.foorter_left}>
          <MaterialIcons name="insert-emoticon" size={24} color="#0091ff" />
          <TextInput onFocus={hanldPress} onBlur={hanldPressOut} value={text} onChangeText={x=>setText(x)} style={styles.input_Message} placeholder='Nhập tin nhắn...' ></TextInput>
        </View>
        <View style={styles.footer_Right}>
          <View>
            <MaterialIcons name="keyboard-voice" size={24} color="#0091ff" />
          </View>
          <View>
            <SimpleLineIcons name="picture" size={24} color="#0091ff" />
          </View>
          <TouchableOpacity onPress={()=>{
            console.log(text)
            sendMessageSocket();
            dispatch(roomAPI.updateSentMessage()(text));
            console.log("nhan enter");
            setText("");
          }}>
            <FontAwesome name="send" size={24} color="#0091ff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
export default Footter_Chat