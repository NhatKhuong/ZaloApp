import { Text, View, Image, FlatList, ScrollView, TouchableHighlight } from "react-native";
import React, { Component } from "react";
import styles from "./ItemFriend_Style";
import { AntDesign } from '@expo/vector-icons';
import { SwipeListView } from "react-native-swipe-list-view";
import { Feather } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const ItemFriend = ({navigation}) => {
    
    const userState = useSelector(state => state.user)
    const listRoom = userState.rooms;
    const Data = listRoom.map((e)=>{
        return ({id:e._id,name:e.name,image:e.avatar,lastMessage:e.messages[0]?.content,time:(e.createdAt)});
    });
    
    const renderItem = ({item}) =>{
        return  <TouchableHighlight underlayColor={'#E6E6FA'} style={styles.touchHightLight} onPress={()=>{
            navigation.navigate("ChatWindow",{id:item.id,name:item.name,image:item.image,lastMessage:item.lastMessage,time:item.time})
        }}>
                <View style={styles.container} >
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
                        <View style={styles.itemFriend_message}>
                            <Text style={styles.itemFriend_name}>{item.name}</Text>
                            <Text style={styles.itemFriend_content}>{item.lastMessage}</Text>
                        </View>
                        <View style={styles.itemFriend_timeBlock}>
                            <Text style={styles.itemFriend_time}>{item.time}</Text>
                        </View>
                    </View>
                </View>
        </TouchableHighlight>
    //    <TouchableOpacity  onPress={hanldPress}>
    //   </TouchableOpacity >
    };
    const HiddenItemWithActions = props =>{
        const {onClose,onDelete} = props;
        return   <View style={styles.rowBack}>
                    <View style={styles.rowBackLeft}>
                    </View>
                    <View style={styles.rowBackRight}>
                        <View style={styles.rowBackRight_Left}>
                        <Feather name="more-horizontal" size={24} color="white" />
                        <Text style={styles.txtItemRowBack}>Thêm</Text>
                        </View>
                        <View style={styles.rowBackRight_Mid}>
                            <AntDesign name="pushpino" size={24} color="white" />
                            <Text style={styles.txtItemRowBack}>Ghim</Text>
                        </View>
                        <View style={styles.rowBackRight_Right}>
                        <AntDesign name="delete" size={24} color="white" />
                        <Text style={styles.txtItemRowBack}>Xóa</Text>
                        </View>
                    </View>
                </View>
    }
    const renderHideItem=({data,rowMap})=>{
        return <HiddenItemWithActions
        data = {data}
        rowMap = {rowMap}
        onClose={()=>closeRow(rowMap,data.item.id)}
        onDelete={()=>deleteRow(rowMap,data.item.id)}
        />
       
    };
    return (
        <SwipeListView nestedScrollEnabled={true} data ={Data} renderItem={renderItem} renderHiddenItem={renderHideItem}  rightOpenValue={-230} />
        );
};

export default ItemFriend;