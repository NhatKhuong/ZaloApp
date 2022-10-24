import { KeyboardAvoidingView, Text, TextInput, View } from 'react-native'
import React, { Component, useState } from 'react'
import styles from './Footter_Chat_Style'
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
function Footter_Chat (){
  const [heightKey,setHeightKey] = useState("6%");
  const hanldPress= ()=>{
      setHeightKey("36%")
  }
  const hanldPressOut  = ()=>{
    setHeightKey("6%")
  }
    return (
      <KeyboardAvoidingView style={[styles.container,{height:heightKey}]}>
        <View style={styles.foorter_left}>
          <MaterialIcons name="insert-emoticon" size={24} color="#0091ff" />
          <TextInput onFocus={hanldPress} onBlur={hanldPressOut} style={styles.input_Message} placeholder='Nhập tin nhắn...'></TextInput>
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
      </KeyboardAvoidingView>
    )
  }
export default Footter_Chat