import React, { Component, } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Platform,

} from 'react-native'
import {connect} from "react-redux";
import {addCoin} from "../actions/actions";

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

        };
    }


    componentDidMount() {
    }

    render() {
        return(
            <View>
                <Text onPress={(e) => this.addToCoin(e)}>点我添加一个</Text>
            </View>
            )

    }

    addToCoin(e){
        let { dispatch } = this.props;
        dispatch(addCoin("btc-gbp",1));
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
function select(state) {
    return {
        visibleCoins: state.coins
    }
}
export default connect(select)(AddCoinController)