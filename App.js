import Home from "./src/components/app/Home";
import { createStackNavigator } from "@react-navigation/stack";
import ChatWindow from "./src/components/ChatWindow/ChatWindow";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
import ListFriend from "./src/components/ListFriend/ListFriend";
import DrawerChat from "./src/components/ChatWindow/Drawble/DrawerChat";
import Register from "./src/components/Login&Register/Register";
import Login from "./src/components/Login&Register/Login";
import DashBoard from "./src/components/ForgotPassword&DashBoard/DashBoard";
import ForgotPassword from "./src/components/ForgotPassword&DashBoard/ForgotPassword";
import ScannerQR from "./src/components/ScannerQR/scannerQR";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Provider } from "react-redux";
import {store} from "./src/redux/store";
import 'localstorage-polyfill'; 
import MyProfile from "./src/components/Profile/MyProfile";
import FriendProfile from "./src/components/Profile/FriendFrofile";
import Contracts from "./src/components/Contacts/Contracts";
export default function App() {
    const home = "Home"
    const chatWindow = "ChatWindow"
    const listFriend = "ListFriend"
    const drawbleChat = "DrawerChat";
    const login = "Login";
    const register = "Register";
    const dashBoard = "DashBoard";
    const forgotPassword = "ForgotPassword";
    const scannerQR = "ScannerQR";
    const myProfile = "MyProfile";
    const friendProfile = "FriendProfile";
    const contracts = "Contracts"
    return (
        <Provider store={store}>
            <NavigationContainer>
            <Stack.Navigator initialRouteName={dashBoard} screenOptions={{headerShown:false}}>
                <Stack.Screen name={home} component={Home}/>
                <Stack.Screen name={chatWindow} component={ChatWindow} />
                <Stack.Screen name={listFriend} component={ListFriend} />
                <Stack.Screen name={drawbleChat} component={DrawerChat} />
                <Stack.Screen name={login} component={Login} />
                <Stack.Screen name={register} component={Register} />
                <Stack.Screen name={dashBoard} component={DashBoard} />
                <Stack.Screen name={forgotPassword} component={ForgotPassword} />
                <Stack.Screen name={scannerQR} component={ScannerQR} />
                <Stack.Screen name={myProfile} component={MyProfile} />
                <Stack.Screen name={friendProfile} component={FriendProfile} />
                <Stack.Screen name={contracts} component={Contracts} />
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
        );
        
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });