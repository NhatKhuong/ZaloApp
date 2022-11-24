import { View,Text,TouchableOpacity,TextInput, Image, Alert } from "react-native";
import { AntDesign, Entypo, Feather, FontAwesome5 } from '@expo/vector-icons';
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
        }else{
            setIsPassword(true);
        }
    };
    const hanldPressPassAgain = () => {
        if(isPasswordAgain){
            setIsPasswordAgain(false);
        }else{
            setIsPasswordAgain(true);
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
                {/* <TextInput onChangeText={x=>setuserName(x)} value={userName} placeholder="Vui lòng nhập Tên người dùng" style={{marginLeft:15,marginRight:15,height:50,fontSize:22,borderBottomWidth:1,}}/> */}
                <View style={{display:'flex',flexDirection:'row',borderWidth:1,marginRight:10,marginLeft:10,borderRadius:20,backgroundColor:"#DCDCDC",alignItems:"center"}}>
                    <View style={{flex:0.15,alignItems:'center'}}>
                        <Feather name="mail" size={32} color="black" />
                    </View>
                    <TextInput onChangeText={x=>setEmail(x)} value={email} placeholder="Vui lòng nhập Email" style={{marginRight:15,height:50,fontSize:22,flex:0.85}}/>
                </View>
                <View style={{display:'flex',flexDirection:'row',borderWidth:1,marginLeft:10,marginRight:10,marginTop:10,borderRadius:20,backgroundColor:"#DCDCDC",alignItems:"center"}}>
                    <View style={{flex:0.15,alignItems:'center',}}>
                        <FontAwesome5 name="keyboard" size={24} color="black" />
                    </View>
                    <TextInput onChangeText={x=>setPassWord(x)} value={passWord} secureTextEntry={isPassword}  placeholder="Vui lòng nhập mật khẩu" style={{height:50,fontSize:22,flex:0.7}}/>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:0.15}} onPress={hanldPressPass}>
                        {
                            (isPassword)? <Entypo name="eye" size={24} color="black" /> : <Entypo name="eye-with-line" size={24} color="black" />
                        }
                    </TouchableOpacity>
                </View>

                <View style={{display:'flex',flexDirection:'row',borderWidth:1,marginLeft:10,marginRight:10,marginTop:10,borderRadius:20,backgroundColor:"#DCDCDC",alignItems:"center"}}>
                    <View style={{flex:0.15,alignItems:'center',}}>
                        <FontAwesome5 name="keyboard" size={24} color="black" />
                    </View>
                    <TextInput onChangeText={x=>setPassWordAgain(x)} value={passWordAgain} secureTextEntry={isPasswordAgain}  placeholder="Vui lòng nhập lại mật khẩu" style={{height:50,fontSize:22,flex:0.7}}/>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:0.15}} onPress={hanldPressPassAgain}>
                        {
                            (isPasswordAgain)? <Entypo name="eye" size={24} color="black" /> : <Entypo name="eye-with-line" size={24} color="black" />
                        }
                    </TouchableOpacity>
                </View>
                {/* <View style={{display:'flex',flexDirection:'row',borderBottomWidth:1,marginLeft:15,marginRight:15,}}>
                    <TextInput onChangeText={x=>setPassWordAgain(x)} value={passWordAgain} secureTextEntry={isPasswordAgain}  placeholder="Vui lòng nhập lại mật khẩu" style={{height:50,fontSize:22,width:"85%"}}/>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:"15%"}} onPress={hanldPressPassAgain}>
                        <Text style={{fontSize:22}}>{isTextButton2}</Text>
                    </TouchableOpacity>
                </View> */}
                <TouchableOpacity onPress={hanldPressLogin} style={{marginTop:25,alignItems:'center',width:"100%"}} >
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <Text style={{fontSize:20,marginRight:10,}}> Đã có tài khoản?</Text>
                        <Text style={{fontSize:22,fontWeight:'bold',marginRight:10,color:'#F4A460'}}> Đăng nhập</Text>
                        
                    </View>
            </TouchableOpacity>
            </View>
            
            <View style={styles.containerBottom}>
                <TouchableOpacity onPress={hanldPressRegister} style={styles.bottom} >
                    <Text style={{fontSize:22, color:'#fff',fontWeight:'bold'}}> Đăng ký</Text>
                </TouchableOpacity>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'row',marginTop:20,}}>
                <TouchableOpacity  style={{height:60,width:60,justifyContent:'center',alignItems:'center',borderRadius:20,backgroundColor:"#DCDCDC"}} >
                        <Image source={require('../../../assets/google.png')}/>
                </TouchableOpacity>
                <View style={{marginRight:20,}}></View>
                <TouchableOpacity  style={{height:60,width:60,justifyContent:'center',alignItems:'center',borderRadius:20,backgroundColor:"#DCDCDC"}} >
                        <Image source={require('../../../assets/facebook.png')}/>
                </TouchableOpacity>
                <View style={{marginRight:20,}}></View>
                <TouchableOpacity  style={{height:60,width:60,justifyContent:'center',alignItems:'center',borderRadius:20,backgroundColor:"#DCDCDC"}} >
                        <Image source={require('../../../assets/twitter.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Register;