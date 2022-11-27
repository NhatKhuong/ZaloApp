import React, { useState } from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Image, TouchableHighlight  } from 'react-native'
import styles from './style_AddFriends'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';
import Footter from '../Footter/Footter';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { async } from '@firebase/util';
import infoAPI from '../../redux/reducers/Info/infoAPI';
import userAPI from '../../redux/reducers/user/userAPI';
import tokenService from '../../services/token.service';

function AddFriends() {
    const navigation = useNavigation();
    const [email,setEmail] = useState("");
    const dispatch = useDispatch();
    const userState = useSelector(state => state.user);
    let listRequest = userState.user.friendInvites || [];
    var countResult = 0;
    var countRequest = 0;
    const token = tokenService.getAccessToken();
    const [listResult, setListResult] = useState([]);
    const accessToken = userState.accessToken;
    const handelSearch =  async () => {
        const emailNew = email+`@gmail.com`
            try {
                var user = await axios(`https://frozen-caverns-53350.herokuapp.com/api/users/email/${emailNew}`,{
                    method: 'GET',
                    headers: { authorization: accessToken },
                });
                setListResult(user.data.result);
            } catch (error) {
                setListResult([]);
            }
       
    };

    function handelClick(e) {
        dispatch(
            infoAPI.updateInfo()({
                email: e.email,
                avatar: e.avatar,
                _id: e._id,
            })
        );
        navigation.navigate("FriendProfile",{
            isFriend: e.isFriend,
            email:e.email,
            _id:e.id,
        });
    }
    var countReq = 0;
    const Data = listRequest.map((e)=>{
        countReq++;
        return ({id:e.userId._id,name:e.userId.email,avt:e.userId.avatar});
    });
    function handlAccept(id) {
        axios
            .post(
                `https://frozen-caverns-53350.herokuapp.com/api/users/invites`,
                {
                    userId: id,
                },
                {
                    headers: { authorization: accessToken  },
                }
            )
            .then((r) => {
                console.log("done");
            })
            .catch((err) => {
                console.log(err);
            });
        dispatch(userAPI.deleteRequestAddFriend()(id));
        
        axios
            .get(`https://frozen-caverns-53350.herokuapp.com/api/rooms/users/${id}`, {
                headers: { authorization: accessToken },
            })
            .then((r) => {
                dispatch(userAPI.updateListRoomUI()(r.data));
                var user = userAPI.getUserInfo()(token);
                dispatch(user);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const renderItem = ({item}) =>{
        countRequest++;
        var imageItem = (item.avt == undefined)? "https://hinhgaixinh.com/wp-content/uploads/2021/12/bo-anh-girl-xinh-cap-2.jpg":item.avt;
        return  (
            <View key={countRequest} style={{alignItems:'center',display:'flex',flexDirection:'row',height:60,borderWidth:0.5,borderColor:'black'}}>
                        <View style={{display:'flex',flexDirection:'row',alignItems:'center',width:"70%"}}>
                            <View style={styles.itemFriend_avatar}>
                                    <Image
                                        style={styles.itemFriend_avatar_avatar}
                                        source={{
                                            uri: imageItem,
                                        }}
                                    />
                            </View>
                            <Text style={{fontSize:24,width:"70%"}}>{item.name}</Text>
                        </View>
                        <View style={{marginRight:20,}}>
                            <TouchableOpacity onPress={()=>handlAccept(item.id)} style={styles.buttonAcp}> 
                                <Text style={{fontSize:18,}}>Chấp nhận</Text>
                            </TouchableOpacity>
                        </View>
            </View>
        );
    }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerHeader}>
            <View  style={styles.containerIcon}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Contracts")} style={styles.button}>
                        <MaterialIcons 
                            name="keyboard-arrow-left"
                            size={32}
                            color="white"
                        />
                    </TouchableOpacity>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text}> Kết bạn mới</Text>
            </View>
        </View>
        <View style={styles.containerBody}>
            <View style={styles.containerBody_SearchFriend}>
                <Text style={{fontSize:24,marginLeft:10,marginTop:10,flex:0.2}}>Tìm kiếm bạn bè</Text>
                <View style={styles.containerBody_SearchFriend_Input}>
                    <TextInput onChangeText={x=>setEmail(x)} value={email} placeholder="Vui lòng nhập Email" style={{marginLeft:15,marginRight:15,flex:0.9,fontSize:22,borderBottomWidth:1,height:50,}}/>
                    <TouchableOpacity onPress={handelSearch}  style={styles.bottom} >
                        <AntDesign name="arrowright" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                {
                    listResult.map((e)=>{
                        countResult++;
                        var imageItem = (e.avatar == undefined)? "https://hinhgaixinh.com/wp-content/uploads/2021/12/bo-anh-girl-xinh-cap-2.jpg":e.avatar;
                        return (
                            <TouchableOpacity key={countResult} onPress={()=> handelClick(e)}  style={{flex:0.5,alignItems:'center',display:'flex',flexDirection:'row'}}>
                                <View style={styles.itemFriend_avatar}>
                                    <Image
                                    style={styles.itemFriend_avatar_avatar}
                                    source={{
                                        uri: imageItem,
                                    }}/>
                                </View>
                                <Text style={{fontSize:24}}>{e.email}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
            <View style={styles.containerBody_AcpFriends}>
                <Text style={{fontSize:24,marginLeft:10,marginTop:10,flex:0.2}}>Danh sách gởi lời mời kết bạn({countReq})</Text>
                <SwipeListView style={{flex:0.8,backgroundColor:"white"}} nestedScrollEnabled={true} data ={Data} renderItem={renderItem}  />
            </View>
        </View>
        <Footter/>
    </SafeAreaView>
  )
}

export default AddFriends