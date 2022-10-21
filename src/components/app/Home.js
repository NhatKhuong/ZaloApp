import React from "react";
import styles from "./App_Style";
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from "react-native";
import Search from "../Search/Search";
import ListFriend from "../ListFriend/ListFriend";
import Footter from "../Footter/Footter";
function Home(props) {
    return (
        <View style={styles.container}>
            <View style={styles.containerItem}>
                <Search style ={styles.containerSearch}/>
                <View style ={styles.containerList}>
                    <ListFriend {...props} style={styles.main} />
                </View>
                <Footter style={styles.footter}/>
            </View>
            
        </View>
    );
}

export default Home;
