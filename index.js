
import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
import MyStackNavigation from "./src/navigation/MyStackNavigation";
export default class CoinOnline extends Component {
    render() {
        return (
            <MyStackNavigation />
        );
    }
}
AppRegistry.registerComponent('CoinOnline', () => CoinOnline);
