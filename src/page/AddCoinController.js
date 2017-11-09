import React, { Component, } from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    Platform,

} from 'react-native'

var contentHeight = Dimensions.get('window').height-500;
var contentWidth = Dimensions.get('window').width;

class AddCoinController extends Component {

    static navigationOptions ={
        headerTitle: '添加虚拟货币',
        headerBackTitle: '返回',
        headerStyle:{
            backgroundColor: '#397fc2',
        },
        headerTitleStyle: {
            color: '#ffffff',
        },
        headerBackTitleStyle:{
            color: '#ffffff',
            fontSize: '48',
        }
    };

    constructor(props) {
        super(props);
        this.state={
            dataSource:null,
            loaded: false,
            layout: 'list',
            text: ''

        }
    }


    componentDidMount() {
    }

    render() {
        return(
            <View></View>
            )

    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    list:{
        height: 20,
        lineHeight: 20,
        padding:5,
    }

});

export default AddCoinController
