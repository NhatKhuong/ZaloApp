import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    container :{
        display:'flex',
        // width: '100%',
        height: "8%",
        borderColor:'#ccc',
        borderWidth:1,
        flexDirection:'row',
        backgroundColor:'#0091ff',
        justifyContent:'space-between'
        
    },
    container_left:{
        width:"70%",
        display: 'flex',
        flexDirection:'row',
        alignContent:'center',
    },
    containerIcon:{
        justifyContent:'flex-end',
        marginBottom:5 ,
        width:"14%",
    },
    container_friend_Name:{
        width:"88%",
        justifyContent:'flex-end',
        marginBottom:10,

    },
    friend_Name:{
        color:'white',
        fontSize:22,

    },
    iconSeach:{
        margin: 'auto',
    },
    container_right:{
        display:'flex',
        flexDirection:'row',
        width:"30%",
        justifyContent:'space-around',
    },
    container_right_icon:{
        justifyContent:'flex-end',
        marginBottom:8,
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
    }
})

export default styles