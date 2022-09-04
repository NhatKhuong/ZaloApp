import React from "react";
import styles from "./App_Style";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Search from "../Search/Search";
import ListFriend from "../ListFriend/ListFriend";
import Footter from "../Footter/Footter";
import ChatWindow from "../ChatWindow/ChatWindow";

function Home(props) {
    
    return (
        <View>
           
            <Search />
            <ListFriend {...props} />
            <Footter />
        </View>
    );
}

export default Home;
