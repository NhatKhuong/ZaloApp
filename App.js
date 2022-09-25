import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import AppNavigator from "./src/components/app/AppNavigator";
import Home from "./src/components/app/Home";
import { createStackNavigator } from "@react-navigation/stack";
import ChatWindow from "./src/components/ChatWindow/ChatWindow";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
import styles from "./src/components/app/App_Style";
import ListFriend from "./src/components/ListFriend/ListFriend";
import ItemFriend from "./src/components/ListFriend/ItemFriend";
import Footter from "./src/components/Footter/Footter";
import DrawerChat from "./src/components/ChatWindow/Drawble/DrawerChat";
import Register from "./src/components/Login&Register/Register";
import DashBoard from "./src/components/ForgotPassword&DashBoard&Splase/DashBoard";

export default function App() {
    const home = "Home"
    const chatWindow = "ChatWindow"
    const listFriend = "ListFriend"
    const drawbleChat = "DrawerChat";
    return (
        // <AppNavigator />
        // <Home />
        // <NavigationContainer>
            
        //     <Stack.Navigator initialRouteName={home} screenOptions={{headerShown:false}}>
        //         <Stack.Screen name={home} component={Home}/>
        //         <Stack.Screen name={chatWindow} component={ChatWindow} />
        //         <Stack.Screen name={listFriend} component={ListFriend} />
        //         <Stack.Screen name={drawbleChat} component={DrawerChat} />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <DashBoard/>
        );
}

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flexDirection: 'column'

//   },
// });
