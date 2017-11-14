import React, { Component, } from 'react'
import {
    View,
    Text,
    ImageBackground,
    TextInput,
    StyleSheet,
} from 'react-native'
import {connect} from "react-redux";
import {addCoin, editCoin} from "../actions/actions";
import CoinIcon from "../component/CoinIcon";
import CoinCard from "../component/CoinCard";

let _this = null;

class AddCoinController extends Component {

    static navigationOptions = (navigation) => ({
        // header : null,
        headerTitle: '添加虚拟货币',
        headerBackTitle: '返回',
        headerStyle:{
            backgroundColor: '#3a4172',
        },
        headerTitleStyle: {
            color: '#ffffff',
        },
        headerBackTitleStyle:{
            color: '#ffffff',
        },
        headerRight:(
            <View>
                <Text style={{
                    color: '#ffffff',
                    marginRight: 12,
                }}
                   onPress={(e) => _this.addToCoin(e)}
                >保存</Text>
            </View>
        ),
    });

    constructor(props) {
        super(props);
        let mode = this.props.mode|| 'ADD';
        this.state={
            numbers: 0,
            cuy: '',
            mode: mode,
        };
    }


    componentDidMount() {
        _this = this;
    }

    _onPress() {
        console.warn("press");
        this.refs.inputNumber.blur();
    }

    render() {
        return(
            <View  onPress = {this._onPress}>
                <ImageBackground style={styles.main} source={require('../images/addBackground.jpg')} resizeMode='stretch' >
                    <CoinCard />
                    <View style={styles.box}>
                        <View>
                        </View>
                        <View style={styles.secondLayer}>
                            <Text style={styles.label}>拥有货币数量 (*)</Text>
                            <TextInput
                                ref = "inputNumber"
                                style={styles.inputNumber}
                                onChangeText={(text) => this.setState({numbers: text})}
                                keyboardType ='numeric'
                                placeholder = '0.1'
                            />

                        </View>
                        <View style={styles.thirdLayer}>
                            <Text style={styles.label}>数字货币类型 (*)</Text>
                            <View style={styles.icons}>
                                <CoinIcon style={styles.thumb} cuy="btc" width={44} height={44} marginLeft ={3} />
                                <CoinIcon style={styles.thumb} cuy="ltc" width={44} height={44} marginLeft ={10} />
                                <CoinIcon style={styles.thumb} cuy="eth" width={44} height={44} marginLeft ={10} />
                                <CoinIcon style={styles.thumb} cuy="etc" width={44} height={44} marginLeft ={10} />
                                <CoinIcon style={styles.thumb} cuy="xmr" width={44} height={44} marginLeft ={10} />
                            </View>
                        </View>
                        <View style={styles.forthLayer}>
                            <Text style={styles.label}>数字货币账户</Text>
                            <TextInput
                                ref = "inputNumber"
                                style={styles.inputDescription}
                                placeholder = '1geekH9EiFeitKpigP8NKNJ6UaCUpxmjw'
                            />
                                <View style={{ height: 60 }} />
                    </View>
                    </View>
                    {/*<View style={{*/}
                        {/*flexDirection: 'row',*/}
                        {/*position: 'absolute',*/}
                        {/*alignSelf: 'center',*/}
                        {/*bottom: 0,*/}
                        {/*backgroundColor: 'transparent',*/}
                        {/*justifyContent: 'center',*/}
                    {/*}}>*/}
                        {/*<View style={{*/}
                            {/*borderRightColor: '#606295',*/}
                            {/*borderRightWidth: 1,*/}
                            {/*height: 70,*/}
                            {/*justifyContent: 'center',*/}
                            {/*paddingRight: 50,*/}
                        {/*}}>*/}
                            {/*<Text style={styles.titleText} onPress={(e) => this.addToCoin(e)}>添加</Text>*/}
                        {/*</View>*/}
                        {/*<View style={{*/}
                            {/*height: 70,*/}
                            {/*justifyContent: 'center',*/}
                            {/*marginLeft: 50,*/}
                        {/*}}>*/}
                            {/*<Text style={styles.titleText} onPress={(e) =>         this.props.navigation.goBack()}>返回</Text>*/}
                        {/*</View>*/}
                    {/*</View>*/}
          </ImageBackground>
            </View>
            )

    }

    doAction(e,data){
        switch(e){
            case 'EDIT':
                this.editToCoin(data);
                break;
            case 'ADD':
                this.addToCoin();
                break;
            default:
                this.addToCoin();
        }
    }

    editToCoin(data){
        let {id,cuy,number,decription} = data;
        dispatch(editCoin())
    }

    addToCoin(e){
        const { dispatch } = this.props;
        let test = ['btc-gbp','ada-gbp','bat-gbp','omg-gbp','zec-gbp','xmr-gbp','ark-gbp','ppc-gbp'];
        dispatch(addCoin(test[Math.floor(Math.random()*(test.length -1))],this.state.numbers));
        this.props.navigation.goBack();

    }
}

function select(state) {
    return {
        visibleCoins: state.coins,
        visibleBalance: state.allBalance,
    }
}


var styles = StyleSheet.create({
    box: {
        width: '100%',
        height:'60%',
    },
    main: {
        backgroundColor: '#1987fb',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    secondLayer:{
        backgroundColor: '#3d6b9c',
        flex : 1,
        width: '100%',
        paddingTop: 25,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 10,

    },
    thirdLayer:{
        backgroundColor: '#275288',
        flex : 1,
        width: '100%',
        paddingTop: 25,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 10,

    },
    forthLayer:{
        backgroundColor: '#244c7f',
        flex : 1,
        width: '100%',
        paddingTop: 25,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 10,

    },
    label:{
        fontSize: 12,
        color: '#bdc0d1',
        fontWeight: '100',
        paddingBottom:15,
    },

    icons: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    title:{
        position: 'absolute',
        top: 50,
        backgroundColor:'transparent',

    },
    titleText:{
        color: '#ffffff',
        fontSize: 18,
        shadowColor: '#071e48',
        shadowOffset:{
            width: 0,
            height: 0,
        },
        shadowRadius: 2,
    },
    inputNumber:{
        height: 40,
        color: '#fff',
        fontSize: 48,
        borderColor: null,
        borderWidth: 0
    },
    inputDescription:{
        height: 40,
        color: '#ffffff',
        fontSize: 25,
        borderColor: null,
        borderWidth: 0
    },

});

export default connect(select)(AddCoinController)