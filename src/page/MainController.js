import React, { Component, } from 'react'
import {
    View,
    Dimensions,
    StatusBar,
    ScrollView,
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
    constructor(props) {
        super(props);
    }
    render() {
        const {navigate} =this.props.navigation;
        const { dispatch, visibleTodos, visibilityFilter } = this.props;
        let showbalance = this.props.visibleBalance.reduce((pre, value)=>pre + parseFloat(value)).toFixed(2);
        return (
            <View>
                <StatusBar barStyle="light-content"/>
                <Header
                    nav={ navigate }
                    balance={showbalance}
                    // onAddCoin={ (cuy,balance) => {
                    //     dispatch(addCoin(cuy, balance));
                    //     // let test = ['btc-gbp','ada-gbp','bat-gbp','omg-gbp','zec-gbp','xmr-gbp','ark-gbp','ppc-gbp'];
                    //     // for(let i=0; i<test.length;i++){
                    //     //     ((num)=>{
                    //     //         setTimeout(function(){
                    //     //             let  price = Math.random().toFixed(2);
                    //     //             dispatch(addCoin(test[num],price));
                    //     //         }, 1000 * (i+1));
                    //     //     })(i)
                    //     // }
                    //
                    // }}
                />
                <ScrollView style={{height: contentHeight, backgroundColor: '#f1f1f1'}}>

                    {
                        this.props.visibleCoins.map((todo, index) =>{
                            return <CoinItem cuy={todo.text} balance={todo.balance} key={index} />
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}


function select(state) {
    return {
        visibleCoins: state.coins,
        visibleBalance: state.allBalance,
    }
}
export default connect(select)(MainController)
