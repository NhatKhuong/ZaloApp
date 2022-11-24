import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import styles from './MessageItem_Style'
import { useNavigation } from '@react-navigation/native';

function MessageItem ({avatar,name,time,message,type}) {
<<<<<<< HEAD
  const navigation = useNavigation();
  const hanldPress =()=>{
    navigation.navigate("ImageChat",{
      avatar:avatar,
      name:name,
      image: message,
    })
  }
=======
  
>>>>>>> long
    return (
      <View style={styles.container}>
        <View style={styles.container_Left}>
            <Image style={styles.container_Left_Img} source={{uri:avatar}} />
        </View>
        <View style={styles.container_Right}>
<<<<<<< HEAD
            <Text style={{fontSize:17,color:'#CC9933'}}>{name}</Text>
            {(type=="image")? <TouchableOpacity onPress={hanldPress}>
                <Image style={{height:200,width:200,}} source={{uri:message}} />
                </TouchableOpacity> : <Text style={styles.container_Right_Message}>{message}</Text>}
=======
            {(type=="image")? <Image style={{height:200,width:200,}} source={{uri:message}}/> : <Text style={styles.container_Right_Message}>{message}</Text>}
>>>>>>> long
            <Text style={styles.container_Right_Time}>{time}</Text>
        </View>
      </View>
    )
  }

export default MessageItem