import { ScrollView, Text, View } from 'react-native';
import React, { Component } from 'react';
import styles from './Body_Style';
import MessageItem from './MessageItem';
import MyMessagaItem from './MyMessagaItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
function Body ({id}) {
  const roomState = useSelector(state => state.room);
  const userState = useSelector(state => state.user);
  const dispatch = useDispatch();
  var count = 0;
    return (
      <ScrollView style={styles.container}>
        {
          
          roomState.lstChat.map((e)=>{
            count++;
            // console.log(e);
            const isMyMessage = e.user._id === userState.user._id ? true : false;
            if(isMyMessage){
              return <MyMessagaItem 
              key={count}
              avatar={e.user.avatar}
              name={e.user.name}
              time={e.createdAt}
              message={e.content}
              type={e.type} 
              
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
              />
            }
          })
        }
      </ScrollView>
    )
  }
export default Body