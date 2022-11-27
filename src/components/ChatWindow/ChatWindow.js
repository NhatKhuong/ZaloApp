import { Text, View } from "react-native";
import React, { Component } from "react";
import styles from "./ChatWindow_Style";
import Header from "./Head/Header";
import Body from "./Body/Body";
import Footter from "./Footter/Footter_Chat";
function ChatWindow({route}) {
    const {id,name,image,owner} = route.params;
    return (
        <View style={styles.container}>
            <Header  name={name} id={id} image={image} owner={owner} />
            <Body id={id} owner={owner} nameGroup= {name} imageGroup = {image} />
            <Footter/>
        </View>
    );
}

export default ChatWindow;
