import { Image, Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from './MessageItem_Style'

function MessageItem ({avatar,name,time,message,type}) {
  
    return (
      <View style={styles.container}>
        <View style={styles.container_Left}>
            <Image style={styles.container_Left_Img} source={{uri:avatar}} />
        </View>
        <View style={styles.container_Right}>
            {(type=="image")? <Image style={{height:200,width:200,}} source={{uri:message}}/> : <Text style={styles.container_Right_Message}>{message}</Text>}
            <Text style={styles.container_Right_Time}>{time}</Text>
        </View>
      </View>
    )
  }

export default MessageItem