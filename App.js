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

export default function App() {
    const home = "Home"
    const chatWindow = "ChatWindow"
    const listFriend = "ListFriend"
    const drawbleChat = "DrawerChat";
    const login = "Login";
    const register = "Register";
    const dashBoard = "DashBoard";
    const forgotPassword = "ForgotPassword";
    return (
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
            </Stack.Navigator>
        </NavigationContainer>
        );
}