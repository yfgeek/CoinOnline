import React, { Component, } from 'react'
import {
    StyleSheet,
    ImageBackground,
    View,
    Text,
    Dimensions,
    StatusBar, ListView, ScrollView,
} from 'react-native'
import { connect } from 'react-redux'
import {addCoin, deleteCoin, pushBalance, setVisibilityFilter, showBalance, VisibilityFilters} from '../actions/actions'

import CoinItem from '../component/CoinItem'
import Header from '../component/HeaderMain'

var contentHeight = Dimensions.get('window').height-300;

class MainController extends Component {
    static navigationOptions  ={
        header: null,
    };
    render() {
        const {navigate} =this.props.navigation;
        const { dispatch, visibleTodos, visibilityFilter } = this.props;
        return (
            <View>
                <StatusBar barStyle="light-content"/>
                <Header
                    nav={ navigate }
                    balance={this.props.visibleBalance.reduce((pre, value)=>pre + parseFloat(value)).toFixed(2)}
                    onAddCoin={ (text) => {
                        let  price = Math.random().toFixed(2);
                        let test = ['btc-gbp','ada-gbp','bat-gbp','omg-gbp','zec-gbp','xmr-gbp','ark-gbp','ppc-gbp'];
                        dispatch(addCoin(test[Math.floor(Math.random()*test.length)],price));

                    }}
                />
                <ScrollView style={{height: contentHeight}}>

                    {
                        this.props.visibleTodos.map((todo, index) =>{
                            return <CoinItem cuy={todo.text} balance={todo.balance} key={index} />
                        })
                    }
                    {/*<CoinItem cuy='btc-gbp' />*/}
                    {/*<CoinItem cuy='ada-gbp' />*/}
                    {/*<CoinItem cuy='ark-gbp' />*/}
                    {/*<CoinItem cuy='bat-gbp' />*/}
                    {/*<CoinItem cuy='omg-gbp' />*/}
                    {/*<CoinItem cuy='ppc-gbp' />*/}
                    {/*<CoinItem cuy='xrp-gbp' />*/}
                    {/*<CoinItem cuy='zec-gbp' />*/}
                    {/*<CoinItem cuy='xmr-gbp' />*/}
                    {/*<CoinItem cuy='xmr-cny' />*/}

                </ScrollView>
            </View>
        )
    }
}
// function selectTodos(coins, filter) {
//     switch (filter) {
//         case VisibilityFilters.SHOW_ALL:
//             return coins
//         case VisibilityFilters.SHOW_COMPLETED:
//             return coins.filter(todo => todo.completed)
//         case VisibilityFilters.SHOW_ACTIVE:
//             return coins.filter(todo => !todo.completed)
//     }
// }

function select(state) {
    return {
        visibleTodos: state.coins,
        visibilityFilter: state.visibilityFilter,
        visibleBalance: state.allBalance,
    }
}
export default connect(select)(MainController)
