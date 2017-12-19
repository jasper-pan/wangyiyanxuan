import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Dimensions,
    ImageBackground,
    StatusBar
} from 'react-native';
import Swiper from "react-native-swiper";

export default class NewsDetail extends Component {
    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('../../../assets/images/main.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
    ),
    }
    render() {
        return (
            <ScrollView>
                <StatusBar backgroundColor="#fafafa" barStyle="dark" animated={true} />
                <View style={styles.header}>
                    <View  style={styles.headerScan}>
                        <View style={styles.ScanIcon}>
                            <Image source={require('../../../assets/images/QR.png')} style={styles.headerIcon}/>
                        </View>
                         <Text style={styles.ScanText}>{"扫一扫"}</Text>
                    </View>
                    <View  style={styles.headerSearch}></View>
                    <View  style={styles.headerInfo}></View>
                </View>
                <Swiper
                    style={styles.swiper}
                    height={200}
                    horizontal={true}
                    paginationStyle={{bottom: 10}}
                    showsButtons={false}>
                    <Image source={require('../../../assets/images/banner1.jpg')} style={styles.img}/>
                    <Image source={require('../../../assets/images/banner2.jpg')} style={styles.img}/>
                    <Image source={require('../../../assets/images/banner3.jpg')} style={styles.img}/>
                </Swiper>
               <View onPress={this.onPress}><Text>小哥，精彩内容等你来看，哈哈。。。</Text></View>
                <View onPress={this.onPress}><Text>小哥，精彩内容等你来看，哈哈。。。</Text></View>
                 <View onPress={this.onPress}><Text>小哥，精彩内容等你来看，哈哈。。。</Text></View>
                  <View onPress={this.onPress}><Text>小哥，精彩内容等你来看，哈哈。。。</Text></View>
                   <View onPress={this.onPress}><Text>小哥，精彩内容等你来看，哈哈。。。</Text></View>

                    <View onPress={this.onPress}><Text>小哥，精彩内容等你来看，哈哈。。。</Text></View>
                     <View onPress={this.onPress}><Text>小哥，精彩内容等你来看，哈哈。。。</Text></View>
                      <View onPress={this.onPress}><Text>小哥，精彩内容等你来看，哈哈。。。</Text></View>
                       <View onPress={this.onPress}><Text>小哥，精彩内容等你来看，哈哈。。。</Text></View>
                        <View onPress={this.onPress}><Text>小哥，精彩内容等你来看，哈哈。。。</Text></View>
                         <View onPress={this.onPress}><Text>小哥，精彩内容等你来看，哈哈。。。</Text></View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  header : {
      flex:1,
      height:50,
      flexDirection:'row',
      fontSize:10,
      backgroundColor:"#fafafa"
  },
  headerScan:{
      flex:1,
      
      alignItems : "center"
      
      
  },
  headerSearch:{
      flex:4,
       
      backgroundColor:"#ededed",
       
  },
  headerInfo:{
      flex:1,
      
       
  },
  ScanIcon:{
      width:30,
      height:35,
     
      alignItems : "center",
      justifyContent:"center"

  },
  ScanText:{
      fontSize:10,
  },
  headerIcon:{
    width:20,
    height:20,
  },
  icon: {
    width: 25,
    height: 25,
  },
  container:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
   sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
    swiper: {},
    img: {
        width: Dimensions.get('window').width,
        height: 200,
    }
});

