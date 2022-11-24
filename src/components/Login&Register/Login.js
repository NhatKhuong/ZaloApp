import { View,Text,TouchableOpacity,TextInput, Alert, Image } from "react-native";
import { AntDesign, Entypo, Feather, FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from "./StyleLogin";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
// Import FireBase
import{initializeAuth,signInWithEmailAndPassword,} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from "../../../firebase-config";
import { useDispatch, useSelector } from "react-redux";
import userAPI from "../../redux/reducers/user/userAPI";

function Login(){
    //UseState
    const [isPassword,setPassword] = useState(true);
    const [email,setEmail] = useState("");
    const [passWord,setPassWord] = useState("");
    //useDispatch
    const dispatch = useDispatch();
    const userState = useSelector(state => state.user);
    //Navigation
    const navigation = useNavigation();
    const hanldPressDashBoard = () => {
        navigation.navigate("DashBoard");
    };
    const hanldPressRegister = () => {
        navigation.navigate("Register");
    };
    //UseEffect
    useEffect(() => {
        if (userState.is_login) {
            setEmail("");
            setPassWord("");
            navigation.navigate("Home");
        } else {
            if (userState.error) {
                (
                    Alert.alert("Thông báo", "Tài khoản, mật khẩu sai")
                )
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userState]);
    const hanldPress = () => {
        if(isPassword){
            setPassword(false);
        }else{
            setPassword(true);
        }
    };
    // Connect FireBase
    const app = initializeApp(firebaseConfig);
    const auth = initializeAuth(app,{
    });
    const hanldPressForgotPasswrod = ()=>{
        navigation.navigate("ForgotPassword");
    }
    const hanldPressLogin = ()=>{
        signInWithEmailAndPassword(auth,email,passWord)
        .then((result)=>{
            if (!result.user.emailVerified) {
                alert("Email chưa được xác thực vui lòng kiểm tra hộp thư của bạn");
                return;
            }
            const accessToken =`Bearer ${auth.currentUser.stsTokenManager.accessToken}`;
            var user = userAPI.getUserInfo()(accessToken )
            dispatch(user);
        })
        .catch(error =>{
            Alert.alert("Thông báo","Xảy ra lỗi! \n Mời bạn nhập lại tài khoản và mật khẩu")
        })
    }
    
    return (
        <View style={styles.container}>
             <View style={styles.containerTabBar}>
                    <TouchableOpacity onPress={hanldPressDashBoard} style={{  paddingLeft:10,paddingRight:10,justifyContent:'center',paddingTop:10,}} >
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
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:0.15}} onPress={hanldPress}>
                        {
                            (isPassword)? <Entypo name="eye" size={24} color="black" /> : <Entypo name="eye-with-line" size={24} color="black" />
                        }
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{margin:15,marginTop:25,}} onPress={hanldPressForgotPasswrod} >
                    <Text style={{fontSize:20, color:'#63B8FF',fontWeight:'bold'}}>
                        Lấy lại mật khẩu
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerBottom}>
                <TouchableOpacity onPress={hanldPressLogin} style={styles.bottom} >
                    <Text style={{fontSize:22, color:'#fff',fontWeight:'bold'}}> Đăng nhập</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:0.15,justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'row',}}>
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
            <View style={{flex:0.15,justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'row'}}>
                    <Text style={{fontSize:20,}}>Chưa có tài khoản?</Text>
                    <TouchableOpacity onPress={hanldPressRegister}>
                        <Text style={{fontSize:22,color:'#F4A460',fontWeight:'bold'}}>Đăng ký</Text>
                    </TouchableOpacity>
            </View>
            
        </View>
    );
}

export default Login;