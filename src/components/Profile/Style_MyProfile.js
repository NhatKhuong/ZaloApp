import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#DCDCDC'
    },
    
    containerTabBar:{
    height: "10%",
    padding:5,
    backgroundColor: '#01bafa',
    display:'flex',
    flexDirection:'row',
    },
    containerBody:{
        display:'flex',
        flexDirection:'column',
    },
    containerBody_Top:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'white',
        height:250,
        paddingTop:50,
    },
    containerBody_Top_Avt:{
        height:100,
        width:100,
        marginTop:15,
        borderRadius:100,
    },
    containerBody_Top_Icon:{
        marginTop:30,
        display:'flex',
        flexDirection:'row',
        width:"80%",
        justifyContent:'space-around'
    },
    containerBody_Top_Icon_IconItem:{
        height:40,
        width:40,
        backgroundColor:'#DCDCDC',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:40,
    },
    containerBody_Top_Icon_IconText:{
        marginTop:5,
        justifyContent:'center',
        alignItems:'center',
    },
    containerBody_Top_Icon_Icon:{
        alignItems:'center',
    },
    containerBody_Mid_ChangeName:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'white',
        height:"60%",
    },
    containerBody_Mid_ChangeName_Item:{
        display:'flex',
        flexDirection:'row',
        height:60,
        padding:10,
    },
    containerBody_Mid_ChangeName_Item_Text:{
        display:'flex',
        flexDirection:'row',
        height:"100%",
        width:"85%",
        borderBottomWidth:1,
        borderColor:'grey',
        justifyContent:'space-between',
        alignItems:'center',
    },
    containerBody_Mid:{
        marginTop:10,
    },
    containerBody_Mid_File:{
        marginTop:10,
        display:'flex',
        flexDirection:'column',
        backgroundColor:'white',
        height:130,
    },
    containerBody_Mid_File_Item:{
        display:'flex',
        flexDirection:'row',
        height:50,
        padding:10,
    },
    containerBody_Mid_File_Item_Text:{
        display:'flex',
        flexDirection:'row',
        height:"100%",
        width:"85%",
        justifyContent:'space-between',
    },
    containerBody_Mid_File_Item_Img:{
        display:'flex',
        flexDirection:'row',
        height:"100%",
        width:"85%",
    },
    fileImg:{
        height:60,
        width:60,
        marginRight:5,
    },
    
})
export default styles;