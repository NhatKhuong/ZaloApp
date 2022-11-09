import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    
    containerTabBar:{
    height: "10%",
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
        justifyContent:'center',
        paddingRight:15,
        paddingTop:60,
    },
    bottom:{
        backgroundColor: "rgba(0,101,255,255)",
        width: "60%",
        borderRadius: 50,
        padding: 12,
        justifyContent:'center',
        alignItems: "center",
    }
});

export default styles;