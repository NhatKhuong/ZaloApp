import React from 'react'
import styles from './ListFriend_Style'
import { StyleSheet, Text, View,TextInput,ScrollView } from 'react-native'
import ItemFriend from './ItemFriend'
// import { NativeRouter, Route, Link } from 'react-router-native'

function ListFriend(props) {
  console.log(navigation);
  const user1={
    name: 'huong'
  }
  const user2={
    name: 'huong2'
  }
  return (
    <ScrollView style={styles.container}>
        <ItemFriend {...{...props, user:user1}}/>
        <ItemFriend {...{...props, user:user2}} />
    </ScrollView>
  )
}

export default ListFriend