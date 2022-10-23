import React from 'react'
import styles from './ListFriend_Style'
import { StyleSheet, Text, View,TextInput,ScrollView } from 'react-native'
import ItemFriend from './ItemFriend'

function ListFriend(props) {
  
  return (
    <View style={styles.container}>
      <ItemFriend {...{...props}}/>
    </View>
  )
}

export default ListFriend