import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import styles from './MyMessageItem_Style'
import { useNavigation } from '@react-navigation/native'
function MyMessagaItem ({avatar,name,time,message,type}) {
  const navigation = useNavigation();
  const hanldPress =()=>{
    navigation.navigate("ImageChat",{
      avatar:avatar,
      name:name,
      image: message,
    })
  }
    return (
        <View style={styles.container}>
            <View style={styles.container_Right}>
                {(type=="image")? 
                <TouchableOpacity onPress={hanldPress}>
                <Image style={{height:200,width:200,}} source={{uri:message}} />
                </TouchableOpacity> : <Text style={styles.container_Right_Message}>{message}</Text>}
                <Text style={styles.container_Right_Time}>{time}</Text>
            </View>
      </View>
    )
  }
export default MyMessagaItem