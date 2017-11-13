import React, { Component, } from 'react'
import {
    View,
    Text,
    ImageBackground,
    Dimensions,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
} from 'react-native'
import {connect} from "react-redux";
import {addCoin} from "../actions/actions";
import CoinIcon from "../component/CoinIcon";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

var contentHeight = Dimensions.get('window').height-500;
var contentWidth = Dimensions.get('window').width;
let _this = null;

class AddCoinController extends Component {

    static navigationOptions ={
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
                >添加</Text>
            </View>
        ),
    };

    constructor(props) {
        super(props);
        this.state={
            numbers: 0,
            cuy: '',
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
                    {/*<View style={styles.title}>*/}
                        {/*<Text style={styles.titleText}>添加数字货币</Text>*/}
                    {/*</View>*/}
                    <View style={styles.card}>
                        <View style={{
                            alignSelf: 'flex-end',
                        }}>
                            <CoinIcon style={styles.thumb} cuy="btc" width={38} height={38} marginLeft ={3} />
                        </View>
                        <View style={{
                            marginBottom: 10,
                        }}>
                            <Text style={styles.cardTitle}>CARD NUMBER</Text>
                            <Text style={{
                                fontSize: 20,
                                letterSpacing: 1,
                                fontWeight: '600',
                                backgroundColor: '#eeeeee',
                                paddingTop: 8,
                                paddingBottom: 8,
                                paddingLeft: 16,
                                paddingRight: 16,

                            }}>···· ···· ···· ···· ···· ···· xmjw</Text>

                        </View>

                        <View style={{
                            flexDirection: 'row',
                            width: '100%',

                        }}>
                        <View style={{
                            alignSelf: 'flex-start'
                        }}>
                            <Text style={styles.cardTitle}>CARD HOLDER</Text>
                            <Text>Your Name</Text>
                        </View>
                        <View style={{
                            alignSelf: 'flex-end'
                        }}>
                            <Text style={styles.cardTitle}>EXPIRATION DATE</Text>
                            <Text>Never</Text>
                        </View>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View>
                        </View>
                        <View style={styles.secondLayer}>
                            <Text style={styles.label}>拥有货币数量 (*)</Text>
                            <TextInput
                                ref = "inputNumber"
                                style={{height: 40, color: '#fff', fontSize: 48, borderColor: null, borderWidth: 0}}
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
                                style={{height: 40, color: '#fff', fontSize: 25, borderColor: null, borderWidth: 0}}
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
    card:{
        bottom: '5%',
        width: '90%',
        height: 180,
        padding: 15,
        backgroundColor: '#f5f5f5',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderRadius: 7,
        shadowColor: '#0d2959',
        shadowOffset:{
            width: 0,
            height: 0,
        },
        shadowRadius: 2,
        shadowOpacity: 0.3,

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
    thumb:{
        marginRight: 5,
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
    cardTitle: {
        color: '#8a8a8a',
        fontSize: 12,
        fontWeight: 'bold',
        backgroundColor:'transparent',

    }

});

export default connect(select)(AddCoinController)