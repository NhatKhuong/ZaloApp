import {Platform, StatusBar, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    
    containerTabBar:{
    flex:0.1,
    padding:5,
    backgroundColor: '#1E90FF',
    display:'flex',
    flexDirection:'row',
    },
    containerText:{
        flex:0.1,
        backgroundColor:'#F5FFFA',
        justifyContent:'center',
        alignItems:'center',
    },
    containerInput:{
        marginTop:20,
        flex:0.4,
        justifyContent:'center'
    },
    containerBottom:{
        flex:0.1,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        paddingRight:10,
    },
    bottom:{
        flex:1,
        height:60,
        backgroundColor:'#1C86EE',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        marginRight:10,
        marginLeft:10,
    }
});

export default styles;