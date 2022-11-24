import React, { useState, useRef } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View, Animated, ImageBackground,FlatList} from "react-native";
import styles from "./StyleDashBoard";
import PagerView from 'react-native-pager-view';
import { useNavigation } from "@react-navigation/native";

import slides from "../Login&Register/slides";
import OnboardingItem from "../Login&Register/OnboardingItem";
import Paginator from "../Login&Register/Paginator";

function DashBoard(){
    const navigation = useNavigation();
    const hanldPressLogin = () => {
        navigation.navigate("Login");
    };
    const hanldPressRegister = () => {
        navigation.navigate("Register");
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollX = useRef(new Animated.Value(0)).current;

    const slidesRef = useRef(null);

    const ViewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <SafeAreaView style={styles.container}>
            {/* <Image source={{url:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Zalo_logo_2019.svg/2560px-Zalo_logo_2019.svg.png'}} style={{height:53,width:150,marginTop:20,}}/>
            <View style={{height:400,width:"100%",marginTop:40,}}>
                <PagerView  style={styles.viewPager} initialPage={0}>
                    <View style={styles.page} key="1">
                        <Image source={{url:'https://i.ytimg.com/vi/OpV0R1ANQhM/maxresdefault.jpg'}} style={{height:300,width:"100%"}}/>
                        <Text style={{textAlign:'center',marginTop:20,fontSize:22, color:'grey',paddingLeft:10,paddingRight:10,}}>Chào mừng đã đến với mạng xã hội của chúng tôi</Text>
                        <View style={{marginTop:10,display:'flex',flexDirection:'row'}}>
                            <View style={{marginRight:5,}}>
                                <TouchableOpacity style={{paddingTop:10,paddingRight:10,backgroundColor:'#1E90FF',borderRadius:20,borderWidth:1,}}>
                                </TouchableOpacity>
                            </View>
                            <View style={{marginRight:5,}}>
                                <TouchableOpacity style={{paddingTop:10,paddingRight:10,backgroundColor:'#fff',borderRadius:20,borderWidth:1,}}></TouchableOpacity>
                            </View>
                            <View style={{marginRight:5,}}>
                                <TouchableOpacity style={{paddingTop:10,paddingRight:10,backgroundColor:'#fff',borderRadius:20,borderWidth:1,}}></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.page} key="2">
                        <Image source={{url:'https://blog.bonus.ly/hs-fs/hubfs/group-of-team-members-debating.png?width=600&name=group-of-team-members-debating.png'}} style={{height:300,width:"100%"}}/>
                        <Text style={{textAlign:'center',marginTop:20,fontSize:22, color:'grey',paddingLeft:10,paddingRight:10,}}>Chúng tôi giúp kết nối với các bạn bè trên khắp đất nước Việt Nam</Text>
                        <View style={{marginTop:10,display:'flex',flexDirection:'row'}}>
                            <View style={{marginRight:5,}}>
                                <TouchableOpacity style={{paddingTop:10,paddingRight:10,backgroundColor:'#fff',borderRadius:20,borderWidth:1,}}>
                                </TouchableOpacity>
                            </View>
                            <View style={{marginRight:5,}}>
                                <TouchableOpacity style={{paddingTop:10,paddingRight:10,backgroundColor:'#1E90FF',borderRadius:20,borderWidth:1,}}></TouchableOpacity>
                            </View>
                            <View style={{marginRight:5,}}>
                                <TouchableOpacity style={{paddingTop:10,paddingRight:10,backgroundColor:'#fff',borderRadius:20,borderWidth:1,}}></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.page} key="3">
                        <Image source={{url:'https://jobsgo.vn/blog/wp-content/uploads/2019/09/business-development-2.jpg'}} style={{height:300,width:"100%"}}/>
                        <Text style={{textAlign:'center',marginTop:20,fontSize:22, color:'grey',paddingLeft:10,paddingRight:10,}}>Chúng tôi giúp kết nối với các doanh nghiệp khắp đất nước Việt Nam</Text>
                        <View style={{marginTop:10,display:'flex',flexDirection:'row'}}>
                            <View style={{marginRight:5,}}>
                                <TouchableOpacity style={{paddingTop:10,paddingRight:10,backgroundColor:'#fff',borderRadius:20,borderWidth:1,}}>
                                </TouchableOpacity>
                            </View>
                            <View style={{marginRight:5,}}>
                                <TouchableOpacity style={{paddingTop:10,paddingRight:10,backgroundColor:'#fff',borderRadius:20,borderWidth:1,}}></TouchableOpacity>
                            </View>
                            <View style={{marginRight:5,}}>
                                <TouchableOpacity style={{paddingTop:10,paddingRight:10,backgroundColor:'#1E90FF',borderRadius:20,borderWidth:1,}}></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </PagerView>
            </View>
            <View style={styles.containerBotton}>
                <TouchableOpacity style={styles.bottonLogin} onPress={hanldPressLogin}>
                    <Text style={{fontSize:22,color:'white'}}>Đăng nhập</Text>
                </TouchableOpacity>
                <View style={{marginTop:10,}}>
                    <TouchableOpacity style={styles.bottonRegister} onPress={hanldPressRegister}>
                        <Text style={{fontSize:22,}}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </View> */}
            <Text  style={{ fontSize:30, color:"#3366ff",fontWeight:'800' }}>Vola</Text>
            <ImageBackground
            source={require(" ../../../assets/background.png")}
            style={{ top: 20, width: "100%", height: 230 }}
            />
            <View style={{ flex: 3 }}>
            <FlatList
                style={{ marginTop: -150 }}
                data={slides}
                renderItem={({ item }) => <OnboardingItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                {
                    useNativeDriver: false,
                }
                )}
                scrollEventThrottle={32}
                onViewableItemsChanged={ViewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
            />
            <Paginator data={slides} scrollX={scrollX}/>
            <View style={{ top: -50 }}>
                <View
                    style={[
                    {
                        left:80,
                        width: 250,
                        height: 35,
                        backgroundColor: "rgba(0,101,255,255)",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 50,
                    },
                    ]}
                >
                    <TouchableOpacity
                    onPress={hanldPressLogin}
                    >
                    <Text style={{ color: "#fff" }}>Đăng nhập</Text>
                    
                    </TouchableOpacity>
                </View>
                <View
                    style={[
                    {
                        left:80,
                        width: 250,
                        height: 35,
                        backgroundColor: "rgba(241,243,247,255)",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 50,
                        top: 10,
                    },
                    ]}
                >
                    <TouchableOpacity
                    onPress={hanldPressRegister}
                    >
                    <Text>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </SafeAreaView>
    );
}
export default DashBoard;
