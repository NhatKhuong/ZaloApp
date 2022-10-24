import { ScrollView, View,Text,TouchableOpacity, Image, ImageBackground} from "react-native";
import React from "react";
import styles from "./Style_MyProfile";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
function MyProfile() {
    const navigation = useNavigation();
    const hanldPressGoBack= ()=>{
        navigation.navigate("Home");
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
                            <View style={styles.containerBody_Mid_ChangeName}>
                                <TouchableOpacity style={styles.containerBody_Mid_ChangeName_Item}>
                                    <Ionicons name="pencil" size={24} color="#828282"  style={{width:"15%",height:"100%"}} />
                                    <View style={styles.containerBody_Mid_ChangeName_Item_Text}>
                                        <Text style={{fontSize:20,color:'black',}}>Thay đổi thông tin cá nhân</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.containerBody_Mid_ChangeName_Item}>
                                    <Ionicons name="pencil" size={24} color="#828282"  style={{width:"15%",height:"100%"}} />
                                    <View style={styles.containerBody_Mid_ChangeName_Item_Text}>
                                        <Text style={{fontSize:20,color:'black',}}>Thay đổi mật khẩu</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.containerBody_Mid_ChangeName_Item}>
                                    <MaterialCommunityIcons name="exit-to-app" size={24} color="red"  style={{width:"15%",height:"100%"}}/>
                                    <View style={styles.containerBody_Mid_ChangeName_Item_Text}>
                                            <Text style={{fontSize:22,color:'red',}}>Đăng xuất</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
            </ScrollView>
        </View>
    );
}

export default MyProfile;
