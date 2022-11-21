import { View,Text,TouchableOpacity,TextInput, Image, Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from "./StyleRegister";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
// Import FireBase
import{initializeAuth,createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from "../../../firebase-config";

function Register(){
    const [isPassword,setIsPassword] = useState(true);
    const [isPasswordAgain,setIsPasswordAgain] = useState(true);
    const [email,setEmail] = useState("");
    const [userName,setuserName] = useState("");
    const [passWord,setPassWord] = useState("");
    const [passWordAgain,setPassWordAgain] = useState("");
    const [isTextButton,setTextButton] = useState("Hiện");
    const [isTextButton2,setTextButton2] = useState("Hiện");
    const navigation = useNavigation();
    const hanldPressDashBoard = () => {
        navigation.navigate("DashBoard");
    };
    const hanldPressLogin = () => {
        navigation.navigate("Login");
    };
    const hanldPressPass = () => {
        if(isPassword){
            setIsPassword(false);
            setTextButton("Ẩn");
        }else{
            setIsPassword(true);
            setTextButton("Hiện");
        }
    };
    const hanldPressPassAgain = () => {
        if(isPasswordAgain){
            setIsPasswordAgain(false);
            setTextButton2("Ẩn");
        }else{
            setIsPasswordAgain(true);
            setTextButton2("Hiện");
        }
    };
    // Connect FireBase
    const app = initializeApp(firebaseConfig);
    const auth = initializeAuth(app,{
    });
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const hanldPressRegister = ()=>{
        if(email == ""){
            Alert.alert("Thông báo","Email không được rỗng")
        }
        else {
            if(!regexEmail.test(email)&& passWord == passWordAgain || !regexEmail.test(email)&& passWord != passWordAgain){
                Alert.alert("Thông báo","Email không hợp lệ")
            }
            else if(regexEmail.test(email) && passWord != passWordAgain) {
                Alert.alert("Thông báo","Mật khẩu xác nhận không giống với mật khẩu trên")
            }
            else if(regexEmail.test(email) && passWord == "") {
                Alert.alert("Thông báo","Mời bạn nhập mật khẩu")
            }
            else 
            {
                createUserWithEmailAndPassword(auth,email,passWord)
                .then((userCredential)=>{
                    var user = userCredential.user;
                    sendEmailVerification(user);
                    Alert.alert("Thông báo",`Đăng ký thành công ! ${'\n'}Mời bạn kiểm tra email để xác nhận`);
                    setEmail("");
                    setPassWord("");
                    setPassWordAgain("");
                    setuserName("");
                    navigation.navigate("Login");
                })
                .catch(error =>{
                    Alert.alert("Thông báo","Xảy ra lỗi! \n Mời bạn nhập lại tài khoản và mật khẩu")
                })
            }
            
            
        }
    }

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
                <TextInput onChangeText={x=>setuserName(x)} value={userName} placeholder="Vui lòng nhập Tên người dùng" style={{marginLeft:15,marginRight:15,height:50,fontSize:22,borderBottomWidth:1,}}/>
                <TextInput onChangeText={x=>setEmail(x)} value={email} placeholder="Vui lòng nhập Email" style={{marginLeft:15,marginRight:15,height:50,fontSize:22,borderBottomWidth:1,}}/>
                <View style={{display:'flex',flexDirection:'row',borderBottomWidth:1,marginLeft:15,marginRight:15,}}>
                    <TextInput onChangeText={x=>setPassWord(x)} value={passWord} secureTextEntry={isPassword}  placeholder="Vui lòng nhập mật khẩu" style={{height:50,fontSize:22,width:"85%"}}/>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:"15%"}} onPress={hanldPressPass}>
                        <Text style={{fontSize:22}}>{isTextButton}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{display:'flex',flexDirection:'row',borderBottomWidth:1,marginLeft:15,marginRight:15,}}>
                    <TextInput onChangeText={x=>setPassWordAgain(x)} value={passWordAgain} secureTextEntry={isPasswordAgain}  placeholder="Vui lòng nhập lại mật khẩu" style={{height:50,fontSize:22,width:"85%"}}/>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:"15%"}} onPress={hanldPressPassAgain}>
                        <Text style={{fontSize:22}}>{isTextButton2}</Text>
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
                <TouchableOpacity onPress={hanldPressRegister} style={styles.bottom} >
                    <AntDesign name="arrowright" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Register;