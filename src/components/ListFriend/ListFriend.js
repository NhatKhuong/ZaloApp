import React from 'react'
import styles from './ListFriend_Style'
import { StyleSheet, Text, View,TextInput,ScrollView } from 'react-native'
import ItemFriend from './ItemFriend'
import { useSelector } from 'react-redux'
// import { NativeRouter, Route, Link } from 'react-router-native'

function ListFriend(props) {
  const userState = useSelector(state => state.user)
  console.log()
  return (
    <View style={styles.container}>
      {/* <ItemFriend {...{...props}}/> */}
      <Text>{userState.user.email}</Text>
    </View>
    
    // <ScrollView >
    //     <ItemFriend {...{...props}}/>
    // </ScrollView>
  )
}

export default ListFriend