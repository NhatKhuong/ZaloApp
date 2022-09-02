import { ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from './Body_Style'
import MessageItem from './MessageItem'
import MyMessagaItem from './MyMessagaItem'
export class Body extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <MessageItem />
        <MyMessagaItem />
        <MyMessagaItem />
        <MessageItem />
        <MyMessagaItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
      </ScrollView>
    )
  }
}
export default Body