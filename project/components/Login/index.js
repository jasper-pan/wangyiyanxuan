import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

export default class NewsDetail extends Component {
    static navigationOptions = {
        title: 'News Detail',
    }
    render() {
        return (
            <View><Text>小哥，精彩内容等你来看，哈哈。。。</Text></View>
        );
    }
}
