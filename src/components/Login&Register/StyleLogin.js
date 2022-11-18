import {Platform, StatusBar, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    
    containerTabBar:{
    height: "8%",
    padding:5,
    backgroundColor: '#1E90FF',
    display:'flex',
    flexDirection:'row',
    },
    containerText:{
        height:"8%",
        backgroundColor:'#F5FFFA',
        justifyContent:'center',
        alignItems:'center',
    },
    containerInput:{
        marginTop:20,
    },
    containerBottom:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:15,
        paddingTop:60,
    },
    bottom:{
        padding:20,
        backgroundColor:'#1C86EE',
        borderRadius:100,
    }
});

export default styles;