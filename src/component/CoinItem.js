import React, { Component, } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native'

import CoinIcon from "./CoinIcon";
import {deleteCoin} from "../actions/actions";
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipeout';


class CoinList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            spinkitSize: 50,
            reversed: false,
        };
        this.dispatch  = this.props.dispatch;

    }

    componentDidMount() {

    }
    reverse(){
            this.setState({
                              dataSource: {
                                  base: this.state.dataSource.target,
            target: this.state.dataSource.base,
            price:  1 / this.state.dataSource.price,
        },
        reversed: true,
        });
    }

    deleteItem(key){
        this.dispatch(deleteCoin(key));
    }

    editItem(key){
        this.props.nav('AddCoinController',{
            id: key,
            cuy: this.props.cuy.toLowerCase().split("-")[0],
            numbers: this.props.numbers,
            description: this.props.description,
        });
    }

    render() {
        let covert = this.props.cuy.toUpperCase().split("-");
        let buttons = [
            {
                text: '编辑',
                onPress : (e) => this.editItem(this.props.itemIndex),
            },
            {
                text: '删除',
                backgroundColor: '#fb3c38',
                onPress : (e) => this.deleteItem(this.props.itemIndex),
            },
        ];

        return (
            <Swipeout right={buttons}>
            <View>
                <TouchableHighlight style={{backgroundColor: '#f9f9f9', marginTop:0, marginBottom:1 , height: 60}} underlayColor={'#ccc'} onPress={
                    (e) => this.editItem(this.props.itemIndex)
                } >
                    <View style={styles.cell}>
                        <CoinIcon style={styles.thumb} cuy={covert[0]} reversed={this.state.reversed}/>
                        <View style={styles.rightContainer}>
                            <Text style={{fontSize:17}} numberOfLines={2}>{this.props.balance.toFixed(4)}</Text>
                            <View style={{marginTop: 8, flex:1, flexDirection:'row', alignItems:'stretch', justifyContent: 'space-between'}}>
                                <Text style={styles.label} numberOfLines={1}>{covert[1]}</Text>
                                <Text style={styles.label}>{this.props.numbers} {covert[0]}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
            </Swipeout>

        )
    }
}

var styles = StyleSheet.create({
    cell: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightContainer: {
        flex: 1,
        marginTop: 8,
        marginLeft: 15,
        marginRight: 15,
    },
    thumb: {
        width: 48,
        height: 48,
        marginLeft: 15,
    },
    label:{
        fontSize: 13
    }
});
function select(state) {
    return {
        visibleBalance: state.allBalance,
    }
}
export default connect(select)(CoinList)
