import React, { Component, } from 'react'
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView,
    Dimensions,
} from 'react-native'
import HeaderTitle from '../component/HeaderTitle'

var contentHeight = Dimensions.get('window').height-22;

class SettingController extends Component {
    static navigationOptions  ={
        header: null,
    };
    render() {
        return (
            <View>
                <StatusBar barStyle="light-content"/>
                <HeaderTitle title="设置" />
                <ScrollView style={{height: contentHeight}}>

                </ScrollView>

            </View>
        )
    }
}

export default SettingController
