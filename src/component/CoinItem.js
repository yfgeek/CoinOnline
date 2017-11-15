import React, { Component, } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ListView,
    Dimensions,
    TouchableHighlight,
} from 'react-native'

import CoinIcon from "./CoinIcon";
import {deleteBalance, deleteCoin, pushBalance} from "../actions/actions";
import { connect } from 'react-redux';


class CoinList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
            loaded: false,
            cuy: this.props.cuy,
            spinkitSize: 50,
            reversed: false,
        };
        this.dispatch  = this.props.dispatch;

    }

    componentDidMount() {
        this.fetchData();
    }


    fetchData() {
        fetch("https://api.cryptonator.com/api/ticker/"+this.state.cuy, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then(
                (responseData) => {
                    if(responseData.ticker.success === "false"){
                        return Promise.reject(new Error("this promise is rejected"));
                    }
                    this.setState({
                        dataSource: responseData.ticker,
                        loaded: true,
                    });
                    let price = responseData.ticker.price * this.props.numbers;
                    this.dispatch(pushBalance(price));
                }
            )
            .catch((error) => {

            })
            .done();
    }

    __renderLoadingView() {
        let covert = this.state.cuy.toUpperCase().split("-");
        return (
            <View>
                <TouchableHighlight style={{backgroundColor: '#f9f9f9', marginTop:0, marginBottom:1 , height: 60}} underlayColor={'#ccc'} onPress={(e) => this.deleteItem(this.props.itemIndex) } >
                    <View style={styles.cell}>
                        <CoinIcon style={styles.thumbnai} cuy={covert[0]}/>
                        <View style={styles.rightContainer}>
                            <Text style={{fontSize:17}} numberOfLines={2}>Loading</Text>
                            <View style={{marginTop: 8, flex:1, flexDirection:'row', alignItems:'stretch', justifyContent: 'space-between'}}>
                                <Text style={styles.label} numberOfLines={1}>{covert[1]}</Text>
                                <Text style={styles.label}>{this.props.numbers} {covert[0]}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
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
        this.dispatch(deleteBalance(key));
    }
    editItem(key){
        this.props.nav('AddCoinController',{
            id: key,
            cuy: this.state.cuy.toLowerCase().split("-")[0],
            numbers: this.props.numbers,
        });
    }
    render() {
        if (!this.state.loaded) {
            return this.__renderLoadingView();
        }
        return (
            <View>
                <TouchableHighlight style={{backgroundColor: '#f9f9f9', marginTop:0, marginBottom:1 , height: 60}} underlayColor={'#ccc'} onPress={
                    (e) => this.editItem(this.props.itemIndex)
                } >
                    <View style={styles.cell}>
                        <CoinIcon style={styles.thumbnai} cuy={this.state.dataSource.base} reversed={this.state.reversed}/>
                        <View style={styles.rightContainer}>
                            <Text style={{fontSize:17}} numberOfLines={2}>{(this.state.dataSource.price*this.props.numbers).toFixed(4)}</Text>
                            <View style={{marginTop: 8, flex:1, flexDirection:'row', alignItems:'stretch', justifyContent: 'space-between'}}>
                                <Text style={styles.label} numberOfLines={1}>{this.state.dataSource.target}</Text>
                                <Text style={styles.label}>{this.props.numbers} {this.state.dataSource.base}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>

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
    thumbnail: {
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
