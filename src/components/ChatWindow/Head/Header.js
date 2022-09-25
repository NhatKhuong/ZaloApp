import { Text, View } from "react-native";
import React, { Component } from "react";
import styles from "./Header_Style";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
function Header({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.container_left}>
                <View  style={styles.containerIcon}>
                    <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.button}>
                        <MaterialIcons 
                            name="keyboard-arrow-left"
                            size={32}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
                
                <View style={styles.container_friend_Name}>
                    <Text style={styles.friend_Name}>Nhật Khương</Text>
                </View>
            </View>
            <View style={styles.container_right}>
                <View style={styles.container_right_icon}>
                    <Feather name="phone" size={23} color="white" />
                </View>
                <View style={styles.container_right_icon}>
                    <Feather name="video"  size={26} color="white"/>
                </View>
                <TouchableOpacity style={styles.container_right_icon} onPress={()=> navigation.navigate("DrawerChat")}>
                    <Feather name="menu" size={26} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Header;