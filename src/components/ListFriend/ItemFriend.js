import { Text, View,Image } from 'react-native'
import React, { Component } from 'react'
import styles from './ItemFriend_Style'
export class ItemFriend extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.itemFriend_info}>
            <View style={styles.itemFriend_avatar}>
                <Image style={styles.itemFriend_avatar_avatar} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} />
            </View>
            {/* <View style={styles.itemFriend_message}>
                <Text style={styles.itemFriend_name}>Nhat Khuong</Text>
                <Text style={styles.itemFriend_content}>Hello Khuong</Text>
            </View> */}
        </View>
        <View style={styles.itemFriend_right}>
            <View style={styles.itemFriend_message}>
                <Text style={styles.itemFriend_name}>Nhat Khuong</Text>
                <Text style={styles.itemFriend_content}>Hello Khuong</Text>
            </View>
            <View style={styles.itemFriend_timeBlock}>
                <Text style={styles.itemFriend_time}>10 phut</Text>
            </View>
        </View>
      </View>
    )
  }
}

export default ItemFriend