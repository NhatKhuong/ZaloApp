import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import styles from './MyMessageItem_Style'
import { useNavigation } from '@react-navigation/native'
import { AntDesign, Entypo } from '@expo/vector-icons';
function MyMessagaItem ({avatar,name,time,message,type,owner}) {
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
                <Image style={{height:150,width:150,}} source={{uri:message}} />
                </TouchableOpacity> : <Text style={{width:180,}}>{message}</Text>}
                <Text style={styles.container_Right_Time}>{time}</Text>
            </View>

            <View style={styles.container_Left}>
            <Image style={styles.container_Left_Img} source={{uri:avatar}} />
            {(owner)? <Entypo name="key" size={18} color="#CDAD00" /> : <View></View>}
          </View>
          
      </View>
    )
  }
export default MyMessagaItem