import React from 'react'
import styles from './App_Style'
import { StyleSheet, Text, View,TextInput  } from 'react-native'
import Search from '../Search/Search'
import ListFriend from '../ListFriend/ListFriend'
import Footter from '../Footter/Footter'
import ChatWindow from '../ChatWindow/ChatWindow'

function Container() {
  return (
    <View>
        <Search />
        <ListFriend />
        <Footter />
        {/* <ChatWindow /> */}
    </View>
  )
}

export default Container