import { View,Text,TouchableOpacity,TextInput, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from "./StyleRegister";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

function Register(){
    const [isPassword,setPassword] = useState(true);
    const [isTextButton,setTextButton] = useState("Hiện");
    const navigation = useNavigation();
    const hanldPressDashBoard = () => {
        navigation.navigate("DashBoard");
    };
    const hanldPressLogin = () => {
        navigation.navigate("Login");
    };
    const hanldPress = () => {
        if(isPassword){
            setPassword(false);
            setTextButton("Ẩn");
        }else{
            setPassword(true);
            setTextButton("Hiện");
        }
    };
    return (
        <View style={styles.container}>
             <View style={styles.containerTabBar}>
                    <TouchableOpacity onPress={hanldPressDashBoard} style={{  paddingLeft:10,paddingRight:10,justifyContent:'center',paddingTop:10,}} >
                        <Ionicons name="arrow-back" size={30} color="#fff" />
                    </TouchableOpacity>
                    <View style={{width:"73%",justifyContent:'center',paddingTop:10,}}>
                        <Text style={{fontSize:22,color:'white',}}>Đăng Ký</Text>
                    </View>
            </View>
            <View style={styles.containerText}>
                <Text style={{fontSize:18,textAlign:'center'}}>Vui lòng nhập số điện thoại và mật khẩu để {'\n'} đăng ký tài khoản</Text>
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="Vui lòng nhập Email" style={{marginLeft:15,marginRight:15,height:50,fontSize:22,borderBottomWidth:1,}}/>
                <View style={{display:'flex',flexDirection:'row',borderBottomWidth:1,marginLeft:15,marginRight:15,}}>
                    <TextInput secureTextEntry={isPassword}  placeholder="Vui lòng nhập mật khẩu" style={{height:50,fontSize:22,width:"85%"}}/>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:"15%"}} onPress={hanldPress}>
                        <Text style={{fontSize:22}}>{isTextButton}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{display:'flex',flexDirection:'row',borderBottomWidth:1,marginLeft:15,marginRight:15,}}>
                    <TextInput secureTextEntry={isPassword}  placeholder="Vui lòng nhập lại mật khẩu" style={{height:50,fontSize:22,width:"85%"}}/>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:"15%"}} onPress={hanldPress}>
                        <Text style={{fontSize:22}}>{isTextButton}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={hanldPressLogin} style={{marginTop:25,alignItems:'center',width:"100%"}} >
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <Text style={{fontSize:22, color:'#63B8FF',fontWeight:'bold',marginRight:10,}}> Đã có tài khoản</Text>
                        <Image source={{url:'https://viettelhochiminh.com.vn/wp-content/uploads/2022/07/zalo-logo-inkythuatso-14-15-05-01.jpg'}} style={{height:30,width:30}}/>
                    </View>
            </TouchableOpacity>
            </View>
            
            <View style={styles.containerBottom}>
                <View></View>
                <TouchableOpacity style={styles.bottom} >
                    <AntDesign name="arrowright" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Register;