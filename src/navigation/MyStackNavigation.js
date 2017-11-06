import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
import { StackNavigator  } from 'react-navigation';
import AddCoinController from "../page/AddCoinController";
import MainController from "../page/MainController";
import TabNavigation from "./TabNavigation";

const MyStackNavigation  = StackNavigator({
    Main: {screen: TabNavigation},
    AddCoinController: { screen: AddCoinController },
    MainController: { screen: MainController },
});
export default MyStackNavigation;