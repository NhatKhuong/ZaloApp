import React from 'react'
import { StyleSheet, Text, View,TextInput  } from 'react-native'
import styles from './Search_style'
// import Ionicons from '@expo/vector-icons/Ionicons';
import { EvilIcons } from '@expo/vector-icons'; 
function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <EvilIcons style={styles.iconSeach} name="search" size={24} color="white" />
      </View>
      <View>
        <TextInput placeholderTextColor="#fff" style={styles.input} type="text" placeholder='Nhập số điện thoại'/>
      </View>
      
    </View>
  )
}

export default Search