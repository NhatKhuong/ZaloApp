import { ScrollView, View,Text,TouchableOpacity, Image, ImageBackground} from "react-native";
import React, { useState } from "react";
import styles from "./Style_FirendProfile";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import axios from "axios";
import tokenService from "../../services/token.service";
import { useSelector } from "react-redux";
import { async } from "@firebase/util";
function FriendProfile({route}) {
    const {isFriend} = route.params;
    const navigation = useNavigation();
    const hanldPressGoBack= ()=>{
        navigation.navigate("Home");
    }
    const [add,setAdd] = useState("Kết bạn");
    const [isAdd,setIsAdd] = useState(false);
    const infoState = useSelector(state => state.info);
    const token = tokenService.getAccessToken();
    const handelPress=  ()=>{
        if(isAdd){
            setAdd("Kết bạn");
            setIsAdd(false)
        }
        else{
            setAdd("Hủy lời mời")
            setIsAdd(true);
            try {
                axios.post(
                    `https://frozen-caverns-53350.herokuapp.com/api/users/invites`,
                    {
                        userId: infoState._id,
                    },
                    {
                        headers: { authorization: token },
                    }).then(()=>{
                        console.log("Done")
                    });
               
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <View style={styles.container} >
            <View style={styles.containerTabBar}>
                    <TouchableOpacity onPress={hanldPressGoBack} style={{  paddingLeft:10,paddingRight:10,justifyContent:'center',paddingTop:10,}} >
                        <Ionicons name="arrow-back" size={30} color="#fff" />
                    </TouchableOpacity>
                    <View style={{width:"73%",justifyContent:'center',alignItems:'center',paddingTop:10,}}>
                        <Text style={{fontSize:24,color:'white',}}>Trang cá nhân</Text>
                    </View>
            </View>
            <ScrollView style={{paddingBottom: 0}}>
                <View style={styles.containerBody}>
                    <ImageBackground source={{uri: 'https://khoinguonsangtao.vn/wp-content/uploads/2022/08/background-dep-don-gian-de-thiet-ke-780x521.jpg'}}  style={styles.containerBody_Top}>
                        <Image style={styles.containerBody_Top_Avt}source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'}}/>
                        <Text style={{fontSize:30,fontWeight:'bold',color:'black',marginTop:10,}}>Trần Tấn Phước</Text>
                    </ImageBackground >
                    <View style={styles.containerBody_Mid}>
                        <View style={styles.containerBody_Mid_Bottom} >
                            <View style={styles.containerBody_Mid_Bottom_Item} >
                                    {
                                        (isFriend)? (null) : (<View style={{marginRight:10,}}>
                                            <TouchableOpacity onPress={handelPress} style={styles.bottom}>
                                              <Text style={{fontSize:18,fontWeight:'bold'}}>{add}</Text>
                                            </TouchableOpacity>
                                        </View>)
                                        
                                    }
                                    <TouchableOpacity style={styles.bottom}>
                                        <Text style={{fontSize:18,fontWeight:'bold'}}>Trò chuyện</Text>
                                    </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default FriendProfile;
