import React from 'react'
import styles from './Footter_Style'
import { StyleSheet, Text, View,TextInput  } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

function Footter() {
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
            <FontAwesome name="user" size={20} color="grey" />
        </View>
    </View>
  )
}

export default Footter