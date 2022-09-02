import { Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import styles from './Footter_Chat_Style'
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
export class Footter_Chat extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.foorter_left}>
          <MaterialIcons name="insert-emoticon" size={24} color="#0091ff" />
          <TextInput style={styles.input_Message} placeholder='Nhập tin nhắn...'></TextInput>
        </View>
        <View style={styles.footer_Right}>
          <View>
            <MaterialIcons name="keyboard-voice" size={24} color="#0091ff" />
          </View>
          <View>
            <SimpleLineIcons name="picture" size={24} color="#0091ff" />
          </View>
          <View>
            <FontAwesome name="send" size={24} color="#0091ff" />
          </View>
        </View>
      </View>
    )
  }
}
export default Footter_Chat