import { ScrollView, Text, View } from 'react-native';
import React, { Component } from 'react';
import styles from './Body_Style';
import MessageItem from './MessageItem';
import MyMessagaItem from './MyMessagaItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ScrollToBottom  from 'react-scroll-to-bottom';
function Body ({id}) {
  const roomState = useSelector(state => state.room);
  const userState = useSelector(state => state.user);
  const dispatch = useDispatch();
  var count = 0;
    return (
      <ScrollView  style={styles.container}>
        {
          
          roomState.lstChat.map((e)=>{
            count++;
            // console.log(e);
            const isMyMessage = e.user._id === userState.user._id ? true : false;
            const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
            var isCheckImage = false;
            console.log("_______________________________________");
            console.log(e.content);
            const message = e.content;
            if(regex.test(message)){
              isCheckImage = true;
            }
            else{
              isCheckImage = false;
            }
            console.log("_______________________________________");
            if(isMyMessage){
              return <MyMessagaItem 
              key={count}
              avatar={e.user.avatar}
              name={e.user.name}
              time={e.createdAt}
              message={e.content}
              type={e.type} 
              check = {isCheckImage}
              />
            }
            else{
              return <MessageItem 
              key={count}
              avatar={e.user.avatar}
              name={e.user.name}
              time={e.createdAt}
              message={e.content}
              type={e.type}
              check = {isCheckImage}
              />
            }
          })
        }
      </ScrollView>
    )
  }
export default Body