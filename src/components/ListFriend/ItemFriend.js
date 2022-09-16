import { Text, View, Image, FlatList, ScrollView, TouchableHighlight } from "react-native";
import React, { Component } from "react";
import styles from "./ItemFriend_Style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { SwipeListView } from "react-native-swipe-list-view";
import { Feather } from '@expo/vector-icons';
import { color } from "react-native-reanimated";
const Data = [
    {id:1,name:'Trần Tấn Phước',image:'https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg',lastMessage:'Hello',time:'10 phút'},
    {id:2,name:'Trần Tấn A',image:'https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg',lastMessage:'Hello',time:'10 phút'},
    {id:3,name:'Trần Tấn B',image:'https://vaithuhayho.com/wp-content/uploads/2022/07/anh-avatar-cute-de-thuong-5.jpg',lastMessage:'Hello',time:'10 phút'},
    {id:4,name:'Trần Tấn C',image:'https://i.pinimg.com/originals/47/e0/01/47e001f1be26293d7f8826c5b262d9df.jpg',lastMessage:'Hello',time:'10 phút'},
    {id:5,name:'Trần Tấn D',image:'https://kiemtientuweb.com/ckfinder/userfiles/images/avt-cute/avatar-cute-1.jpg',lastMessage:'Hello',time:'10 phút'},
    {id:6,name:'Trần Tấn D',image:'https://kiemtientuweb.com/ckfinder/userfiles/images/avt-cute/avatar-cute-1.jpg',lastMessage:'Hello',time:'10 phút'},
    {id:7,name:'Trần Tấn D',image:'https://kiemtientuweb.com/ckfinder/userfiles/images/avt-cute/avatar-cute-1.jpg',lastMessage:'Hello',time:'10 phút'},
    {id:8,name:'Trần Tấn D',image:'https://kiemtientuweb.com/ckfinder/userfiles/images/avt-cute/avatar-cute-1.jpg',lastMessage:'Hello',time:'10 phút'},
    {id:9,name:'Trần Tấn D',image:'https://kiemtientuweb.com/ckfinder/userfiles/images/avt-cute/avatar-cute-1.jpg',lastMessage:'Hello',time:'10 phút'},
    {id:10,name:'Trần Tấn D',image:'https://kiemtientuweb.com/ckfinder/userfiles/images/avt-cute/avatar-cute-1.jpg',lastMessage:'Hello',time:'10 phút'},
    {id:11,name:'Trần Tấn D',image:'https://kiemtientuweb.com/ckfinder/userfiles/images/avt-cute/avatar-cute-1.jpg',lastMessage:'Hello',time:'10 phút'},
    {id:12,name:'Trần Tấn A',image:'https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg',lastMessage:'Hello',time:'10 phút'},
    {id:13,name:'Trần Tấn B',image:'https://vaithuhayho.com/wp-content/uploads/2022/07/anh-avatar-cute-de-thuong-5.jpg',lastMessage:'Hello',time:'10 phút'},
    {id:14,name:'Trần Tấn C',image:'https://i.pinimg.com/originals/47/e0/01/47e001f1be26293d7f8826c5b262d9df.jpg',lastMessage:'Hello',time:'10 phút'},
];
const ItemFriend = ({navigation,user}) => {
    const hanldPress = () => {
        navigation.navigate("ChatWindow");
    };
    const renderItem = ({item}) =>{
        return  <TouchableHighlight underlayColor={'#E6E6FA'} style={styles.touchHightLight} onPress={hanldPress}>
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