import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native';

import { List, ListItem } from 'react-native-elements';

import HeaderTitle from '../component/HeaderTitle';
import { removeAllCoins } from '../actions/actions';
import { connect } from 'react-redux';

const contentHeight = Dimensions.get('window').height;


class SettingController extends Component {
    static navigationOptions = ({ navigation }) => ({
      header: null
      // headerTitle: '设置' ,
      // headerStyle:{
      //     backgroundColor: '#3c82f7',
      // },
      // headerTitleStyle: {
      //     color: '#ffffff',
      // },
      // headerBackTitleStyle:{
      //     color: '#ffffff',
      // }
    });

    __rednerTitle() {
      if (Platform.OS === 'ios') {
        return <HeaderTitle title="设置" indent={1}/>;
      }
      return <View/>;
    }

    render() {
      const { dispatch } = this.props;
      return (
            <View>
                <StatusBar barStyle="light-content"/>
                {this.__rednerTitle()}
                <ScrollView style={{ height: contentHeight }}>
                <View style={{
                    alignItems: 'center',
                    marginTop: 20
                }}>
                    <Image source={require('../images/logo.png')} resizeMode='contain' style={{
                        width: 128,
                        height: 128

                    }} />
                    <Text style={{
                        fontSize: 20

                    }}>CoinOnline</Text>
                    <Text style={{
                        color: '#666666'
                    }}>您的数字货币小助手</Text>

                </View>
                    <List>
                        <ListItem
                            style ={ styles.list}
                            title= "更改基准货币"
                            leftIcon={{ name: 'public' }}
                            onPress = { e => navigation('AddCoinController', {
                                id: -1
                            }) }
                        />
                        <ListItem
                            switchButton = {true}
                            hideChevron
                            switched
                            onSwitch={() => {}}
                            style ={ styles.list}
                            title= "持久模式"
                            leftIcon={{ name: 'sd-card' }}
                        />
                        <TouchableOpacity>
                        <ListItem
                        hideChevron
                        onPress={() => {
                            dispatch(removeAllCoins());
                        }}
                        style ={ styles.list}
                        title= "初始化数据"
                        leftIcon={{ name: 'sd-card' }}
                         />
                        </TouchableOpacity>
                        <ListItem
                            style ={ styles.list}
                            title= "关于"
                            leftIcon={{ name: 'favorite' }}
                        />

                    </List>
                </ScrollView>

            </View>
      );
    }
}

var styles = StyleSheet.create({
  list: {
  }

});


function select(state) {
  return {
    visibleCoins: state.reducer.coins,
    visibleSettings: state.reducer.settings
  };
}

export default connect(select)(SettingController);
