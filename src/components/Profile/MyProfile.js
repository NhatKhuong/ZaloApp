import { ScrollView, View,Text,TouchableOpacity, Image, ImageBackground} from "react-native";
import React from "react";
import styles from "./Style_MyProfile";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import tokenService from "../../services/token.service";
import userAPI from "../../redux/reducers/user/userAPI";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebase-config";
import { initializeAuth, signOut } from "firebase/auth";
import { logout } from "../../redux/reducers/user/slice";
function MyProfile() {
    const navigation = useNavigation();
    const userState = useSelector(state => state.user);
    const avt = (userState.user.avatar == undefined)?"https://hinhgaixinh.com/wp-content/uploads/2021/12/bo-anh-girl-xinh-cap-2.jpg":userState.user.avatar;
    var nameUser = (userState.user.name == undefined)? userState.user.email : userState.user.name;
    const dispatch = useDispatch();
    const token = tokenService.getAccessToken();
    const hanldPressGoBack = () =>{
        navigation.navigate("Home");
        var user = userAPI.getUserInfo()(token);
        dispatch(user);
    }
    const hanldPressSignOut = ()=>{
        tokenService.remove();
        dispatch(logout());
        navigation.navigate("Login");
    }
    return (
        <View style={styles.container} >
            <View style={styles.containerTabBar}>
                    <TouchableOpacity onPress={hanldPressGoBack} style={{  paddingLeft:10,paddingRight:10,justifyContent:'center',paddingTop:10,}} >
                        <Ionicons name="arrow-back" size={30} color="#fff" />
                    </TouchableOpacity>
                    <View style={{width:"73%",justifyContent:'center',alignItems:'center',paddingTop:10,}}>
                        <Text style={{fontSize:24,color:'white',}}>Trang c?? nh??n</Text>
                    </View>
            </View>
            <ScrollView style={{paddingBottom: 0}}>
                <View style={styles.containerBody}>
                    <ImageBackground source={{uri: 'https://khoinguonsangtao.vn/wp-content/uploads/2022/08/background-dep-don-gian-de-thiet-ke-780x521.jpg'}}  style={styles.containerBody_Top}>
                        <Image style={styles.containerBody_Top_Avt}source={{ uri: avt}}/>
                        <Text style={{fontSize:30,fontWeight:'bold',color:'black',marginTop:10,}}>{nameUser}</Text>
                    </ImageBackground >
                    <View style={styles.containerBody_Mid}>
                            <View style={styles.containerBody_Mid_ChangeName}>
                                <TouchableOpacity style={styles.containerBody_Mid_ChangeName_Item}>
                                    <Ionicons name="pencil" size={24} color="#828282"  style={{width:"15%",height:"100%"}} />
                                    <View style={styles.containerBody_Mid_ChangeName_Item_Text}>
                                        <Text style={{fontSize:20,color:'black',}}>Thay ?????i th??ng tin c?? nh??n</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.containerBody_Mid_ChangeName_Item}>
                                    <Ionicons name="pencil" size={24} color="#828282"  style={{width:"15%",height:"100%"}} />
                                    <View style={styles.containerBody_Mid_ChangeName_Item_Text}>
                                        <Text style={{fontSize:20,color:'black',}}>Thay ?????i m???t kh???u</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.containerBody_Mid_ChangeName_Item}>
                                    <MaterialCommunityIcons name="exit-to-app" size={24} color="red"  style={{width:"15%",height:"100%"}}/>
                                    <TouchableOpacity style={styles.containerBody_Mid_ChangeName_Item_Text} onPress={hanldPressSignOut}>
                                            <Text style={{fontSize:22,color:'red',}}>????ng xu???t</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
            </ScrollView>
        </View>
    );
}

export default MyProfile;
