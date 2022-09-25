import { View,Text,TouchableOpacity,TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from "./StyleLogin";
import { useState } from "react";

function Login(){
    const [isPassword,setPassword] = useState(true);
    const [isTextButton,setTextButton] = useState("Hiện");

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
                    <TouchableOpacity style={{  paddingLeft:10,paddingRight:10,justifyContent:'center',paddingTop:10,}} >
                        <Ionicons name="arrow-back" size={30} color="#fff" />
                    </TouchableOpacity>
                    <View style={{width:"73%",justifyContent:'center',paddingTop:10,}}>
                        <Text style={{fontSize:22,color:'white',}}>Đăng nhập</Text>
                    </View>
            </View>
            <View style={styles.containerText}>
                <Text style={{fontSize:18,}}>Vui lòng nhập số điện thoại và mật khẩu để đăng nhập</Text>
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="Vui lòng nhập Email" style={{marginLeft:15,marginRight:15,height:50,fontSize:22,borderBottomWidth:1,}}/>
                <View style={{display:'flex',flexDirection:'row',borderBottomWidth:1,marginLeft:15,marginRight:15,}}>
                    <TextInput secureTextEntry={isPassword}  placeholder="Vui lòng nhập mật khẩu" style={{height:50,fontSize:22,width:"85%"}}/>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:"15%"}} onPress={hanldPress}>
                        <Text style={{fontSize:22}}>{isTextButton}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{margin:15,marginTop:25,}} >
                    <Text style={{fontSize:20, color:'#63B8FF',fontWeight:'bold'}}>
                        Lấy lại mật khẩu
                    </Text>
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

export default Login;