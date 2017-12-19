import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { connect } from 'react-redux'



 class Classify extends Component {
    
    static navigationOptions =({navigation,screenProps}) =>{
         
        return {
        tabBarLabel: "分类",
        tabBarIcon: ({ tintColor  }) => (
            <Image
                source={require('../../../assets/images/Category.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
    ),
    }
    } 
    render() {
        
        return (
            <View><Text>小哥，精彩内容等你来看，哈哈。。。</Text></View>
        );
    }
}


const styles = StyleSheet.create({
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
});


const mapStateToProps = (state) => ({
    data:state.Home.toJS().data,

});
const Classifys = connect(mapStateToProps)(Classify);

export default Classifys
