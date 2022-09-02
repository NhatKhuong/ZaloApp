import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    container :{
        display:'flex',
        // width: '100%',
        height: 50,
        marginTop:30,
        borderColor:'#ccc',
        borderWidth:1,
        flexDirection:'row',
        backgroundColor:'#0091ff',
        justifyContent:'space-between'
        
    },
    container_left:{
        display: 'flex',
        flexDirection:'row',
        alignContent:'center',
    },
    containerIcon:{
        justifyContent:'center',

    },
    container_friend_Name:{
        justifyContent:'center',
        marginLeft:15,

    },
    friend_Name:{
        color:'white',
        fontSize:16,

    },
    iconSeach:{
        margin: 'auto',
    },
    container_right:{
        display:'flex',
        flexDirection:'row',
        width:100,
        justifyContent:'space-around',
    },
    container_right_icon:{
        justifyContent:'center',
    }
})

export default styles