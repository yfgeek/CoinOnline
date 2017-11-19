import { AppRegistry } from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import MainController from '../page/MainController'
import SettingController from '../page/SettingController'
import * as React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddCoinController from "../page/SelectCoinController";
import MyStackNavigation from './MyStackNavigation';

const RouteConfigs = {
    MainController: {
        screen: MainController,
            navigationOptions: {
            tabBarLabel: '主页',
                tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-home' : 'ios-home-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    SettingController: {
        screen: SettingController,
            navigationOptions: {
            tabBarLabel: '设置',
                tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-settings' : 'ios-settings-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
};
const TabNavigatorConfig = {
    swipeEnabled: false,
};

const RootTabs = TabNavigator(RouteConfigs,TabNavigatorConfig);

export default RootTabs;
