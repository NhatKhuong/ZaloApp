import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from './Header_Style'
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
export class Header extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.container_left}>
                <View style={styles.containerIcon}>
                    <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
                </View>
                <View style={styles.container_friend_Name}>
                    <Text style={styles.friend_Name}>Nhật Khương</Text>
                </View>
            </View>
            <View style={styles.container_right}>
                <View style={styles.container_right_icon}>
                    <Feather name="phone" size={22} color="white" />
                </View>
                <View style={styles.container_right_icon}>
                    <Feather name="video" size={22} color="white" />
                </View>
                <View style={styles.container_right_icon}>
                    <Feather name="menu" size={22} color="white" />
                </View>
            </View>
        </View>
    )
  }
}

export default Header