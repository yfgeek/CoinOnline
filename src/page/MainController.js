import React, { Component, } from 'react'
import {
    StyleSheet,
    ImageBackground,
    View,
    Text,
    Dimensions,
    StatusBar, ListView, ScrollView,
} from 'react-native'
import CoinList from '../component/CoinList'
import Header from '../component/HeaderMain'

var contentHeight = Dimensions.get('window').height-250;

class MainController extends Component {
    static navigationOptions  ={
        header: null,
    };
    render() {
        const {navigate} =this.props.navigation;
        return (
            <View>
                <StatusBar barStyle="light-content"/>
                <Header nav={ navigate }/>
                <ScrollView style={{height: contentHeight}}>
                    <CoinList cuy='btc-gbp' />
                     <CoinList cuy='ada-gbp' />
                    <CoinList cuy='ark-gbp' />
                    <CoinList cuy='bat-gbp' />
                    <CoinList cuy='omg-gbp' />
                    <CoinList cuy='ppc-gbp' />
                    <CoinList cuy='xrp-gbp' />
                    <CoinList cuy='zec-gbp' />
                    <CoinList cuy='xmr-gbp' />
                    <CoinList cuy='xmr-cny' />

                </ScrollView>
            </View>
        )
    }
}

export default MainController
