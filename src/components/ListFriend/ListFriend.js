import React from 'react'
import styles from './ListFriend_Style'
import { StyleSheet, Text, View,TextInput,ScrollView } from 'react-native'
import ItemFriend from './ItemFriend'
// import { NativeRouter, Route, Link } from 'react-router-native'

function ListFriend() {
  return (
    <ScrollView style={styles.container}>
        <ItemFriend />
        <ItemFriend />
        <ItemFriend />
        <ItemFriend />
        <ItemFriend />
        <ItemFriend />
        <ItemFriend />
        <ItemFriend />
        <ItemFriend />
    </ScrollView>
  )
}

export default ListFriend