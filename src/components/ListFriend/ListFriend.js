import React from 'react'
import styles from './ListFriend_Style'
import { StyleSheet, Text, View,TextInput,ScrollView } from 'react-native'
import ItemFriend from './ItemFriend'
// import { NativeRouter, Route, Link } from 'react-router-native'

function ListFriend(props) {
  
  return (
    <View style={styles.container}>
      <ItemFriend {...{...props}}/>
    </View>
    
    // <ScrollView >
    //     <ItemFriend {...{...props}}/>
    // </ScrollView>
  )
}

export default ListFriend