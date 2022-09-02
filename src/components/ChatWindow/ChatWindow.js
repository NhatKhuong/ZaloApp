import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from './ChatWindow_Style'
import Header from './Head/Header'
import Body from './Body/Body'
import Footter from './Footter/Footter_Chat'
export class ChatWindow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Body />
        <Footter />
      </View>
    )
  }
}

export default ChatWindow