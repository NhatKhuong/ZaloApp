import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
    },
    itemFriend_avatar:{
        marginRight:15,
    },
    itemFriend_avatar_avatar:{
        width:50,
        height:50,
        borderRadius: 50,
    },
    itemFriend_info:{
        display:'flex',
        flexDirection:'row',
    },
    itemFriend_message:{
        justifyContent: 'center',

    },
    itemFriend_content:{
        fontSize:12,
        color:'grey',
    },
    itemFriend_time:{
        fontSize:12,
        color:'grey',
    },
    itemFriend_right:{
        borderBottomWidth:1,
        borderBottomColor:'#ccc',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1,
    },
    itemFriend_timeBlock:{
        justifyContent:'center',
    }



});

export default styles
