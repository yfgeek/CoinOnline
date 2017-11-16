
import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
import { createStore ,applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import MyStackNavigation from "./src/navigation/MyStackNavigation";
import App from './src/reducers/reducers'
import devToolsEnhancer from 'remote-redux-devtools';
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import thunk from 'redux-thunk';

export default class CoinOnline extends Component {
    render() {
        const store = createStore(App, compose(applyMiddleware(thunk),devToolsEnhancer({ realtime: true, port: 8000 })));
        const {  nav } = this.props;
        return (
            <Provider store={store}>
            <MyStackNavigation />
            </Provider>
        );
    }
}
AppRegistry.registerComponent('CoinOnline', () => CoinOnline);
