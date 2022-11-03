import React from 'react'
import styles from './Footter_Style'
import { StyleSheet, Text, View,TextInput, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
const Tab = createBottomTabNavigator();

function Footter() {

    const navigation = useNavigation();
    const hanldPressMyProfile = () => {
        navigation.navigate("MyProfile");
    };

  return (
    <View style={styles.container}>
        <View style={styles.containerIcon}>
            <AntDesign name="message1" size={20} color="grey" />
        </View>
        <View style={styles.containerIcon}>
            <FontAwesome5 name="user-friends" size={20} color="grey" />
        </View>
        <View style={styles.containerIcon}>
            <AntDesign name="clockcircleo" size={20} color="grey" />
        </View>
        <View style={styles.containerIcon}>
            <TouchableOpacity onPress={hanldPressMyProfile}>
                <FontAwesome name="user" size={20} color="grey"/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Footter