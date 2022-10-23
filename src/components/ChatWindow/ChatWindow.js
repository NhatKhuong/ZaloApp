import { Text, View } from "react-native";
import React, { Component } from "react";
import styles from "./ChatWindow_Style";
import Header from "./Head/Header";
import Body from "./Body/Body";
import Footter from "./Footter/Footter_Chat";
function ChatWindow({route}) {
    const {id} = route.params;
    return (
        <View style={styles.container}>
            <Header />
            <Body id={id} style={styles.main}/>
            <Footter style={styles.footter} />
        </View>
    );
}

export default ChatWindow;
