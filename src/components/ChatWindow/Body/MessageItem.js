import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import styles from './MessageItem_Style'
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Entypo } from '@expo/vector-icons';

function MessageItem ({avatar,name,time,message,type,owner}) {
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
        <View style={{alignItems:'flex-end',justifyContent:'flex-end'}}>
            <Image style={styles.container_Left_Img} source={{uri:avatar}} />
            {(owner)? <Entypo name="key" size={18} color="#CDAD00" /> : <View></View>}
        </View>
        <View style={styles.container_Right}>
            <Text style={{fontSize:17,color:'#CC9933'}}>{name}</Text>
            {(type=="image")? <TouchableOpacity onPress={hanldPress}>
                <Image style={{height:150,width:150,}} source={{uri:message}} />
                </TouchableOpacity> : (type=="unsend")?<Text style={{width:180,}}>Tin nhắn đã được thu hồi</Text>: <Text style={{width:180,}}>{message}</Text>}
            <Text style={styles.container_Right_Time}>{time}</Text>
        </View>
      </View>
    )
  }

export default MessageItem