import React from 'react'
import { StyleSheet, Text, View,TextInput  } from 'react-native'
import styles from './Search_style'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-navigation';
function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerIcon}>
        <EvilIcons style={styles.iconSeach} name="search" size={30} color="white" />
        
      </View>
      <View style={styles.containerInput}>
        <TextInput placeholderTextColor="#fff" style={styles.input} type="text" placeholder='Tìm kiếm'/>
      </View>
      <View style={styles.containerIconRight}>
        <View style={styles.containerIconQR}>
          <MaterialCommunityIcons name="qrcode-scan" size={22} color="white" />
          </View>
          <View style={styles.containerIconAdd}>
            <Ionicons name="md-add" size={30} color="white" />
          </View>
      </View>
    </SafeAreaView>
  )
}

export default Search