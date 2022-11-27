import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react'
import styles from './MyMessageItem_Style'
import { useNavigation } from '@react-navigation/native'
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import axios from 'axios';
import tokenService from '../../../services/token.service';
function MyMessagaItem ({avatar,name,time,message,type,owner,_id}) {
  const navigation = useNavigation();
  const accessToken = tokenService.getAccessToken();
  const hanldPress =()=>{
    navigation.navigate("ImageChat",{
      avatar:avatar,
      name:name,
      image: message,
    })
  }
  const [messIndex,setMessIndex] = useState(message);
  const roomState = useSelector(state => state.room);
 
  const hadelUnMessage = async  ()=> {
    var user = await axios
        .delete(
            `https://frozen-caverns-53350.herokuapp.com/api/rooms/${roomState._id}/messages/${_id}`,
            {
                headers: { authorization: accessToken },
            }
        )
        .then(() => {
            console.log("sucess");
            setMessIndex("Tin nhắn đã được gỡ");
        })
        .catch((err) => {
            console.log(err);
        });
  } 
    const hanldLongPress = ()=>{
      Alert.alert("Thông báo","Bạn muốn xóa tin nhắn",[
        {
          text: 'Thoát',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Xóa', onPress: hadelUnMessage },
      ]);
      console.log("_id:___",_id);
    }
  const [isModelIcon,setisModelIcon] = useState(true);
    return (
        <View style={styles.containerC}>
            <View style={styles.container}>
              <TouchableOpacity onLongPress={hanldLongPress} style={styles.container_Right}>
                  {(type=="image")? 
                  <TouchableOpacity onPress={hanldPress}>
                    {(messIndex=="Tin nhắn đã được gỡ")?<Text>Tin nhắn đã được gỡ</Text>: <Image style={{height:150,width:150,}} source={{uri:message}} />}
                  </TouchableOpacity> : (type=="unsend")? <Text style={{width:180,}}>Tin nhắn đã được gỡ</Text>:<Text style={{width:180,}}>{messIndex}</Text>}
                  <Text style={styles.container_Right_Time}>{time}</Text>
              </TouchableOpacity>

              <View style={styles.container_Left}>
              <Image style={styles.container_Left_Img} source={{uri:avatar}} />
              {(owner)? <Entypo name="key" size={18} color="#CDAD00" /> : <View></View>}
            </View>
          </View>
        </View>
    )
  }
export default MyMessagaItem