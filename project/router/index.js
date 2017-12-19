import {
    TabNavigator,
    StackNavigator,
    addNavigationHelpers
} from "react-navigation";

import Home from '../components/Home';
import Classify from '../components/Classify/index'
 
import Cart from '../components/ShopCar/index';
import Login from '../components/Login'
import PersonalCenter from '../components/PersonalCenter/index'

const TabbarNavigator = TabNavigator({
    Home: { screen: Home },
    Classify : {screen : Classify },
    Cart : {screen:Cart},
    PersonalCenter : { screen :PersonalCenter}
  
}, {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled:false,
    tabBarOptions: {
        activeBackgroundColor:'white',
        activeTintColor:'#b4282d',
        inactiveBackgroundColor:'white',
        inactiveTintColor:'#aaa',
        activeTintColor: '#b4282d', // 文字和图片选中颜色
        inactiveTintColor: '#666', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height:0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
        style: {
            backgroundColor: 'white', // TabBar 背景色
            height:50,
            shadowOffset: {width: 0, height: 0},
            shadowColor: '#aaa',
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 20,
        },
        labelStyle: {
            fontSize: 12, // 文字大小,
            marginTop:0
        },
        iconStyle:{
            padding:0,
        }
    },
      
    
});

const AppNavigator = StackNavigator({
    TabBar: {
        screen: TabbarNavigator,
        navigationOptions: {
            header: null
        }
    },
    Login:{
        path:'login',
        screen:Login
    },

    
    // NewsDetail: {
    //     path: 'news/:id',
    //     screen: NewsDetail
    // }
});

export {
    AppNavigator
};
