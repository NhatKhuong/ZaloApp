import React from 'react'
import styles from './Footter_Style'
import { StyleSheet, Text, View,TextInput, TouchableOpacity  } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

function Footter() {
    const navigation  = useNavigation();
    
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.containerIcon}>
            <AntDesign name="message1" size={20} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>navigation.navigate("Contracts")} style={styles.containerIcon}>
            <FontAwesome5 name="user-friends" size={20} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerIcon}>
            <AntDesign name="clockcircleo" size={20} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>navigation.navigate("MyProfile")} style={styles.containerIcon}>
            <FontAwesome name="user" size={20} color="grey" />
        </TouchableOpacity>
    </View>
  )
}

export default Footter