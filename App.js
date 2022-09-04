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

export default function App() {
    return (
        // <AppNavigator />
        // <Home />
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ChatWindow" component={ChatWindow} />
                <Stack.Screen name="ListFriend" component={ListFriend} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flexDirection: 'column'

//   },
// });
