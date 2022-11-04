import React from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Image, TouchableHighlight  } from 'react-native'
import styles from './style_Contracts'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-navigation';
import Footter from '../Footter/Footter';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import roomAPI from '../../redux/reducers/Room/roomAPI';
function Contracts() {
  const navigation = useNavigation();
//   const hanldPress = ()=>{
//     navigation.navigate("ScannerQR");
//   }
const roomState = useSelector(state => state.room);
    const userState = useSelector(state => state.user)
    const listRoom = userState.rooms;
    const accessToken = userState.accessToken;
    const dispatch = useDispatch();
    const Data = listRoom.map((e)=>{
        return ({id:e._id,name:e.name,image:e.avatar,lastMessage:e.messages[0]?.content,time:(e.createdAt)});
    });
    const renderItem = ({item}) =>{
        return  <TouchableHighlight underlayColor={'#E6E6FA'} style={styles.touchHightLight} onPress={()=>{
            const id = item.id;
            dispatch(roomAPI.getListChat()({ accessToken, id }));
            dispatch(roomAPI.saveRoomId()(id))
            navigation.navigate("ChatWindow",{id:item.id,name:item.name,image:item.image,lastMessage:item.lastMessage,time:item.time})
        }}>
                <View style={styles.containerItem} >
                    <View style={styles.itemFriend_info}>
                        <View style={styles.itemFriend_avatar}>
                            <Image
                                style={styles.itemFriend_avatar_avatar}
                                source={{
                                    uri: `${item.image}`,
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.itemFriend_right}>
                       <Text style={{fontSize:20,}}>{item.name}</Text>
                    </View>
                </View>
        </TouchableHighlight>
    };
    
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerHeader}>
            <View style={styles.containerText}>
                <Text style={styles.text}> Danh sách bạn bè</Text>
            </View>
            <View style={styles.containerIconRight}>
                <TouchableOpacity onPress={()=>{ navigation.navigate("AddFriends")}} style={styles.containerIconAdd}>
                    <Ionicons name="md-add" size={30} color="white" />
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.containerBody}>
            <View style={{flex:0.2,marginLeft:20,marginRight:20,marginTop:10,}}>
                <TouchableOpacity onPress={()=>{ navigation.navigate("AddFriends")}} style={styles.containerBody_Row}>
                    <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1057/1057240.png'}} style={{height:35,width:35,}}></Image>
                    <Text style={{fontSize:18,marginLeft:20,}}>Thêm bạn bè mới</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerBody_Row}>
                    <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/3820/3820188.png'}} style={{height:35,width:35,marginBottom:3,}}></Image>
                    <Text style={{fontSize:18,marginLeft:20,}}>Thêm bạn nhóm mới</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:0.8, backgroundColor:"white"}}>
                <SwipeListView  nestedScrollEnabled={true} data ={Data} renderItem={renderItem} />
            </View>
            
        </View>
        <Footter/>
    </SafeAreaView>
  )
}

export default Contracts