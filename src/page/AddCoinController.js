import React, { Component, } from 'react'
import {
    View,
    Text,
    ImageBackground,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
    Dimensions, TouchableOpacity,
} from 'react-native'
import {connect} from "react-redux";
import CoinIcon from "../component/CoinIcon";
import CoinCard from "../component/CoinCard";
import {addCoinMiddleware, editCoinMiddleware} from "../middleware/CustomMiddleware";

const contentHeight = Dimensions.get('window').height - 50;

let _this = null;

class AddCoinController extends Component {

    static navigationOptions = ({navigation}) => ({

        // header : null,
        headerTitle: navigation.state.params.id<0 ? '添加虚拟货币' : '修改虚拟货币' ,
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
                   onPress={(e) => _this.doAction(_this.state.mode)}
                >保存</Text>
            </View>
        ),
    });

    constructor(props) {
        super(props);
        let { id, cuy, numbers, description} = this.props.navigation.state.params;
        if (numbers) numbers = numbers.toString();
        const mode = id <0 ? 'ADD' : 'EDIT';
        this.state={
            id : id,
            numbers: numbers || '',
            description: description || '',
            cuy: cuy || 'btc',
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
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={280}>
                <ImageBackground  style={styles.main} source={require('../images/addBackground.jpg')} resizeMode='stretch' >
                    <View style={styles.card}>
                    <CoinCard cuy={this.state.cuy}/>
                    </View>
                    <View style={styles.box}>
                        <View>
                        </View>

                        <View style={styles.secondLayer} onPress = {this._onPress.bind(this)}>
                            <Text style={styles.label}>拥有货币数量 (*)</Text>
                            <TextInput
                                style={styles.inputNumber}
                                onChangeText={(text) => this.setState({numbers: text})}
                                keyboardType ='numeric'
                                placeholder = '0.1'
                                defaultValue = {this.state.numbers}
                            />

                        </View>
                        <View style={styles.thirdLayer}>
                            <Text style={styles.label}>数字货币类型 (*)</Text>
                            <View style={styles.icons}>
                                {
                                    ["btc","ltc","etc","xmr"].map(
                                        (item, index)=>{
                                            return  <CoinIcon key={index} style={styles.thumb} cuy={item} width={42} height={42} marginLeft ={3} marginRight ={5} event={(e)=>{
                                                this.setState({
                                                        cuy : item,
                                                    }
                                                );
                                            }

                                            } />
                                        }
                                    )
                                }
                            </View>
                        </View>
                        <View style={styles.forthLayer}>
                            <Text style={styles.label}>数字货币账户</Text>
                            <TextInput
                                onChangeText={(text) => this.setState({description: text})}
                                style={styles.inputDescription}
                                defaultValue = {this.state.description}
                                placeholder = '1geekH9EiFeitKpigP8NKNJ6UaCUpxmjw'
                            />
                        </View>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        )
    }


    doAction(e){
        switch(e){
            case 'EDIT':
                this.editToCoin();
                break;
            case 'ADD':
                this.addToCoin();
                break;
            default:
                this.addToCoin();
        }
    }

    addToCoin(){
        const { dispatch } = this.props;
        let test = ['btc-gbp','ada-gbp','bat-gbp','omg-gbp','zec-gbp','xmr-gbp','ark-gbp','ppc-gbp'];
        dispatch(
            addCoinMiddleware(
                this.state.cuy+'-gbp',
                parseFloat(this.state.numbers),
                this.state.description
        ));
        this.props.navigation.goBack();
    }

    editToCoin(){
        const { dispatch } = this.props;
            dispatch(editCoinMiddleware(
                this.state.id,
                this.state.cuy+'-gbp',
                parseFloat(this.state.numbers),
                this.state.description
            ));
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
        height:contentHeight*0.6,
    },
    card:{
        width: '90%',
        height: contentHeight*0.4,
        justifyContent: 'center',
    },
    main: {
        backgroundColor: '#1987fb',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
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