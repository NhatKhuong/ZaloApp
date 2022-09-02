import { Image, Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from './MessageItem_Style'

export class MessageItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container_Left}>
            <Image style={styles.container_Left_Img} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} />
        </View>
        <View style={styles.container_Right}>
            <Text style={styles.container_Right_Message}>Hello Nhat Khuong</Text>
            <Text style={styles.container_Right_Time}>10:10</Text>
        </View>
      </View>
    )
  }
}

export default MessageItem