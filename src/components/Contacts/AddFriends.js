import React, { useState } from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Image, TouchableHighlight  } from 'react-native'
import styles from './style_AddFriends'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';
import Footter from '../Footter/Footter';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useNavigation } from '@react-navigation/native';
function AddFriends() {
    const navigation = useNavigation();
    const [email,setEmail] = useState("");
    const Data = [
        {id:1,name:"Tran Tan Phuoc", avt:"https://cdn-icons-png.flaticon.com/512/3820/3820188.png"},
        {id:2,name:"Tran Tan A", avt:"https://cdn-icons-png.flaticon.com/512/3820/3820188.png"},
        {id:3,name:"Tran Tan B", avt:"https://cdn-icons-png.flaticon.com/512/3820/3820188.png"},
        {id:4,name:"Tran Tan C", avt:"https://cdn-icons-png.flaticon.com/512/3820/3820188.png"},
        {id:5,name:"Tran Tan D", avt:"https://cdn-icons-png.flaticon.com/512/3820/3820188.png"},
        {id:6,name:"Tran Tan D", avt:"https://cdn-icons-png.flaticon.com/512/3820/3820188.png"},
        {id:7,name:"Tran Tan D", avt:"https://cdn-icons-png.flaticon.com/512/3820/3820188.png"},
        {id:8,name:"Tran Tan D", avt:"https://cdn-icons-png.flaticon.com/512/3820/3820188.png"},
        {id:9,name:"Tran Tan D", avt:"https://cdn-icons-png.flaticon.com/512/3820/3820188.png"},
        {id:10,name:"Tran Tan D", avt:"https://cdn-icons-png.flaticon.com/512/3820/3820188.png"},
        {id:11,name:"Tran Tan Ddfughdufghudfgyhufdgyudf@gmail.com", avt:"https://cdn-icons-png.flaticon.com/512/3820/3820188.png"},
    ];
    const renderItem = ({item}) =>{
        return  (
            <View style={{alignItems:'center',display:'flex',flexDirection:'row',height:60,borderWidth:0.5,borderColor:'black'}}>
                        <View style={{display:'flex',flexDirection:'row',alignItems:'center',width:"70%"}}>
                            <View style={styles.itemFriend_avatar}>
                                    <Image
                                        style={styles.itemFriend_avatar_avatar}
                                        source={{
                                            uri: `${item.avt}`,
                                        }}
                                    />
                            </View>
                            <Text style={{fontSize:24,width:"70%"}}>{item.name}</Text>
                        </View>
                        <View style={{marginRight:20,}}>
                            <TouchableOpacity style={styles.buttonAcp}> 
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
                    <TouchableOpacity  style={styles.bottom} >
                        <AntDesign name="arrowright" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{flex:0.5,alignItems:'center',display:'flex',flexDirection:'row'}}>
                    <View style={styles.itemFriend_avatar}>
                            <Image
                                style={styles.itemFriend_avatar_avatar}
                                source={{
                                    uri: "https://cdn-icons-png.flaticon.com/512/3820/3820188.png",
                                }}
                            />
                    </View>
                    <Text style={{fontSize:24}}>abc</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerBody_AcpFriends}>
                <Text style={{fontSize:24,marginLeft:10,marginTop:10,flex:0.2}}>Danh sách gởi lời mời kết bạn</Text>
                <SwipeListView style={{flex:0.8}} nestedScrollEnabled={true} data ={Data} renderItem={renderItem}  />
            </View>
        </View>
        <Footter/>
    </SafeAreaView>
  )
}

export default AddFriends