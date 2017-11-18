import React, { Component, } from 'react'
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView,
    Dimensions, Image,
} from 'react-native'

import { List, ListItem } from 'react-native-elements'

import HeaderTitle from '../component/HeaderTitle'

var contentHeight = Dimensions.get('window').height;

class SettingController extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: '设置' ,
        headerStyle:{
            backgroundColor: '#3c82f7',
        },
        headerTitleStyle: {
            color: '#ffffff',
        },
        headerBackTitleStyle:{
            color: '#ffffff',
        }
    });


    render() {
        const list = [
            {
                title: '基准货币',
                icon: 'av-timer'
            },
            {
                title: '关于',
                icon: 'flight-takeoff'
            },
        ];
        return (
            <View>
                <ScrollView style={{height: contentHeight}}>
                <View style={{
                    alignItems: 'center',
                    marginTop: 20,
                }}>
                    <Image source={require('../images/logo.png')} resizeMode='contain' style={{
                        width :128,
                        height :128

                    }} />
                    <Text style={{
                        fontSize: 20,

                    }}>CoinOnline</Text>
                    <Text style={{
                        color: '#666666',
                    }}>您的数字货币小助手</Text>

                </View>
                    <List>
                        <ListItem
                            style ={ styles.list}
                            title= "货币基准"
                            leftIcon={{name: 'public'}}
                        />
                        <ListItem
                            switchButton
                            hideChevron
                            onSwitch={() => {}}
                            style ={ styles.list}
                            title= "持久模式"
                            leftIcon={{name: 'sd-card'}}
                        />
                        <ListItem
                            style ={ styles.list}
                            title= "关于"
                            leftIcon={{name: 'favorite'}}
                        />

                    </List>
                </ScrollView>

            </View>
        )
    }
}

var styles = StyleSheet.create({
    list:{
    }

});
export default SettingController
