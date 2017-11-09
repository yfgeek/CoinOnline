import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
import { StackNavigator  } from 'react-navigation';
import AddCoinController from "../page/AddCoinController";
import MainController from "../page/MainController";
import TabNavigation from "./TabNavigation";
import SelectCoinController from "../page/SettingController"


const MyStackNavigation  = StackNavigator({
    Main: {screen: TabNavigation},
    SelectCoinController: { screen: SelectCoinController },
    AddCoinController: { screen: AddCoinController },
    MainController: { screen: MainController },
});
export default MyStackNavigation;