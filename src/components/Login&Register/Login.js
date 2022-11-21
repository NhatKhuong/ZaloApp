import { View,Text,TouchableOpacity,TextInput, Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';
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
    const [isTextButton,setTextButton] = useState("Hiện");
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
            setTextButton("Ẩn");
        }else{
            setPassword(true);
            setTextButton("Hiện");
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
                <TextInput onChangeText={x=>setEmail(x)} value={email} placeholder="Vui lòng nhập Email" style={{marginLeft:15,marginRight:15,height:50,fontSize:22,borderBottomWidth:1,}}/>
                <View style={{display:'flex',flexDirection:'row',borderBottomWidth:1,marginLeft:15,marginRight:15,}}>
                    <TextInput onChangeText={x=>setPassWord(x)} value={passWord} secureTextEntry={isPassword}  placeholder="Vui lòng nhập mật khẩu" style={{height:50,fontSize:22,width:"85%"}}/>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:"15%"}} onPress={hanldPress}>
                        <Text style={{fontSize:22}}>{isTextButton}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{margin:15,marginTop:25,}} onPress={hanldPressForgotPasswrod} >
                    <Text style={{fontSize:20, color:'#63B8FF',fontWeight:'bold'}}>
                        Lấy lại mật khẩu
                    </Text>
            </TouchableOpacity>
            </View>
            <View style={styles.containerBottom}>
                <View></View>
                <TouchableOpacity onPress={hanldPressLogin} style={styles.bottom} >
                    <AntDesign name="arrowright" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonGoogle}>
                <View style={{margin:30,borderWidth:0.5,height:50,alignItems:'center',display:'flex',flexDirection:'row',borderColor:'grey',backgroundColor:"#FFC1C1",borderRadius:10,}}>
                    <View style={{width:"15%",alignItems:'center',height:50,justifyContent:'center'}}>
                        <AntDesign name="google" size={24} color="red" />
                    </View>
                    <View style={{width:"70%"}}>
                        <Text style={{fontSize:22,textAlign:'center',color:'red'}}>Sign In With Google</Text>
                    </View>
                </View>
            </TouchableOpacity>
            
            
        </View>
    );
}

export default Login;